import React, { Component } from "react";
import Venues from "./Venues/Venues";
import Navbar from "./Navbar";

import { Redirect } from "react-router";

class Home extends Component {
  
  state={
    logged:true
  }
 
  render() {
    if(this.props.location.state === undefined || !this.props.location.state.logged){ 
      this.setState({logged:false});
      return <Redirect to='/login'/>
    } 
    return (
      <React.Fragment>
        <Navbar />

        <div className="container">
          <section>
            <Venues logged={this.state.logged} />
          </section>
        </div>
      </React.Fragment>
    );
  }
}
export default Home;
