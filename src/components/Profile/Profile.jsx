import React from "react";
import "./profile.css";
import {ThreeDee} from "./../Shared/ThreeDee";

export const Profile = () => {
  return (
    <div className="profile-container">
      <ThreeDee />
      <div className="profile-data">
        <h1>🖐🏼 Dot Dager</h1>
        <p>Creador de contenido y programador Senior.</p>
        <p>
          Amante de los gatos y los{" "}
          <b style={{color: "#25a611"}}>🥒pepinazos</b> <span style={{top: -2, position: "relative"}}>👉🏼👌🏼</span>.
        </p>
      </div>
    </div>
  );
};
