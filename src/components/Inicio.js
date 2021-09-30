import { Fragment, useState } from "react";

import { ReactComponent as PlayBtn } from "../assets/play-btn.svg";
import { PrimerEP } from "./youtube/PrimerEP";

export const Inicio = () => {
  const [openVIdeo, setopenVIdeo] = useState(false);

  return (
    <Fragment>
      <div className="inicio">
        <div className="video-banner">
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
        {openVIdeo ? <PrimerEP showV={() => setopenVIdeo(!openVIdeo)} /> : null}
      </div>
    </Fragment>
  );
};
