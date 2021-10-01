export const Backstage = (props) => {
  return (
    <div>
      <div className="youtube-player" onClick={props.showV}>
        <div className="video-btn-links">
          <span className="video-btn-link" onClick={props.showV}>
            CERRAR
          </span>
        </div>
        <iframe
          width="992"
          height="558"
          src="https://www.youtube.com/embed/ExWt714616M"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};
