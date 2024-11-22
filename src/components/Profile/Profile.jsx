import React from "react";
import "./profile.css";
import {ThreeDee} from "./../Shared/ThreeDee";
import {useGlobalContext} from "../../contexts/GlobalContextProvider";

export const Profile = () => {
  const {modoBananero} = useGlobalContext();

  return (
    <div className="profile-container">
      {/* <ThreeDee /> */}
      <div style={{marginTop:400}}></div>
      <div className="profile-data">
        <div className="profileh1">
          {modoBananero ? <h1>🖐🏼 BOT Dager</h1> : <h1>🖐🏼 Dot Dager</h1>}
        </div>
        {!modoBananero && <p>Programador Senior y Creador de Contenido.</p>}
        {modoBananero ? (
          <p>SOY DAGER Y ME ENCANTA EL BANANO 🍌</p>
        ) : (
          <p>
            Amante de los <b style={{color: "#25a611"}}>🥒pepinazos</b>{" "}
            <span style={{top: -2, position: "relative"}}>👉🏼👌🏼 </span>y su
            filosofía.
          </p>
        )}
      </div>
    </div>
  );
};
