import { Badge } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { NavLink } from "react-router-dom";
import {  useContext } from "react";
import {CarritoContext} from '../context/CarritoContext';

export const Navbar = () => {

  const { listaCompras } = useContext(CarritoContext)

  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <NavLink to="/" className="navbar-brand" href="#">
            <ShoppingCartIcon color="action" />
          </NavLink>
          
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <NavLink to="/" className="nav-link active" aria-current="page" href="#">
                Compras
              </NavLink>
            </div>
          </div>
          <NavLink to="/carrito" className="nav-link" href="#">
            <Badge badgeContent={listaCompras.length} color="primary">
              <ShoppingCartIcon color="action" />
            </Badge>
          </NavLink>
        </div>
      </nav>
    </div>
  );
};
