import React,{Component} from 'react';
import {NavLink} from 'react-router-dom';
import fire from '../config/firebase';

class Navbar extends Component{

    logout(){
        fire.auth().signOut();
    }

    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark container-fluid">

            <div className="container">
                <NavLink className="navbar-brand" to="/" activeClassName="active">User's & Campus Manager</NavLink>
    
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" >
                    <span className="navbar-toggler-icon"></span>
                </button>
    
                <div className="collapse navbar-collapse">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/home" activeClassName="active">Inicio</NavLink>
                        </li>
                        <li className="nav-item">
                        <NavLink className="nav-link" to="/venues" activeClassName="active">Sedes</NavLink>
                        </li>
                    </ul>
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/singUp" activeClassName="active">Sing Up</NavLink>
                        </li>
                        <li className="nav-item">
                        <NavLink className="nav-link" to="/" activeClassName="active" onClick={this.logout}>Log out</NavLink>
            
                        </li>
                    </ul>
                </div>
    
            </div>
        </nav>
        );
    }

}
export default Navbar;