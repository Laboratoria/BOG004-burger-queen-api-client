import React from "react";
import Waiter from "./waiter/Waiter";
import Login from "./login/Login";
import "./App.css";
import "normalize.css";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import {UserApi} from './api/api-utils';
import Admin from "./admin/Admin";
import Chef from "./kitchen/Chef";


class App extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      user: undefined
    };
    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
    this.userApi = new UserApi();
  }

  login(user){
    //1. llamar al servicio
    return this.userApi.login(user)
    .then(
      (apiUser) => {        
        this.setState({user: apiUser});        
      }
    )
    .catch(
      (error)=>{ 
        console.log(error.message);
        throw new Error("Error en autenticación");
      } 
    );    
  }

  logout(){
    this.setState({user: undefined});
  }

  
  render() {
    return <div className="App">
    <Router>                
      <Routes>
        <Route path="/waiter" element={<Waiter user={this.state.user} logoutFn={this.logout} tablesCount={12}/>} />
        <Route path="/admin" element={<Admin user={this.state.user} logoutFn={this.logout} />} />
        <Route path="/chef" element={<Chef user={this.state.user} logoutFn={this.logout} />} />
        <Route path="/" element={<Login user={this.state.user} loginFn={this.login} />} />
      </Routes>
      
    </Router>    
    </div>;
  }
}

export default App;
