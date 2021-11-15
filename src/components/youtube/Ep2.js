import { useHistory } from "react-router";

export const Ep2 = (props) => {
  const history = useHistory();

  const ep2Links = ["/comic", "/mas-secretos"];

  return (
    <div className="youtube-player" onClick={props.showV}>
      <div className="video-btn-links">
        <span className="video-btn-link" onClick={props.showV}>
          CERRAR
        </span>
        <span className="video-btn-link" onClick={props.showN}>
          EPISODO 3
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
        <div
          className="pj-img-container"
          onClick={() => {
            history.push(ep2Links[0]);
          }}
        >
          <img
            src="https://res.cloudinary.com/afximagesection/image/upload/v1633753685/EnMedioDeLaNada/Nicolas_comic_tn_as3hcb.jpg"
            alt="Comic de Nicolás"
          />
        </div>
        <p className="pj-description">
          Nicolás:
          <br />
          "La vida después de la muerte"
        </p>
      </div>

      <div className="pj-container2">
        <div
          className="pj-img-container"
          onClick={() => {
            history.push(ep2Links[1]);
          }}
        >
          <img
            src="https://res.cloudinary.com/afximagesection/image/upload/v1633665208/EnMedioDeLaNada/pj-sofia_uw43fx.jpg"
            alt="Video corto"
          />
        </div>
        <p className="pj-description">El archivero de Sofía</p>
      </div>
    </div>
  );
};
