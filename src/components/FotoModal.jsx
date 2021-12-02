export const FotoModal = ({ openFoto, setOpenFoto, showDesc }) => {
  const handleClick = (e) => {
    if (e.target.classList.contains("img-open-container")) {
      setOpenFoto(null);
    }
  };

  return (
    <div className="img-open-container" onClick={handleClick}>
      <img src={openFoto} alt="foto de producción" />
      <div className="description-container">
        <p className="description">{showDesc}</p>
      </div>
    </div>
  );
};
