import React from "react";
import Waiter from "./waiter/Waiter";
import Login from "./login/Login";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import {UserApi} from './api/api-utils';


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
    this.userApi.login(user)
    .then(
      (apiUser) => {
        this.setState({user: apiUser});
        let navigate = useNavigate();
        navigate('/waiter');
        //como se redirige no abemos aun
        //TODO: mirar como redirigir a un path
      }
    )
    .catch(
      (error)=>{ 
        //TODO: hay quye hacer algo
      } 
    );    
  }

  logout(){
    this.setState({user: undefined});
  }

  render() {
    return <div className="App">
      <div>{this.state.user?this.state.user.email:'No autenticado'}</div>
    <Router>                
      <Routes>
        <Route path="/waiter" element={<Waiter user={this.state.user} />} />
        <Route
          path="/kitchen"
          element={<div>Hola, mi nombre es frailejon Ernesto Perez</div>}
        />
        <Route path="/" element={<Login loginFn={this.login} />} />
      </Routes>
    </Router>
    </div>;
  }
}

export default App;
