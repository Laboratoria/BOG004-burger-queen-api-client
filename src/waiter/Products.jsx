import { useEffect, useState } from 'react';
import './Waiter.css';
import ProductApi from "../api/ProductApi";

export default function Products(props) {
    const productApi = new ProductApi(props.user?.accessToken);
    const categories = ["Desayuno", "Almuerzo", "Acompañamiento", "Bebidas"];
    const [category, setCategory] = useState(undefined);
    const [products, setProducts] = useState(undefined);
    useEffect(
        ()=>{
            if(category && !products ){
                productApi.list(category)
                    .then(
                        (_products)=>{
                            setProducts(_products);
                        }
                    )
                    .catch(
                        (error)=>{
                            console.log("Error: "+error);
                            //TODO: hacer algo!
                        }
                    );
            }
        }
    );
   
    const selectProduct = function(prod){
       switch(category){
            case 'Desayuno':
               setCategory(undefined);
               setProducts(undefined);
            break;
            case 'Almuerzo':
                setCategory("Acompañamiento");
                setProducts(undefined);
            break;
            case "Bebidas":
                setCategory(undefined);
                setProducts(undefined);
            break;
            case "Acompañamiento":
                setCategory("Bebidas");
                setProducts(undefined);
            break;
            default:{
                throw new Error("Categoria "+category+" no esperada!");
            }
        }
        props.addProduct(prod);        
    }

    
    return (
    <div>
        { category && products && <span onClick={()=>{setCategory(undefined);setProducts(undefined);}} className="material-symbols-outlined">chevron_left</span>}
        <div className="productBox">
             {!category && categories.map( cat => <button onClick={() => setCategory(cat)} className="product"  key={cat}>{cat}</button> )}
             { category && products && products.map( prod => <button className="product" onClick={()=> selectProduct(prod)}  key={prod.id}>{prod.name}</button> )}
        </div>
    
    </div>

    );
}