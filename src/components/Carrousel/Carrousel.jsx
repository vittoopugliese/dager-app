import React, {useEffect, useRef, useState} from "react";
import {TechImages} from "./TechImages";
import "./carrousel.css";
import { SectionTitle } from "../Shared/SectionTitle";

const techslogos = [
  {name: "Cats", model: "cat"},
  {name: "Dogs", model: "dog"},
];

export const Carrousel = () => {
  const [techSelected, setTechSelected] = useState('Hover a tech to see a description...');
  const [opacity, setOpacity] = useState(0);
  const [carrouselVel, setCarrouselVel] = useState(50);

  function handleTechSelected(e){
    setTechSelected(e)
  }

  return (
    <section className="carousel">
      <div className="carrousel-velocity">
      <SectionTitle iconClass={'fa-solid fa-microchip'} 
      title={'Technologies I use'}/>
      {/* <div>
        <input className="range" type="range" onChange={(e) => setCarrouselVel(e.target.value)}/>
      </div> */}
      </div>

      <p className="tech-desc" style={{opacity:opacity ? '1' : '0'}} > {techSelected} </p>

{/* dager xDDD */}
      {/* <div className="tech-container">
        {techslogos.map((t, i) => {
          return <TechImages tech={t} key={i * i} techHover={e => setOpacity(e)}
          techSelected={handleTechSelected} />;
        })}
      </div> */}

      <div className="slider">
        <div className="slide-track" style={{
          '--carrousel-vel': carrouselVel + 's'
        }}>
          <div className="slide">
            {techslogos.map((t, i) => {
              return <TechImages tech={t} key={i * i}
                        techHover={e => setOpacity(e)}
                        techSelected={handleTechSelected} />;
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
