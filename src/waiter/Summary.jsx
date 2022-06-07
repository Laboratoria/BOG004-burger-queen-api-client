
import React from "react";


export default function Summary(props) {
    console.log(props.products + " " + (typeof props.products));


    function calculateTotalPay(){
        
        return Array.from(props.products.values()).reduce((prev, curr)=>prev+(curr.product.price*curr.qty), 0);

    }

    return (
        <div className="Summary">
            {Array.from(props.products.values()).map(item =>
                <div className="childSumary" key={item.product.id}>
                    <button className="material-symbols-outlined ">add_circle</button>
                    <span>{item.qty}</span>
                    <button className="material-symbols-outlined">do_not_disturb_on</button>
                    <span>{item.product.name}</span>
                    <span>${item.product.price * item.qty}</span>
                </div>)}
                <div className="totalPay">
                    Pagar <span>{calculateTotalPay()}</span>
                </div>
                <div className="send">Enviar</div>
        </div>
    );

}