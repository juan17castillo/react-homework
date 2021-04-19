import React, { Component } from "react";
import fire from "../../config/firebase";
import Navbar from "../Navbar";

class MasterVenue extends Component {
  constructor(props) {
    super(props);
  }

  state = {
    venue: {},
    db: fire.firestore(),
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
  }

  render() {
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
      </div>
    );
  }
}
export default MasterVenue;
