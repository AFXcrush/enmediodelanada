import { Fragment } from "react";
import { Link } from "react-router-dom";

// import { PrimerEP } from "./youtube/PrimerEP";

import { ReactComponent as PlayBtn } from "../assets/play-btn.svg";
import { ReactComponent as Logo } from "../assets/logo.svg";

export const Inicio = () => {
  // const [openVIdeo, setopenVIdeo] = useState(false);

  return (
    <Fragment>
      <div className="inicio">
        {/* VIDEO BANNER */}
        {/* <div className="video-banner">
          <span className="title">MIRA EL PRIMER EPISODIO</span>
          <div className="video-container">
            <PlayBtn
              className="play-btn"
              onClick={() => setopenVIdeo(!openVIdeo)}
            />
          </div>
          <p className="parrafo">
            Una joven con problemas es atendida por una psicóloga que hace todo
            lo posible por descubrir verdades ocultas.
          </p>
        </div>
        {openVIdeo ? <PrimerEP showV={() => setopenVIdeo(!openVIdeo)} /> : null} */}

        {/* BIG LOGO BANNER */}
        <div className="logo-banner">
          <Logo className="logo" />
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
