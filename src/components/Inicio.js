import { Fragment } from "react";
import { Link } from "react-router-dom";

// import { PrimerEP } from "./youtube/PrimerEP";

import { ReactComponent as PlayBtn } from "../assets/play-btn.svg";
import { ReactComponent as LogoDetached } from "../assets/logo-dettached.svg";

export const Inicio = () => {
  return (
    <Fragment>
      <div className="inicio">
        {/* BIG LOGO BANNER */}
        <div className="logo-banner">
          <LogoDetached className="logo" />
          <div className="logline-container">
            <p className="parrafo">
              Una joven con problemas es atendida por una psicóloga que hace
              todo lo posible por descubrir verdades ocultas.
            </p>
            <div className="btn-container">
              <Link to="/veronline">
                <PlayBtn className="play-btn" />
              </Link>
              <span className="span">Mira los episodios.</span>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
