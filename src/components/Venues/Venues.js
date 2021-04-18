import ListVenues from "./ListVenues";
import { NavLink } from "react-router-dom";

const Venues = () => {
  return (
    <div>
      <NavLink className="nav-link" to="/createVenue" activeClassName="active">
        Crear Sede
      </NavLink>
      <ListVenues />
    </div>
  );
};
export default Venues;
