import React, { Component } from "react";
import fire from "../../config/firebase";
import Navbar from "../Navbar";
import { NavLink } from "react-router-dom";
import { Redirect } from "react-router";

class MasterVenue extends Component {
 
  state = {
    venue: {},
    db: fire.firestore(),
    users: null,
  };

  componentDidMount() {
    let venueId = this.props.match.params.id;
    this.state.db
      .collection("venues")
      .doc(venueId)
      .get()
      .then((doc) => {
        if (doc.exists) {
          let venue = {};
          venue = doc.data();
          this.setState({ venue: venue });
        } else {
          console.log("No such document!");
        }
      });
    this.state.db
      .collection("users")
      .where("venueId", "==", venueId)
      .get()
      .then((snapshot) => {
        const users = [];
        snapshot.forEach((doc) => {
          const data = doc.data();
          users.push(data);
        });
        this.setState({ users: users });
      })
      .catch((error) => console.log(error));
  }

  render() {
    if(this.props.location.state === undefined || !this.props.location.state.logged){ 
 
      return <Redirect to='/login'/>
    }
    return (
      <div>
        <Navbar />
        <div className="container text-center py-5">
          <div className="card">
            <h1 className="py-3 text-primary">
              <strong>{this.state.venue.name}</strong>
            </h1>
            <div className="row py-2">
              <h3 className="col-sm text-secondary">Ciudad</h3>
              <h2 className="col-sm">{this.state.venue.city}</h2>
            </div>
            <div className="row py-2">
              <h3 className="col-sm text-secondary">Dirección</h3>
              <h2 className="col-sm">{this.state.venue.address}</h2>
            </div>
            <div className="row py-2">
              <h3 className="col-sm text-secondary">Email</h3>
              <h2 className="col-sm">{this.state.venue.email}</h2>
            </div>
            <div className="row py-2">
              <h3 className="col-sm text-secondary">Teléfono</h3>
              <h2 className="col-sm">{this.state.venue.phone}</h2>
            </div>
            <div className="row py-2">
              <h3 className="col-sm text-secondary">Código Zip</h3>
              <h2 className="col-sm">{this.state.venue.zipCode}</h2>
            </div>
            {this.state.venue.active === "on" ? (
              <div className="row py-2">
                <h3 className="col-sm text-secondary">Status</h3>
                <h2 className="col-sm text-success">Activa</h2>
              </div>
            ) : (
              <div className="row py-2">
                <h3 className="col-sm text-secondary">Status</h3>
                <h2 className="col-sm text-secondary">Desactivada</h2>
              </div>
            )}
          </div>
        </div>
        <div className="container">
          <h1 className="py-3">
            <strong>Usuarios asociados</strong>
          </h1>
          <table class="table">
            <thead>
              <tr>
                <th scope="col">Nombre</th>
                <th scope="col">Apellido</th>
                <th scope="col">Email</th>
                <th scope="col">Acciones</th>
              </tr>
            </thead>
            <tbody>
              {this.state.users &&
                this.state.users.map((user) => {
                  return (
                    <tr key={user.id}>
                      <td>{user.name}</td>
                      <td>{user.lastName}</td>
                      <td>{user.email}</td>
                      <td>
                        {" "}
                        <NavLink
                          className="btn btn-warning mr-2"
                          to={{pathname:`/updateUser/${user.id}`, state:{logged: this.props.logged}}}
 
                        >
                          <i className="fas fa-edit"></i>
                        </NavLink>
                        <button
                          className="btn btn-danger"
                          onClick={() => this.onDelete(user.id)}
                        >
                          <i className="fas fa-trash"></i>
                        </button>
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
          {this.state.users === null ? <p1>No hay usuarios asociados</p1> : ""}
        </div>
      </div>
    );
  }
}
export default MasterVenue;
