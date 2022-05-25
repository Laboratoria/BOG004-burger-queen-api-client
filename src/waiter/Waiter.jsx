import React from "react";
import { Navigate } from "react-router-dom";
import "./Waiter.css"
import Logo from "../components/Logo";

export default class Waiter extends React.Component {
   
    render(){
        const  tablesCount =  this.props.tablesCount;
        let arrayTables = [];
        for (var i=0 ; i<tablesCount; i++) {
            arrayTables.push(
                <div key= {i} className="item-Table">
                    <div  className="material-symbols-outlined icon-Table"  >table_restaurant</div>
                    <div >Mesa {i+1}</div>
                </div>                
            )
    }
        return <div className="Waiter">
            <Logo />
            <div className="table">{arrayTables}</div>
            
            <button onClick={this.props.logoutFn}>Salir</button>  
            {!this.props.user && (<Navigate to="/" />)}   
        </div>
    }
}
