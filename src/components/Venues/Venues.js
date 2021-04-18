import ListVenues from "./ListVenues";
import { NavLink } from "react-router-dom";

const Venues = () => {
  return (
    <div>
      <div className="d-flex py-5">
        <h1 className="">Sedes</h1>
        <NavLink
          className="nav-link ml-auto p-2"
          to="/createVenue"
          activeClassName="active"
        >
          Crear Sede
        </NavLink>
      </div>
      <ListVenues />
    </div>
  );
};
export default Venues;
