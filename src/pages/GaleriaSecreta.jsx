import { useState } from "react";
import FotosSecretas from "../components/json/galeriasecreta.json";
import { FotoModal } from "../components/FotoModal";

export default function GaleriaSecreta() {
  const [openFoto, setOpenFoto] = useState(null);
  const [showDesc, setShowDesc] = useState("");

  return (
    <div className="blog-apart">
      <div className="galeria-secreta">
        <div className="welcome-title">
          <h1>¡FELICIDADES!</h1>
          <span className="title-txt1">
            ¡Has llegado a la sección secreta de la página!
          </span>
          <span className="title-txt2">
            Aquí encontrarás las fotos inéditas del equipo de producción de "En
            Medio de la Nada"
          </span>
        </div>

        <section className="gal-grid">
          {FotosSecretas.map((f) => {
            return (
              <div key={f.id} className="img-gal-container">
                <div
                  className="img-gal"
                  style={{ backgroundImage: `url(${f.url})` }}
                  onClick={() => {
                    setOpenFoto(f.url);
                    setShowDesc(f.desc);
                  }}
                ></div>
              </div>
            );
          })}
        </section>
        {openFoto && (
          <FotoModal
            openFoto={openFoto}
            setOpenFoto={setOpenFoto}
            showDesc={showDesc}
          />
        )}
      </div>
    </div>
  );
}
