import React, { Component } from "react";
import fire from "../../config/firebase";
import { NavLink } from "react-router-dom";
class ListVenues extends Component {
  state = {
    venues: null,
    db: fire.firestore(),
  };

  componentDidMount() {
    this.state.db
      .collection("venues")
      .get()
      .then((snapshot) => {
        const venues = [];
        snapshot.forEach((doc) => {
          const data = { ...doc.data(), id: doc.id };
          venues.push(data);
          if (data.venueId === "") {
            this.state.db.collection("venues").doc(doc.id).update({
              venueId: doc.id,
            });
          }
        });
        this.setState({ venues: venues });
      })
      .catch((error) => console.log(error));
  }

  onDelete = (venueId) => {
    this.state.db.collection("venues").doc(venueId).delete();
    this.componentDidMount();
  };

  render() {
    return (
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Nombre</th>
            <th scope="col">Dirección</th>
            <th scope="col">Ciudad</th>
            <th scope="col">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {this.state.venues &&
            this.state.venues.map((venue) => {
              const id = "venue/" + venue.id;
              return (
                <tr key={venue.id}>
                  <td className="align-middle">{venue.name}</td>
                  <td className="align-middle">{venue.address}</td>
                  <td className="align-middle">{venue.city}</td>
                  <td>
                    <NavLink
                      className="btn btn-primary mr-2"
                      to={id}
                      activeClassName="active"
                    >
                      {" "}
                      <i className="fas fa-eye"></i>
                    </NavLink>
                    <NavLink
                      className="btn btn-warning mr-2"
                      to="/editVenue"
                      activeClassName="active"
                    >
                      <i className="fas fa-edit"></i>
                    </NavLink>
                    <button
                      className="btn btn-danger"
                      onClick={() => this.onDelete(venue.id)}
                    >
                      <i className="fas fa-trash"></i>
                    </button>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    );
  }
}
export default ListVenues;
