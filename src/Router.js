import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import Home from './components/Home';
import Venues from './components/Venues/Venues';
import CreateVenue from './components/Venues/CreateVenue';
import Error from './components/Error';
import Login from './components/Login';
import SingUp from './components/SingUp';

class Router extends Component {
    render() {
        return (
            <BrowserRouter> 
            
                    <Switch>
                        {/*Cambiar la ruta barra por otro componente luego*/}
                        <Route exact path="/" component={Login}></Route>
                        <Route path="/home" component={Home}></Route>
                        <Route path="/venues" component={Venues}></Route>
                        <Route path="/createVenue" component={CreateVenue}></Route>
                        <Route path="/login" component={Login}></Route>
                        <Route path="/singUp" component={SingUp}></Route>

                        <Route component={Error}></Route>
                    </Switch>


            </BrowserRouter>
        );
    }
}
export default Router;