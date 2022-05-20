
import React from "react";
import logo from '../Img/burguer.jpg';
import crown from '../Img/crown.jpg';
// import './Logo.css';

export default class Logo extends React.Component{
    render(){
        return <div className="Logo" style={{width:this.props.width}}>
            <img src={logo} width="100%" className="Burguer" alt="Burguer Queen Logo"></img>    
            <img src={crown} width="20%" className="Crown" alt="crown"></img>
            ppp
        </div>      
    }
}
