// import { useState } from "react";
import { Link } from "react-router-dom";

import HeaderBlog from "../components/HeaderBlog";
import BlogLinks from "../components/BlogLinks";

import Archivero from "../components/json/archivero.json";

export default function MasSecretos() {
  return (
    <div className="blog-apart">
      <HeaderBlog />
      <main className="blog-apart-content">
        <div className="blog-apart-title-container">
          <span className="blog-apart-title">EL ARCHIVERO DE MARÍA</span>
        </div>

        <div className="mas-secretos-grid">
          <section className="mas-secretos-section">
            {Archivero.map((ar) => {
              return (
                <div key={ar.id}>
                  <div className="archivo">
                    <Link to={{ pathname: `${ar.url}` }} target="_blank">
                      <img src={ar.img} alt={ar.title} />
                    </Link>
                    <span>{ar.title}</span>
                  </div>
                </div>
              );
            })}
          </section>

          <section className="blog-links">
            <Link to="/la-nada">
              <BlogLinks
                title="LA NADA"
                desc="Conoce a los personajes y sus historias"
                clase="lanada"
              />
            </Link>
            <Link to="/los-sucesos">
              <BlogLinks
                title="LOS SUCESOS"
                desc="Cronología de la historia"
                clase="sucesos"
              />
            </Link>
          </section>
        </div>
      </main>
    </div>
  );
}
