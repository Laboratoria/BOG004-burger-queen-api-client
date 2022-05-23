import React from "react";
import { Navigate } from "react-router-dom";

export default class Admin extends React.Component{
render() {      
        return <div>soy administrador
            <button onClick={this.props.logoutFn}>Salir</button>  
            {!this.props.user && (<Navigate to="/" />)}  
        </div>
        
    }
}
