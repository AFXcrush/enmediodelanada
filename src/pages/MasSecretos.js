import { Link } from "react-router-dom";

import HeaderBlog from "../components/HeaderBlog";
import BlogLinks from "../components/BlogLinks";

export default function MasSecretos() {
  return (
    <div className="blog-apart">
      <HeaderBlog />
      <main className="blog-apart-content">
        <div className="blog-apart-title-container">
          <span className="blog-apart-title">EL ARCHIVERO DE SOFÍA</span>
        </div>

        <div className="mas-secretos-grid">
          <section className="mas-secretos-section"></section>
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
