export const Ep2 = (props) => {
  return (
    <div className="youtube-player" onClick={props.showV}>
      <div className="video-btn-links">
        <span className="video-btn-link" onClick={props.showV}>
          CERRAR
        </span>
        <span className="video-btn-link" onClick={props.showN}>
          SIGUIENTE
        </span>
      </div>
      <iframe
        width="992px"
        height="558px"
        src="https://www.youtube.com/embed/RBtlPT23PTM"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
      <div className="pj-container">
        <div className="pj-img-container">
          <img
            src="https://res.cloudinary.com/afximagesection/image/upload/v1633665208/EnMedioDeLaNada/pj-sofia_uw43fx.jpg"
            alt="Sofía"
          />
        </div>
        <p className="pj-description">Conoce los secretos de Sofía</p>
      </div>
    </div>
  );
};
