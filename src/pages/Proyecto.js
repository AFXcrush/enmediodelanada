import { useState } from "react";

import { Backstage } from "../components/youtube/Backstage";

import { ReactComponent as PlayBtn } from "../assets/play-btn.svg";
import { ReactComponent as RosaIcon } from "../assets/rosa-icon.svg";

import Equipo from "../components/json/equipo.json";

export default function Proyecto() {
  const [openVIdeo, setopenVIdeo] = useState(false);

  return (
    <div className="proyecto">
      <main className="proyecto-container">
        <section className="descripcion">
          <span className="title">PROYECTO</span>
          <p className="parrafo">
            EN MEDIO DE LA NADA es una serie web que trata la ansiedad a través
            de una historia de suspenso y ficción.
          </p>
          <p className="parrafo">
            El proyecto es realizado por estudiantes de los últimos ciclos de la
            Universidad Privada del Norte de Lima en medio del segundo año de la
            pandemia del coronavirus.
          </p>
        </section>

        <section className="equipo">
          <span className="title">CONOCE AL EQUIPO</span>
          <div className="equipo-list">
            {Equipo.map((eqp) => {
              return (
                <div className="equipo-container" key={eqp.id}>
                  <div className="equipo-img-container">
                    <img
                      className="equipo-img"
                      src={eqp.foto}
                      alt={eqp.nombre}
                    />
                  </div>
                  <span className="equipo-nombre">{eqp.nombre}</span>
                  <small className="equipo-rol">{eqp.rol}</small>
                </div>
              );
            })}
          </div>
        </section>

        <section className="backstage">
          <span className="title">MIRA EL DETRÁS DE CÁMARA</span>
          <div className="video-container">
            <PlayBtn
              className="play-btn"
              onClick={() => setopenVIdeo(!openVIdeo)}
            />
          </div>
          {openVIdeo ? (
            <Backstage showV={() => setopenVIdeo(!openVIdeo)} />
          ) : null}
        </section>

        <RosaIcon className="rosa-icon" />
      </main>
    </div>
  );
}
