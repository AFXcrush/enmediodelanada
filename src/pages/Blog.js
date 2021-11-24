import { useHistory } from "react-router";

export default function Blog() {
  const history = useHistory();

  return (
    <div className="blog">
      <div className="title-container">
        <span className="blog-title">BLOG</span>
      </div>
      <main className="blog-container">
        <div
          className="blog-sector personajes"
          onClick={() => {
            history.push("/la-nada");
          }}
        >
          <span className="title">LA NADA</span>
          <span className="description">
            Conoce a los personajes y sus historias
          </span>
        </div>
        <div
          className="blog-sector sucesos"
          onClick={() => {
            history.push("/los-sucesos");
          }}
        >
          <span className="title">LOS SUCESOS</span>
          <span className="description">Cronología de la historia</span>
        </div>
        <div
          className="blog-sector mas-secretos"
          onClick={() => {
            history.push("/mas-secretos");
          }}
        >
          <span className="title">EL ARCHIVERO DE SOFÍA</span>
          <span className="description">
            Descubre la investigación de Sofía
          </span>
        </div>
      </main>
    </div>
  );
}
