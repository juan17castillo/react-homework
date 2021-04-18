import React, { Component } from "react";
import Venues from "./Venues/Venues";
import Navbar from "./Navbar";

class Home extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />

        <div className="container">
          <section>
            <h1>Home</h1>
          </section>
          <Venues />
        </div>
      </React.Fragment>
    );
  }
}
export default Home;
