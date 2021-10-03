import { useState } from "react";

import Cama from "../components/json/camaitems.json";

export default function Secretos() {
  const [showItem, setShowItem] = useState(-1);

  return (
    <div className="secretos">
      <div className="secretos-container">
        {/* BACKGROUND */}
        <img
          className="cama-bg"
          src="https://res.cloudinary.com/afximagesection/image/upload/v1633201429/EnMedioDeLaNada/cama_maria_full_xyv0cb.png"
          alt="cama de maría"
        />

        {/* ITEMS */}
        {Cama.map((cama) => {
          return (
            <div key={cama.id}>
              <a href={cama.url} target="_blank" rel="noreferrer">
                <div
                  className={`cama-item cama-item-${cama.nombre}`}
                  onMouseEnter={() => setShowItem(cama.id)}
                  onMouseLeave={() => setShowItem(-1)}
                ></div>
              </a>
              <img
                src={cama.img}
                alt={cama.nombre}
                className={`cama-bg-item ${
                  showItem === cama.id ? "shine" : ""
                }`}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
