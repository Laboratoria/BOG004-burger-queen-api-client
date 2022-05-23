
import React from "react";
import logo from '../Img/burguer.png';
// import './Logo.css';

export default class Logo extends React.Component{
    render(){
        return <div className="Logo">
            <img src={logo} width="100%" className="Burguer" alt="Burguer Queen Logo"></img>
            
        </div>      
    }
}
