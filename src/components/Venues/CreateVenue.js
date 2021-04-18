import React, { Component } from "react";
import Navbar from "../Navbar";
import fire from "../../config/firebase";
import SimpleReactValidator from "simple-react-validator";
import es from "../../config/es";
class CreateVenue extends Component {
  constructor() {
    super();
    SimpleReactValidator.addLocale("es", es);
    this.validator = new SimpleReactValidator({ locale: "es" });
  }

  nameRef = React.createRef();
  phoneRef = React.createRef();
  emailRef = React.createRef();
  cityRef = React.createRef();
  addressRef = React.createRef();
  zipCodeRef = React.createRef();
  activeRef = React.createRef();

  state = {
    venue: {},
    db: fire.firestore(),
  };

  changeState = () => {
    this.setState({
      venue: {
        name: this.nameRef.current.value,
        phone: this.phoneRef.current.value,
        email: this.emailRef.current.value,
        city: this.cityRef.current.value,
        address: this.addressRef.current.value,
        zipCode: this.zipCodeRef.current.value,
        active: this.activeRef.current.value,
      },
    });
  };

  saveVenue = (e) => {
    e.preventDefault();
    this.changeState();
    if (this.validator.allValid()) {
      this.state.db.collection("venues").doc().set(this.state.venue);
    } else {
      this.validator.showMessages();
      this.forceUpdate();
    }
  };

  render() {
    return (
      <div>
        <Navbar />
        <div className="container text-center">
          <h1 className="my-5">Crear sede</h1>
          <div className="card col-md-12 py-5 my-5">
            <form onSubmit={this.saveVenue}>
              <div class="form-row col-md-12">
                <div class="form-group col-md-6">
                  <label htmlFor="name">Nombre</label>
                  <input
                    type="text"
                    class="form-control"
                    name="name"
                    ref={this.nameRef}
                    onChange={this.changeState}
                    placeholder="Jhon Doe"
                  />
                  {this.validator.message(
                    "nombre",
                    this.state.venue.name,
                    "required|alpha"
                  )}
                </div>
                <div class="form-group col-md-6">
                  <label htmlFor="phone">Teléfono</label>
                  <input
                    type="tel"
                    class="form-control"
                    name="phone"
                    ref={this.phoneRef}
                    onChange={this.changeState}
                    placeholder="(+57) 555 555 55 55"
                  />
                  {this.validator.message(
                    "teléfono",
                    this.state.venue.phone,
                    "required|phone"
                  )}
                </div>
              </div>
              <div class="form-row col-md-12">
                <div class="form-group col-md-4">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    class="form-control"
                    name="email"
                    ref={this.emailRef}
                    onChange={this.changeState}
                    placeholder="Email"
                  />
                  {this.validator.message(
                    "correo",
                    this.state.venue.email,
                    "required|email"
                  )}
                </div>
                <div class="form-group col-md-8">
                  <label htmlFor="address">Dirección</label>
                  <input
                    type="text"
                    class="form-control"
                    name="address"
                    ref={this.addressRef}
                    onChange={this.changeState}
                    placeholder="Avenida 555 calle 55"
                  />
                  {this.validator.message(
                    "dirección",
                    this.state.venue.address,
                    "required|alpha_num"
                  )}
                </div>
              </div>
              <div class="form-row col-md-12">
                <div class="form-group col-md-8">
                  <label htmlFor="city">Ciudad</label>
                  <input
                    type="text"
                    class="form-control"
                    ref={this.cityRef}
                    onChange={this.changeState}
                    name="city"
                    placeholder="Cali"
                  />
                  {this.validator.message(
                    "ciudad",
                    this.state.venue.city,
                    "required|alpha"
                  )}
                </div>
                <div class="form-group col-md-4">
                  <label htmlFor="zipCode">Código Zip</label>
                  <input
                    type="text"
                    class="form-control"
                    name="zipCode"
                    ref={this.zipCodeRef}
                    onChange={this.changeState}
                    placeholder="760026"
                  />
                  {this.validator.message(
                    "código zip",
                    this.state.venue.zipCode,
                    "required|alpha"
                  )}
                </div>
              </div>
              <div class="form-group">
                <div class="form-check">
                  <input
                    class="form-check-input"
                    name="active"
                    ref={this.activeRef}
                    onChange={this.changeState}
                    type="checkbox"
                  />
                  <label class="form-check-label" htmlFor="active">
                    Activa
                  </label>
                </div>
              </div>
              <button type="submit" class="btn btn-primary">
                Crear sede
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default CreateVenue;
