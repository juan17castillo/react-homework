import React, { Component } from 'react'
import SimpleReactValidator from "simple-react-validator";
import es from "../config/es";
import "./validator.css";
import Navbar from "./Navbar";
import fire from "../config/firebase";
import { Redirect } from "react-router";

export class UpdateUser extends Component {

    nameRef = React.createRef();
    lastNameRef = React.createRef();
    validUntilRef = React.createRef(); 

    constructor(props) {
        super(props)
        SimpleReactValidator.addLocale("es", es);
        this.validator = new SimpleReactValidator({ locale: "es" });
    }

    state = {
        user: {},
        db: fire.firestore(),
      };

    changeState = () => {
        this.setState({
            user: {
                name: this.nameRef.current.value,
                lastName: this.lastNameRef.current.value,
                validUntil: this.validUntilRef.current.value, 
            }
        });
    };

    componentDidMount(){
        let userId = this.props.match.params.idUser;

        this.state.db
      .collection("users")
      .doc(userId)
      .get()
      .then((doc) => {
        if (doc.exists) {
          let user = {};
          user = doc.data();
          this.setState({ user: user });
        } else {
          console.log("No such document!");
        }
      }).catch(err=>{
        console.log(err);
      });
    }

    updateUser = (e) => {
        e.preventDefault();
        this.changeState();

        let userId = this.props.match.params.idUser;

        if (this.validator.allValid()) {
            this.state.db.collection("users").doc(userId).update({ name: this.state.user.name, lastName: this.state.user.lastName, validUntil: this.state.user.validUntil});
            setTimeout(function () {
                window.location.href = "/home";
            }, 1000);
        } else {
            this.validator.showMessages();
            this.forceUpdate();
        }

    }

    render() {
        if(this.props.location.state === undefined || !this.props.location.state.logged){ 
 
            return <Redirect to='/login'/>
          }  
        return (
            <div>
                <Navbar />
                <div className="container text-center">
                    <h1 className="my-5">Modificar Usuario</h1>
                    <form
                        className="d-flex flex-column justify-content-center align-items-center"
                        onSubmit={this.updateUser}
                    > 
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
                                value={this.state.user.name}
                            />
                            {this.validator.message(
                                "nombre",
                                this.state.user.name,
                                "required|alpha_space"
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
                                value={this.state.user.lastName}
                            />
                            {this.validator.message(
                                "apellido",
                                this.state.user.lastName,
                                "required|alpha_space"
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
                                value={this.state.user.validUntil}
                            />
                            {this.validator.message(
                                "valido hasta",
                                this.state.user.validUntil,
                                "required"
                            )}
                        </div> 

                        <input
                            type="submit"
                            value="Register"
                            className="btn btn-primary"
                        />
                    </form>
                </div>
            </div>
        )
    }
}

export default UpdateUser
