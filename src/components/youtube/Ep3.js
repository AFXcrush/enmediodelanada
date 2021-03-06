import { useHistory } from "react-router";

export const Ep3 = (props) => {
  const history = useHistory();

  const videoclipLink = () => {
    const link = window.open(
      "https://www.youtube.com/watch?v=43QF_oaBdJE",
      "_blank"
    );
    link.focus();
  };

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
        src="https://www.youtube.com/embed/svDsA_DQYSM"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>

      <div className="pj-container">
        <div className="pj-img-container" onClick={videoclipLink}>
          <img
            src="https://res.cloudinary.com/afximagesection/image/upload/v1633754674/EnMedioDeLaNada/videoclip_tn_myetiq.jpg"
            alt="Videoclip"
          />
        </div>
        <p className="pj-description">
          <strong>AL FINAL DE LA NADA</strong>
          <br></br>Mira el videoclip de la serie
        </p>
      </div>

      <div className="pj-container2">
        <div
          className="pj-img-container"
          onClick={() => {
            history.push("/secretos");
          }}
        >
          <img
            src="https://res.cloudinary.com/afximagesection/image/upload/v1633754781/EnMedioDeLaNada/all_secrets_j6n1u4.jpg"
            alt="Todos los secretos"
          />
        </div>
        <p className="pj-description">
          <strong>LOS SECRETOS</strong>
          <br></br>Sección a todas las plataformas de la serie web
        </p>
      </div>
    </div>
  );
};
