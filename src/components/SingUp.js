import React, { Component } from "react";
import fire from "../config/firebase";
import { Redirect } from "react-router";
import SimpleReactValidator from "simple-react-validator";
import es from "../config/es";
import "./validator.css";

class SingUp extends Component {
  nameRef = React.createRef();
  lastNameRef = React.createRef();
  emailRef = React.createRef();
  passwordRef = React.createRef();
  passwordConfirmedRef = React.createRef();
  validUntilRef = React.createRef();
  campusRef = React.createRef();

  constructor(props) {
    super(props);
    SimpleReactValidator.addLocale("es", es);
    this.validator = new SimpleReactValidator({ locale: "es" });
  }

  state = {
    user: {},
    venues: null,
    db: fire.firestore(),
    singedUp: false,
    campusId: [],
  };

  componentDidMount() {
    this.state.db
      .collection("venues")
      .get()
      .then((snapshot) => {
        const venues = [];
        snapshot.forEach((doc) => {
          this.state.campusId.push(doc.id);
          const data = doc.data();
          venues.push(data);
        });
        this.setState({ venues: venues });
      })
      .catch((error) => console.log(error));
  }

  changeState = () => {
    this.setState({
      user: {
        name: this.nameRef.current.value,
        lastName: this.lastNameRef.current.value,
        email: this.emailRef.current.value,
        password: this.passwordRef.current.value,
        passwordConfirmed: this.passwordConfirmedRef.current.value,
        validUntil: this.validUntilRef.current.value,
      },
      campusId: this.campusRef.current.value,
    });
  };

  saveUser = (e) => {
    e.preventDefault();
    this.changeState();
    console.log(this.state.user);
    if (this.validator.allValid()) {
      if (this.state.user.password === this.state.user.passwordConfirmed) {
        fire
          .auth()
          .createUserWithEmailAndPassword(
            this.state.user.email,
            this.state.user.password
          )
          .then((res) => {
            this.state.db
              .collection("users")
              .doc(res.user.uid)
              .set(this.state.user);
          })
          .catch((error) => {
            console.log(error);
          });

        this.state.singedUp = true;
      }
    } else {
      this.validator.showMessages();
      this.forceUpdate();
    }
  };

  render() {
    if (this.state.singedUp) {
      this.state.singedUp = false;
      return <Redirect to="/login" />;
    }
    return (
      <React.Fragment>
        <div className="container">
          <section className="mx-auto my-5 card w-75 py-3">
            <form
              className="d-flex flex-column justify-content-center align-items-center"
              onSubmit={this.saveUser}
            >
              <h2 className="mb-3">Sing Up</h2>
              <div className="d-flex flex-column justify-content-center align-items-center mb-3">
                <label htmlFor="name" className="font-weight-bold">
                  Nombre
                </label>
                <input
                  className="form-control"
                  type="text"
                  name="name"
                  ref={this.nameRef}
                  onChange={this.changeState}
                />
                {this.validator.message(
                  "nombre",
                  this.state.user.name,
                  "required|alpha"
                )}
              </div>

              <div className="d-flex flex-column justify-content-center align-items-center mb-3">
                <label htmlFor="lastName" className="font-weight-bold">
                  Apellido
                </label>
                <input
                  className="form-control"
                  type="text"
                  name="lastName"
                  ref={this.lastNameRef}
                  onChange={this.changeState}
                />
                {this.validator.message(
                  "apellido",
                  this.state.user.lastName,
                  "required|alpha"
                )}
              </div>

              <div className="d-flex flex-column justify-content-center align-items-center mb-3">
                <label htmlFor="email" className="font-weight-bold">
                  Email
                </label>
                <input
                  className="form-control"
                  type="text"
                  name="email"
                  ref={this.emailRef}
                  onChange={this.changeState}
                />
                {this.validator.message(
                  "email",
                  this.state.user.email,
                  "required|email"
                )}
              </div>

              <div className="d-flex flex-column justify-content-center align-items-center mb-3">
                <label htmlFor="password" className="font-weight-bold">
                  Contraseña
                </label>
                <input
                  className="form-control"
                  type="password"
                  name="password"
                  ref={this.passwordRef}
                  onChange={this.changeState}
                />
                {this.validator.message(
                  "contraseña",
                  this.state.user.password,
                  "required|min:6"
                )}
              </div>

              <div className="d-flex flex-column justify-content-center align-items-center mb-3">
                <label htmlFor="passwordConfirmed" className="font-weight-bold">
                  Repetir Contraseña
                </label>
                <input
                  className="form-control"
                  type="password"
                  name="passwordConfirmed"
                  ref={this.passwordConfirmedRef}
                  onChange={this.changeState}
                />
                {this.validator.message(
                  "repetir contraseña",
                  this.state.user.passwordConfirmed,
                  "required|min:6"
                )}
              </div>

              <div className="d-flex flex-column justify-content-center align-items-center mb-3">
                <label htmlFor="validUntil" className="font-weight-bold">
                  Valido Hasta
                </label>
                <input
                  className="form-control"
                  type="date"
                  name="validUntil"
                  ref={this.validUntilRef}
                  onChange={this.changeState}
                />
                {this.validator.message(
                  "valido hasta",
                  this.state.user.validUntil,
                  "required"
                )}
              </div>

              <div className="d-flex flex-column justify-content-center align-items-center mb-3">
                <label htmlFor="campus" className="font-weight-bold">
                  Sedes
                </label>

                <select
                  className="form-control"
                  name="campus"
                  ref={this.campusRef}
                  onChange={this.changeState}
                >
                  {this.state.venues &&
                    this.state.venues.map((venue) => {
                      return <option>{venue.name}</option>;
                    })}
                </select>
              </div>

              <input
                type="submit"
                value="Register"
                className="btn btn-primary"
              />
            </form>
          </section>
        </div>
      </React.Fragment>
    );
  }
}
export default SingUp;
