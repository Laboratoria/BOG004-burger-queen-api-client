import React, { useState } from "react";

export default function Customer(props){

    function handleChange (event){
        props.setCustomer(event.target.value);
    }    


return(    
    <div className="box-customer">
        <input className="Customer" placeholder= "Ingresar nombre del Cliente" type="text" value={props.customer} onChange={handleChange} />
    </div>   
);

}