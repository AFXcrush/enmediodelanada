import { Link } from "react-router-dom";

import HeaderBlog from "../components/HeaderBlog";
import BlogLinks from "../components/BlogLinks";

export default function LosSucesos() {
  return (
    <div className="blog-apart">
      <HeaderBlog />

      <main className="blog-apart-content">
        <div className="blog-apart-title-container">
          <span className="blog-apart-title">LOS SUCESOS</span>
        </div>

        <div className="sucesos-grid">
          <section className="infografia"></section>
          <section className="blog-links">
            <Link to="/la-nada">
              <BlogLinks
                title="LA NADA"
                desc="Conoce a los personajes y sus historias"
                clase="lanada"
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
