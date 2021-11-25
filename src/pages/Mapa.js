import { Link } from "react-router-dom";

import MapaDelSitio from "../components/json/mapasitio.json";

export default function Mapa() {
  return (
    <div className="mapa">
      <div className="title-container">
        <span>TODAS LAS PLATAFORMAS Y ENLACES EXTERNOS</span>
      </div>

      <div className="mapa-grid">
        <section className="list">
          <span className="title">REDES</span>
          <ul>
            {MapaDelSitio.map((m) =>
              m.redes.map((r) => {
                return (
                  <li key={r.id}>
                    <Link to={r.url} target="_blank" className="li-link">
                      <img className="redes-logo" src={r.img} alt={r.title} />
                      <div className="txt-container">
                        <span>{r.title}</span>
                        <p>{r.desc}</p>
                      </div>
                    </Link>
                  </li>
                );
              })
            )}
          </ul>
        </section>

        <section className="list">
          <span className="title">VIDEOS</span>
          <ul>
            {MapaDelSitio.map((m) =>
              m.videos.map((v) => {
                return (
                  <li key={v.id}>
                    <Link to={v.url} target="_blank" className="li-link">
                      <img className="redes-logo" src={v.img} alt={v.title} />
                      <div className="txt-container">
                        <span>{v.title}</span>
                        <p>{v.desc}</p>
                      </div>
                    </Link>
                  </li>
                );
              })
            )}
          </ul>
        </section>

        <section className="list">
          <span className="title">MISCELÁNEA</span>
          <ul>
            {MapaDelSitio.map((m) =>
              m.miscelanea.map((mis) => {
                return (
                  <li key={mis.id}>
                    <Link to={mis.url} target="_blank" className="li-link">
                      <img
                        className="redes-logo"
                        src={mis.img}
                        alt={mis.title}
                      />
                      <div className="txt-container">
                        <span>{mis.title}</span>
                        <p>{mis.desc}</p>
                      </div>
                    </Link>
                  </li>
                );
              })
            )}
          </ul>
        </section>
      </div>
    </div>
  );
}
