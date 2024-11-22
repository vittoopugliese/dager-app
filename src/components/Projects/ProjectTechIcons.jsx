import React from "react";
import csharp from "../../assets/csharp.png";
import andate from "../../assets/andate.png";

export const ProjectTechIcons = ({project, miniBox}) => {
  const t = project.tech;
  return (
    <div className="project-techno-icons">
      <img
        src={t == "csharp" ? csharp : andate}
        loading="lazy"
        draggable={false}
        alt={t}
        key={t}
        style={{
          borderRadius: "100%",
          position: "relative",
          fontSize: t == "angular" ? "1.4em" : "1em",
          bottom: t == "angular" ? "1px" : "0px",
          width: "1.04em",
        }}
        className={t}
      />
    </div>
  );
};
