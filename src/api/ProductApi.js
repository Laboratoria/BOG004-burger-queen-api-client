import axios from "axios";


export default class ProductApi{

baseURL = "http://localhost:8080/products";

constructor(accessToken){
    this.accessToken = accessToken;
}

getHeaders(){
    return {
        'Content-Type':'application/json', 
        'Authorization': 'Bearer '+this.accessToken
    };
}

create(product){
    return axios.post(this.baseURL, product, {headers:this.getHeaders()})
        .then(
            (result)=>{                                        
                return result.data; 
            }
        )
        .catch(
            (error)=>{
                console.log("Unexpected error: "+error);
                throw Error("Error en la creación de producto: "+error.message);
            }
        );   
}

update(product){
    const patchURL = `${this.baseURL}/${product.id}`;
    return axios.post(patchURL, product, {headers:this.getHeaders()})
        .then(
            (result)=>{                                        
                return result.data; 
            }
        )
        .catch(
            (error)=>{
                console.log("Unexpected error: "+error);
                throw Error("Error en la actualización de producto: "+error.message);
            }
        );   
}

list(type){        
    let listURL = this.baseURL;
    if(type !== undefined){
        listURL += `?type=${type}`;
    }
    return axios.get(listURL, {headers:this.getHeaders()})
        .then(
            (result)=>{                                                            
                return result.data; 
            }
        )
        .catch(
            (error)=>{
                console.log("Unexpected error: "+error);
                throw Error("Error en la consulta de productos: "+error.message);
            }
        );  
}

get(id){
    const getURL = `${this.baseURL}/${id}`;        
    return axios.get(getURL, {headers:this.getHeaders()})
        .then(
            (result)=>{                                        
                return result.data; 
            }
        )
        .catch(
            (error)=>{
                console.log("Unexpected error: "+error);
                throw Error("Error en la consulta de producto: "+error.message);
            }
        );   
}

delete(id){
    const deleteURL = `${this.baseURL}/${id}`;        
    return axios.delete(deleteURL, {headers:this.getHeaders()})
        .then(
            (result)=>{                                        
                return result.data; 
            }
        )
        .catch(
            (error)=>{
                console.log("Unexpected error: "+error);
                throw Error("Error en la elimiación de producto: "+error.message);
            }
        );  
}

}