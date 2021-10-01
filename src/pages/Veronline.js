import { useState } from "react";

import { Ep1 } from "../components/youtube/Ep1";
import { Ep2 } from "../components/youtube/Ep2";
import { Ep3 } from "../components/youtube/Ep3";

import { ReactComponent as PlayBtn } from "../assets/play-btn.svg";

export default function Veronline() {
  const [openEP1, setOpenEP1] = useState(false);
  const [openEP2, setOpenEP2] = useState(false);
  const [openEP3, setOpenEP3] = useState(false);

  return (
    <div className="ver-online">
      <div className="eps-container">
        <div className="video-banner">
          <span className="title">EPISODIO 1</span>
          <div className="video-container">
            <PlayBtn
              className="play-btn"
              onClick={() => setOpenEP1(!openEP1)}
            />
          </div>
          <p className="parrafo">
            Una joven con problemas es atendida por una psicóloga que hace todo
            lo posible por descubrir verdades ocultas.
          </p>
        </div>
        {openEP1 ? <Ep1 showV={() => setOpenEP1(!openEP1)} /> : null}

        <div className="video-banner">
          <span className="title">EPISODIO 2</span>
          <div className="video-container">
            <PlayBtn
              className="play-btn"
              onClick={() => setOpenEP2(!openEP2)}
            />
          </div>
          <p className="parrafo">
            Una psicóloga intenta descubrir cómo ayudar a una joven para tratar
            su depresión.
          </p>
        </div>
        {openEP2 ? <Ep2 showV={() => setOpenEP2(!openEP2)} /> : null}

        <div className="video-banner">
          <span className="title">EPISODIO 3</span>
          <div className="video-container">
            <PlayBtn
              className="play-btn"
              onClick={() => setOpenEP3(!openEP3)}
            />
          </div>
          <p className="parrafo">
            Una joven se enfrenta al constante rechazo de parte de la sociedad y
            su madre en un día desafortunado.
          </p>
        </div>
        {openEP3 ? <Ep3 showV={() => setOpenEP3(!openEP3)} /> : null}
      </div>
    </div>
  );
}