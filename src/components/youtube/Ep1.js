import { Link } from "react-router-dom";

export const Ep1 = (props) => {
  return (
    <div className="youtube-player" onClick={props.showV}>
      <div className="video-btn-links">
        <span className="video-btn-link" onClick={props.showV}>
          CERRAR
        </span>
        <span className="video-btn-link" onClick={props.showN}>
          EPISODIO 2
        </span>
      </div>
      <iframe
        width="992px"
        height="558px"
        src="https://www.youtube.com/embed/JyKiZamha6U"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
      <div className="pj-container">
        <div className="pj-img-container">
          <Link
            to={{ pathname: "https://www.tiktok.com/@maryshealthworld" }}
            target="_blank"
          >
            <img
              src="https://res.cloudinary.com/afximagesection/image/upload/v1637771623/EnMedioDeLaNada/PJ-maria600_xjbzwb.jpg"
              alt="María"
            />
          </Link>
        </div>
        <p className="pj-description">
          <strong>MARÍA EN LA NADA</strong>
          <br></br>Descubre el mundo interior de María
        </p>
      </div>
    </div>
  );
};
