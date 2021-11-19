import { useHistory } from "react-router";

export const Ep3 = (props) => {
  const history = useHistory();

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
        src="https://www.youtube.com/embed/eBhMaDo_Qao"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>

      <div className="pj-container">
        <div className="pj-img-container">
          <img
            src="https://res.cloudinary.com/afximagesection/image/upload/v1633754674/EnMedioDeLaNada/videoclip_tn_myetiq.jpg"
            alt="Videoclip"
          />
        </div>
        <p className="pj-description">Se Dice Entre los Pasillos...</p>
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
        <p className="pj-description">Conoce todos los secretos</p>
      </div>
    </div>
  );
};
