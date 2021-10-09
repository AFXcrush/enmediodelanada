export const Ep1 = (props) => {
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
        src="https://www.youtube.com/embed/wjzyv2Q_hdM"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
      <div className="pj-container">
        <div className="pj-img-container">
          <img
            src="https://res.cloudinary.com/afximagesection/image/upload/v1633665208/EnMedioDeLaNada/pj-maria_eqlsmf.jpg"
            alt="María"
          />
        </div>
        <p className="pj-description">¿Quieres saber más sobre María?</p>
      </div>
    </div>
  );
};
