import React from "react";


export default class LoginForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = { email: '', password: '', error: '' };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.reset = this.reset.bind(this);
    }
    handleChange(event) {
        this.setState({ [event.target.name]: event.target.value });
    }
    handleSubmit(event) {
        //alert('A name was submitted: ' + this.state.value);
        this.props.loginFn(this.state)
        .then(
            ()=>{}
        )
            .catch(
                (error)=>{                    
                    this.setState({ error });
                }
            );
        //Si esta funcion falla deberiamos hacer algo
        event.preventDefault();
    }
    reset(event) {
        this.setState({ email: '', password: '', error: '' });
    }

    render() {
        return (
            <form className="LoginForm" onSubmit={this.handleSubmit}>
                <input className= "loginInput" type="email" required minLength={7} name="email" value={this.state.email} placeholder="Ingrese su correo electronico" onChange={this.handleChange} />
                <input className= "loginInput"type="password" required name="password" minLength={4} value={this.state.password} placeholder="Ingrese su contraseña" onChange={this.handleChange} />
                <input className= "btnLogin" type="submit" value="Ingresar" />
                <div>{this.state.error?.toString()}</div>
            </form>
        );
    }

}