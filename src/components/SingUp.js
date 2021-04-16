import React, { Component } from 'react';
import fire from '../config/firebase';

class SingUp extends Component {

    nameRef = React.createRef();
    lastNameRef = React.createRef();
    emailRef = React.createRef();
    passwordRef = React.createRef();
    passwordConfirmedRef = React.createRef();
    validUntilRef = React.createRef();
    campusRef = React.createRef();
    activeRef = React.createRef();

    state = {
        user:{}
    }

    changeState=()=>{
        this.setState({
            user:{
                name: this.nameRef.current.value,
                lastName: this.lastNameRef.current.value,
                email: this.emailRef.current.value,
                password: this.passwordRef.current.value,
                passwordConfirmed: this.passwordConfirmedRef.current.value,
                validUntil: this.validUntilRef.current.value,
                campus: this.campusRef.current.value,
                active: this.activeRef.current.value
            }
        });
    }

    saveUser=(e)=>{
        e.preventDefault();
        this.changeState();
        console.log(this.state.user);

        if(this.state.user.password === this.state.user.passwordConfirmed){

        }

        fire
        .auth()
        .createUserWithEmailAndPassword(this.state.user.email, this.state.user.password)
        .then(res=>{
            console.log(res);
        })
        .catch(error =>{
            console.log(error);
        });

    }

    render() {
        return (
            <React.Fragment>
                <div className="container">
                    <section>
                        <form className="mid-form" onSubmit={this.saveUser}>

                            <div className="form-group">
                                <label htmlFor="name">Nombre</label>
                                <input type="text" name="name" ref={this.nameRef} onChange={this.changeState} />
                            </div>

                            <div className="form-group">
                                <label htmlFor="lastName">Apellido</label>
                                <input type="text" name="lastName" ref={this.lastNameRef} onChange={this.changeState} />
                            </div>

                            <div className="form-group">
                                <label htmlFor="email">Email</label>
                                <input type="text" name="email" ref={this.emailRef} onChange={this.changeState} />
                            </div>

                            <div className="form-group">
                                <label htmlFor="password">Contraseña</label>
                                <input type="password" name="password" ref={this.passwordRef} onChange={this.changeState}/>  
                            </div>
                            
                            <div className="form-group">
                                <label htmlFor="passwordConfirmed">Repetir Contraseña</label>
                                <input type="password" name="passwordConfirmed" ref={this.passwordConfirmedRef} onChange={this.changeState}/>  
                            </div>

                            <div className="form-group">
                                <label htmlFor="validUntil">Valido Hasta</label>
                                <input type="text" name="validUntil" ref={this.validUntilRef} onChange={this.changeState}/>  
                            </div>

                            <div className="form-group">
                                <label htmlFor="campus">Sedes</label>
                                <input type="text" name="campus" ref={this.campusRef} onChange={this.changeState}/>  
                            </div>

                            <div className="form-group">
                                <label htmlFor="active">Activo</label>
                                <input type="text" name="active" ref={this.activeRef} onChange={this.changeState}/>  
                            </div>

                            <input type="submit" value="Register" className="btn btn-primary" />
                        </form>
                    </section>
                </div>
            </React.Fragment>
        );
    }

}
export default SingUp;