import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import CreateVenue from "./components/Venues/CreateVenue";
import UpdateVenue from "./components/Venues/UpdateVenue";
import MasterVenue from "./components/Venues/MasterVenue";
import Error from "./components/Error";
import Login from "./components/Login";
import SingUp from "./components/SingUp";

class Router extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          {/*Cambiar la ruta barra por otro componente luego*/}
          <Route exact path="/" component={Login}></Route>
          <Route path="/home" component={Home}></Route>
          <Route path="/createVenue" component={CreateVenue}></Route>
          <Route path="/updateVenue" component={UpdateVenue}></Route>
          <Route path="/venue/:id" component={MasterVenue}></Route>
          <Route path="/login" component={Login}></Route>
          <Route path="/singUp" component={SingUp}></Route>

          <Route component={Error}></Route>
        </Switch>
      </BrowserRouter>
    );
  }
}
export default Router;
