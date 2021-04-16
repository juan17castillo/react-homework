import React,{Component} from 'react';

class Login extends Component{

    userNameRef = React.createRef();
    passwordRef = React.createRef();

    state = {
        user:{}
    } 

    changeState = () =>{
        this.setState({
            user:{
                userName: this.userNameRef.current.value,
                password: this.passwordRef.current.value
            }
        });
    }
    
    loginUser =(e)=>{
        e.preventDefault();
        this.changeState();
        console.log(this.state.user)
    }

    render() {
        return (
            <React.Fragment>
                <div className="container">
                    <section>
                        <form className="mid-form" onSubmit={this.loginUser}>

                            <div className="form-group">
                                <label htmlFor="userName">Usuario</label>
                                <input type="text" name="userName" ref={this.userNameRef} onChange={this.changeState}/>  
                            </div>

                            <div className="form-group">
                                <label htmlFor="password">Contraseña</label>
                                <input type="password" name="password" ref={this.passwordRef} onChange={this.changeState}/>  
                            </div>

                            <input type="submit" value="Login" className="btn btn-primary"/>
                        </form>
                    </section>
                </div>
            </React.Fragment>
        );
    }

}
export default Login;