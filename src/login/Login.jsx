import React from "react";
import Logo from "../components/Logo";
import LoginForm  from "./LoginForm";
import { Navigate } from "react-router-dom";

export default class Login extends React.Component {

    
    render(){
        return <div className="Login">
            <Logo width="100px" />
            <LoginForm loginFn={this.props.loginFn}/>            
            {this.props.user && this.props.user.roles.waiter && (<Navigate to="/waiter" />)}
            {this.props.user && this.props.user.roles.admin && (<Navigate to="/admin" />)}
            {this.props.user && this.props.user.roles.chef && (<Navigate to="/chef" />)}
        </div>
        
    }
}
