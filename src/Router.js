import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import Home from './components/Home';
import Error from './components/Error';
import Navbar from './components/Navbar';
import Login from './components/Login';
import SingUp from './components/SingUp';

class Router extends Component {
    render() {
        return (
            <BrowserRouter>
                {/*Aqui Se pueden cargar componentes estaticos*/} 
                <Navbar/>
                {/*Configurar rutas y paginas (importar el react-router-dom)*/}


                    <Switch>
                        <Route exact path="/" component={Home}></Route>
                        <Route path="/home" component={Home}></Route>
                        <Route path="/login" component={Login}></Route>
                        <Route path="/singUp" component={SingUp}></Route>

                        <Route component={Error}></Route>
                    </Switch>


            </BrowserRouter>
        );
    }
}
export default Router;