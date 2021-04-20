import ListVenues from "./ListVenues";
import { NavLink } from "react-router-dom";
import { Redirect } from "react-router";

const Venues = (props) => {

  if(props.logged){
    return ( 
      <div>
        <div className="d-flex py-5">
          <h1 className="">Sedes</h1>
          <NavLink
            className="nav-link ml-auto p-2"
            to={{pathname:"/createVenue", state:{logged: props.logged}}}
            activeClassName="active"
          >
            Crear Sede
          </NavLink>
        </div>
        <ListVenues logged={props.logged} />
      </div>
    );
  }else{
    return <Redirect to="/login" />;
  }

  
};
export default Venues;
