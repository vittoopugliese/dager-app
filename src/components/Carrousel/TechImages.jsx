import React, {useState} from "react";

export const TechImages = ({tech, techSelected, techHover}) => {
  const [techHovered, setTechHovered] = useState();

  function handleImageHover(e) {
    const selectedElement = e.target;
    const techUrl = selectedElement.src.split("/")[4];
    const techName = techUrl.split(".")[0];
    setTechHovered(techName);
    techHover(tech.desc);
    techSelected(tech.desc);

    showTooltip();
  }

  function handleImageUnHover() {
    setTechHovered(null);
    techHover(null);
  }
  function showTooltip() {}

  return (
    <div className="tech-slide-image">
      <img style={{
        // filter: techHovered != tech.name ? "grayscale(0)" : "grayscale(1)",
        scale: techHovered == tech.name ? "1.05" : "1"
        }} className="carrousel-image" draggable="false"
        src={`./tech-logos/${tech.name}.webp`}
        onMouseOver={(e) => handleImageHover(e)}
        onMouseLeave={(e) => handleImageUnHover(e)}/>
      <p style={{opacity: techHovered == tech.name ? "1" : "0"}}>{tech.name}</p>
    </div>
  );
};
