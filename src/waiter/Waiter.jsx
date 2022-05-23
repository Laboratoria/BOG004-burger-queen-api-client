import React from "react";
import { Navigate } from "react-router-dom";

export default class Waiter extends React.Component {
    render(){
        return <div>
            Soy un Mesero
            <button onClick={this.props.logoutFn}>Salir</button>  
            {!this.props.user && (<Navigate to="/" />)}           
        </div>

    }
}
