export const Ep3 = (props) => {
  return (
    <div className="youtube-player" onClick={props.showV}>
      <div className="video-btn-links">
        <span className="video-btn-link" onClick={props.showV}>
          CERRAR
        </span>
      </div>

      <iframe
        width="992"
        height="558"
        src="https://www.youtube.com/embed/yVAZh8UGbxo"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>

      <div className="pj-container">
        <div className="pj-img-container">
          <img
            src="https://res.cloudinary.com/afximagesection/image/upload/v1633665208/EnMedioDeLaNada/pj-nicolas_i3w4pk.jpg"
            alt="Nicolás"
          />
        </div>
        <p className="pj-description">Conoce los secretos de Nicolás</p>
      </div>

      <div className="pj-container2">
        <div className="pj-img-container">
          <img
            src="https://res.cloudinary.com/afximagesection/image/upload/v1633665208/EnMedioDeLaNada/pj-mama_b9bf0e.jpg"
            alt="Mamá de María"
          />
        </div>
        <p className="pj-description">
          Conoce los secretos de la madre de María
        </p>
      </div>
    </div>
  );
};
