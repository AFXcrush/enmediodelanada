import { Link } from "react-router-dom";
import { ReactComponent as LogoComic } from "../assets/logo-comic.svg";

import ComicPages from "../components/json/comic.json";

export default function Comic() {
  return (
    <div className="comic-content">
      <main className="comic-grid">
        <section className="nav-list">
          <div className="logo-section">
            <Link to="/veronline">
              <span>VOLVER A INICIO</span>
            </Link>
            <LogoComic className="logo-comic" />
          </div>

          <div className="page-list-section">
            {ComicPages.map((c) => {
              return (
                <li key={c.id}>
                  <a href={`#${c.id}`}>
                    <img src={c.thumbnail} alt={`página ${c.id}`} />
                  </a>
                </li>
              );
            })}
          </div>
        </section>

        <section className="comic-pages">
          {ComicPages.map((c) => {
            return (
              <img key={c.id} id={c.id} src={c.page} alt={`página ${c.id}`} />
            );
          })}
        </section>
      </main>
    </div>
  );
}
