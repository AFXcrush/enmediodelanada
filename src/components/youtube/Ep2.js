export const Ep2 = (props) => {
  const comicLink = () => {
    const link = window.open("/comic", "_blank");
    link.focus();
  };
  const archivLink = () => {
    const link = window.open("/mas-secretos", "_blank");
    link.focus();
  };

  return (
    <div className="youtube-player" onClick={props.showV}>
      <div className="video-btn-links">
        <span className="video-btn-link" onClick={props.showV}>
          CERRAR
        </span>
        <span className="video-btn-link" onClick={props.showN}>
          EPISODIO 3
        </span>
      </div>
      <iframe
        width="992px"
        height="558px"
        src="https://www.youtube.com/embed/cUizlna_4O4"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>

      <div className="pj-container">
        <div className="pj-img-container" onClick={comicLink}>
          <img
            src="https://res.cloudinary.com/afximagesection/image/upload/v1633753685/EnMedioDeLaNada/Nicolas_comic_tn_as3hcb.jpg"
            alt="Comic de Nicolás"
          />
        </div>
        <p className="pj-description">
          <strong>LA VIDA DESPUÉS DE LA MUERTE</strong>
          <br></br>Conoce la historia paralela de Nicolás
        </p>
      </div>

      <div className="pj-container2">
        <div className="pj-img-container" onClick={archivLink}>
          <img
            src="https://res.cloudinary.com/afximagesection/image/upload/v1637776679/EnMedioDeLaNada/PJ-sofia500_qeqkgn.jpg"
            alt="Video corto"
          />
        </div>
        <p className="pj-description">
          <strong>EL ARCHIVERO DE SOFÍA</strong>
          <br></br>Conoce la investigación de la psicóloga
        </p>
      </div>
    </div>
  );
};
