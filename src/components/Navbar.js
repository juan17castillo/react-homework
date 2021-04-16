import React,{Component} from 'react';
import {NavLink} from 'react-router-dom';
class Navbar extends Component{

    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark container-fluid">

            <div className="container">
                <NavLink className="navbar-brand" to="/" activeClassName="active">User's & Campus Manager</NavLink>
    
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
    
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav me-auto">
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/home" activeClassName="active">Inicio</NavLink>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Contact</a>
                        </li>
                    </ul>
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/singUp" activeClassName="active">Sing Up</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/login" activeClassName="active">Login</NavLink> 
                        </li>
                    </ul>
                </div>
    
            </div>
        </nav>
        );
    }

}
export default Navbar;