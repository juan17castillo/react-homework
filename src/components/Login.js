import React, { Component } from 'react';
import { Redirect } from 'react-router';
import fire from '../config/firebase';
import {NavLink} from 'react-router-dom';

class Login extends Component {

    userNameRef = React.createRef();
    passwordRef = React.createRef();

    state = {
        user: {},
        logged: false
    }

    changeState = () => {
        this.setState({
            user: {
                userName: this.userNameRef.current.value,
                password: this.passwordRef.current.value
            }
        });
    }

    loginUser = (e) => {
        e.preventDefault();
        this.changeState();
        console.log(this.state.user);

        fire
            .auth()
            .signInWithEmailAndPassword(this.userNameRef.current.value, this.passwordRef.current.value)
            .then(res => {
                
                console.log(res); 
            })
            .catch(err => { console.log(err) });

            this.state.logged = true;
    }

    render() {
        if (this.state.logged) {
            this.state.logged = false;
            return <Redirect to='/home' />
        }
        return (
            <React.Fragment>
                <div className="container">
                    <section className="mx-auto my-5 card w-50 py-3">
                        <form className="d-flex flex-column justify-content-center align-items-center" onSubmit={this.loginUser}>
                            <h2 className="mb-5">Log In</h2>

                            <div className="d-flex flex-column justify-content-center align-items-center mb-3">
                                <label htmlFor="userName" className="font-weight-bold">Usuario</label>
                                <input type="text" name="userName" ref={this.userNameRef} onChange={this.changeState} required/>
                            </div>

                            <div className="d-flex flex-column justify-content-center align-items-center mb-3">
                                <label htmlFor="password" className="font-weight-bold">Contraseña</label>
                                <input type="password" name="password" ref={this.passwordRef} onChange={this.changeState} required/>
                            </div>
                            <NavLink className="mb-3" to="/singUp" >Registrarme</NavLink>
                            <input type="submit" value="Login" className="btn btn-primary"/>
                        </form>
                    </section>
                </div>
            </React.Fragment>
        );
    }

}
export default Login;