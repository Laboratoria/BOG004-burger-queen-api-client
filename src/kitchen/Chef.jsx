import React from "react";
import { Navigate } from "react-router-dom";

export default class Chef extends React.Component{
render() {      
        return <div>soy Chef
            <button onClick={this.props.logoutFn}>Salir</button>  
            {!this.props.user && (<Navigate to="/" />)}  
        </div>
    }
}