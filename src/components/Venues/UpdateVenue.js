import React, { Component } from "react";
import Navbar from "../Navbar";
import fire from "../../config/firebase";
import SimpleReactValidator from "simple-react-validator";
import es from "../../config/es";

class UpdateVenue extends Component {
  constructor(props) {
    super(props);
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

  componentDidMount() {
    let venueId = this.props.match.params.idUpdate
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
  }

  updateVenue = (e) => {
    e.preventDefault();
    this.changeState();
    let id = this.props.match.params.idUpdate
    if (this.validator.allValid()) {
      this.state.db.collection("venues").doc(id).set({...this.state.venue, venueId: id});
      setTimeout(function () {
        window.location.href = "/home";
      }, 1000);
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
          <h1 className="my-5">Modificar sede</h1>
          <div className="card col-md-12 py-5 my-5">
            <form onSubmit={this.updateVenue}>
              <div className="form-row col-md-12">
                <div className="form-group col-md-6">
                  <label htmlFor="name">Nombre</label>
                  <input
                    type="text"
                    className="form-control"
                    name="name"
                    ref={this.nameRef}
                    onChange={this.changeState}
                    value={this.state.venue.name}
                  />
                  {this.validator.message(
                    "nombre",
                    this.state.venue.name,
                    "required|alpha_num_space"
                  )}
                </div>
                <div className="form-group col-md-6">
                  <label htmlFor="phone">Teléfono</label>
                  <input
                    type="tel"
                    className="form-control"
                    name="phone"
                    ref={this.phoneRef}
                    onChange={this.changeState}
                    value={this.state.venue.phone}
                  />
                  {this.validator.message(
                    "teléfono",
                    this.state.venue.phone,
                    "required|phone"
                  )}
                </div>
              </div>
              <div className="form-row col-md-12">
                <div className="form-group col-md-4">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    className="form-control"
                    name="email"
                    ref={this.emailRef}
                    onChange={this.changeState}
                    value={this.state.venue.email}
                  />
                  {this.validator.message(
                    "correo",
                    this.state.venue.email,
                    "required|email"
                  )}
                </div>
                <div className="form-group col-md-8">
                  <label htmlFor="address">Dirección</label>
                  <input
                    type="text"
                    className="form-control"
                    name="address"
                    ref={this.addressRef}
                    onChange={this.changeState}
                    value={this.state.venue.address}
                  />
                  {this.validator.message(
                    "dirección",
                    this.state.venue.address,
                    "required"
                  )}
                </div>
              </div>
              <div className="form-row col-md-12">
                <div className="form-group col-md-8">
                  <label htmlFor="city">Ciudad</label>
                  <input
                    type="text"
                    className="form-control"
                    ref={this.cityRef}
                    onChange={this.changeState}
                    name="city"
                    value={this.state.venue.city}
                  />
                  {this.validator.message(
                    "ciudad",
                    this.state.venue.city,
                    "required"
                  )}
                </div>
                <div className="form-group col-md-4">
                  <label htmlFor="zipCode">Código Zip</label>
                  <input
                    type="text"
                    className="form-control"
                    name="zipCode"
                    ref={this.zipCodeRef}
                    onChange={this.changeState}
                    value={this.state.venue.zipCode}
                  />
                  {this.validator.message(
                    "código zip",
                    this.state.venue.zipCode,
                    "required|numeric"
                  )}
                </div>
              </div>
              <div className="form-group">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    name="active"
                    ref={this.activeRef}
                    onChange={this.changeState}
                    type="checkbox"
                  />
                  <label className="form-check-label" htmlFor="active">
                    Activa
                  </label>
                </div>
              </div>
              <button type="submit" className="btn btn-primary">
                Modificar
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default UpdateVenue;
