import React, { Component } from "react";
import fire from "../../config/firebase";
import SimpleReactValidator from "simple-react-validator";
import es from '../../config/es'
class CreateVenue extends Component {
  constructor() {
    super();
    SimpleReactValidator.addLocale('es', es)
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
      // rerender to show messages for the first time
      // you can use the autoForceUpdate option to do this automatically`
      this.forceUpdate();
    }
  };

  render() {
    return (
      <div>
        <div className="container text-center">
          <h1 className="my-5">Crear sede</h1>
          <div className="card col-md-12 py-5 my-5">
            <form onSubmit={this.saveVenue}>
              <div class="form-row col-md-12">
                <div class="form-group col-md-6">
                  <label for="inputText">Nombre</label>
                  <input
                    type="text"
                    class="form-control"
                    name="name"
                    ref={this.nameRef}
                    onChange={this.changeState}
                    id="inputText"
                    placeholder="Jhon Doe"
                  />
                  {this.validator.message("nombre", this.state.name, "required|alpha_num")}
                </div>
                <div class="form-group col-md-6">
                  <label for="inputTel">Teléfono</label>
                  <input
                    type="tel"
                    class="form-control"
                    name="phone"
                    ref={this.phoneRef}
                    onChange={this.changeState}
                    id="inputTel"
                    placeholder="(+57) 555 555 55 55"
                  />
                   {this.validator.message("teléfono", this.state.phone, "required|numeric")}
                </div>
              </div>
              <div class="form-row col-md-12">
                <div class="form-group col-md-4">
                  <label for="inputEmail4">Email</label>
                  <input
                    type="email"
                    class="form-control"
                    name="email"
                    ref={this.emailRef}
                    onChange={this.changeState}
                    id="inputEmail4"
                    placeholder="Email"
                  />
                </div>
                <div class="form-group col-md-8">
                  <label for="inputAddress2">Dirección</label>
                  <input
                    type="text"
                    class="form-control"
                    name="address"
                    ref={this.addressRef}
                    onChange={this.changeState}
                    id="inputAddress2"
                    placeholder="Avenida 555 calle 55"
                  />
                </div>
              </div>
              <div class="form-row col-md-12">
                <div class="form-group col-md-8">
                  <label for="inputText">Ciudad</label>
                  <input
                    type="text"
                    class="form-control"
                    ref={this.cityRef}
                    onChange={this.changeState}
                    name="city"
                    id="inputText"
                    placeholder="Cali"
                  />
                </div>
                <div class="form-group col-md-4">
                  <label for="inputText">Código Zip</label>
                  <input
                    type="text"
                    class="form-control"
                    name="zipCode"
                    ref={this.zipCodeRef}
                    onChange={this.changeState}
                    id="inputText"
                    placeholder="760026"
                  />
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
                    id="gridCheck"
                  />
                  <label class="form-check-label" for="gridCheck">
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
