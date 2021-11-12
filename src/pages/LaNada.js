import { useState } from "react";
import { Link } from "react-router-dom";

import HeaderBlog from "../components/HeaderBlog";
import Personajes from "../components/json/personajes.json";
import BlogLinks from "../components/BlogLinks";

export default function LaNada() {
  const [handlePjs, setHandlePjs] = useState(Personajes[0]);

  return (
    <div className="blog-apart">
      <HeaderBlog />

      <main className="blog-apart-content">
        <div className="blog-apart-title-container">
          <span className="blog-apart-title">LA NADA</span>
        </div>

        <div className="la-nada-grid">
          {/* PERSONAJES LIST */}

          <section className="pjs-container">
            <span>CONOCE A LOS PERSONAJES</span>
            <div className="pj-list">
              {Personajes.map((pj) => {
                return (
                  <div className="pj-container" key={pj.id}>
                    <div className="pj-img-container">
                      <img
                        className="pj-img"
                        src={pj.foto}
                        alt={pj.nombre}
                        onClick={() => setHandlePjs(pj)}
                      />
                    </div>
                    <span className="pj-nombre">{pj.nombre}</span>
                  </div>
                );
              })}
            </div>
          </section>

          {/* PERSONAJES DESCRIPCIÓN */}

          <section className="pj-desc">
            <div className="desc-container" key={handlePjs.id}>
              <div className="foto-txt-container">
                <div className="img-container">
                  <img src={handlePjs.foto} alt={handlePjs.nombre} />
                </div>
                <div className="txt-container">
                  <h3 className="nombre">{handlePjs.nombre}</h3>
                  <p className="txt">
                    <span>Edad:</span> {handlePjs.edad}
                    <br></br>
                    <span>Ocupación:</span> {handlePjs.ocupacion}
                    <br></br>
                    <span>Hobbies:</span> {handlePjs.hobbies}
                    <br></br>
                    <span>Color favorito:</span> {handlePjs.favcol}
                    <br></br>
                    <span>Signo:</span> {handlePjs.signo}
                  </p>
                </div>
              </div>

              <div className="desc-txt">
                <p>
                  <span>Caracterización:</span> {handlePjs.caracter}
                </p>
                <p>
                  <span>Actitud:</span> {handlePjs.actitud}
                </p>
                <p>
                  <span>Relaciones:</span> {handlePjs.rel}
                </p>
              </div>
            </div>
          </section>

          {/* BLOG LINKS */}
          <section className="blog-links">
            <Link to="/los-sucesos">
              <BlogLinks
                title="LOS SUCESOS"
                desc="Cronología de la historia"
                clase="sucesos"
              />
            </Link>
            <Link to="/mas-secretos">
              <BlogLinks
                title="MÁS SECRETOS"
                desc="Curiosidades y más"
                clase="mas-secretos"
              />
            </Link>
          </section>
        </div>
      </main>
    </div>
  );
}
