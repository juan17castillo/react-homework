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
            <Venues />
          </section>
        </div>
      </React.Fragment>
    );
  }
}
export default Home;
