import { useState } from "react";

export const SecretCodeForm = (props) => {
  const [enterCode, setEnterCode] = useState("");

  const secretGallery = () => {
    const link = window.open("/galeria-secreta", "_blank");
    link.focus();
  };

  const handleChange = (e) => {
    setEnterCode({ ...enterCode, value: e.target.value });
    if (e.target.value === "Vainilla") {
      secretGallery();
    }
  };

  return (
    <div className="youtube-player">
      <div className="video-btn-links">
        <span className="video-btn-link" onClick={props.showC}>
          CERRAR
        </span>
      </div>
      <div className="code-window">
        <span>¡Has encontrado el portal oculto!</span>
        <h3>Introduce la clave para ir a la página secreta</h3>
        <input
          name="clave"
          type="text"
          maxLength={20}
          placeholder="Introduce la clave"
          onChange={handleChange}
        ></input>
        <div className="pista-container">
          <span className="pista1">PISTA</span>
          <span className="pista2">María guardaba todo en su laptop</span>
        </div>
      </div>
    </div>
  );
};
