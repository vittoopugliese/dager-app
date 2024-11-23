import React from "react";
import "./profile.css";
import {ThreeDee} from "./../Shared/ThreeDee";
import {useGlobalContext} from "../../contexts/GlobalContextProvider";
import pickleTexture from  "../../assets/pickle.png";
import pickleModel from '../../assets/pickle.obj?url';
import pingoTexture from  "../../assets/dildo.png";
import pingoModel from '../../assets/dildo.obj?url';

export const Profile = () => {
  const {modoBananero} = useGlobalContext();

  return (
    <div className="profile-container">

      {
        modoBananero
        ? <ThreeDee modelParam={pingoModel} textureParam={pingoTexture} isPingo />
        : <ThreeDee modelParam={pickleModel} textureParam={pickleTexture} />
      }

      <div className="profile-data">
        <div className="profileh1">
          {modoBananero ? <h1>🖐🏼 BOT Dager</h1> : <h1>🖐🏼 Dot Dager</h1>}
        </div>
        {modoBananero 
        ? <p>SOY DAGER Y ME ENCANTA EL BANANO 🍌</p>
        : <p>Programador Senior y Creador de Contenido.</p>
        }
        {modoBananero ? (
          <p>Bien putito el que lee y sigue leyendo.</p>
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
