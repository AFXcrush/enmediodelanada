import { Link } from "react-router-dom";
import { Fragment } from "react";
import { ReactComponent as Logo } from "../assets/logo.svg";

export const Header = () => {
  return (
    <Fragment>
      <div className="header">
        <Link to="/">
          <Logo className="logo" />
        </Link>

        <Link to="/" className="header-link">
          <span>INICIO</span>
        </Link>
        <Link to="/proyecto" className="header-link">
          <span>PROYECTO</span>
        </Link>
        <Link to="/veronline" className="header-link">
          <span>VER ONLINE</span>
        </Link>
        <Link to="/secretos" className="header-link-last">
          <span>DESCUBRE LOS SECRETOS</span>
        </Link>
      </div>
    </Fragment>
  );
};
