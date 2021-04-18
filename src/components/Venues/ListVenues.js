import React, { Component } from "react";
import fire from "../../config/firebase";
import { NavLink } from "react-router-dom";
class ListVenues extends Component {
  constructor(props) {
    super(props);
  }

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
          const data = doc.data();
          venues.push(data);
        });
        this.setState({ venues: venues });
      })
      .catch((error) => console.log(error));
  }

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
              return (
                <tr>
                  <td className="align-middle">{venue.name}</td>
                  <td className="align-middle">{venue.address}</td>
                  <td className="align-middle">{venue.city}</td>
                  <td>
                    <NavLink
                      className="btn btn-warning mr-2"
                      to="/editVenue"
                      activeClassName="active"
                    >
                      <i class="fas fa-edit"></i>
                    </NavLink>
                    <button className="btn btn-danger">
                      <i class="fas fa-trash"></i>
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
