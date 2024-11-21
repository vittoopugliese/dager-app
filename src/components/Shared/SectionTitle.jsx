export const SectionTitle = ({iconClass, title, aperture}) => {
  return (
    <div className="section-title" data-aos="fade-right">
      <div>
        {!aperture && <i className={iconClass}></i>}
        {aperture && <img className="react" src="./vectors/aperture.svg" />}

        <h2>{title}</h2>
      </div>
    </div>
  );
};
