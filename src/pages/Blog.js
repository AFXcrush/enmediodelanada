export default function Blog() {
  return (
    <div className="blog">
      <div className="title-container">
        <span className="blog-title">BLOG</span>
      </div>
      <main className="blog-container">
        <div className="blog-sector personajes">
          <span className="title">LA NADA</span>
          <span className="description">
            Conoce a los personajes y sus historias
          </span>
        </div>
        <div className="blog-sector sucesos">
          <span className="title">LOS SUCESOS</span>
          <span className="description">Cronología de la historia</span>
        </div>
        <div className="blog-sector mas-secretos">
          <span className="title">MÁS SECRETOS</span>
          <span className="description">Curiosidades y más</span>
        </div>
      </main>
    </div>
  );
}
