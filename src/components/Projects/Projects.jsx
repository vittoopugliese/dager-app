import React from "react";
import {ProjectBox} from "./ProjectBox";
import './projects.css'
import { SectionTitle } from './../Shared/SectionTitle';
import { projects } from "../../utils/constants";
import { useGlobalContext } from './../../contexts/GlobalContextProvider';
import image from "../../assets/xvideo.png"

const banaproyect = {
  title: "Tutorial de iniciación.. a la programación?",
  description: "Desgarradamente no es un tutorial de programación, pero si queres podes aprender un gran patron de diseño...",
  link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley",
  image
}

export const Projects = () => {
  const { modoBananero } = useGlobalContext();

  return (
    <section className="projects-section-container">
      <SectionTitle iconClass='fa-solid fa-layer-group' 
      title='Últimos videos' />

      <div className="projects-container">
        {!modoBananero && projects.map((project) => {
          return <ProjectBox project={project} key={project.title} />;
        })}

        { modoBananero && <ProjectBox project={banaproyect} key={"banaproyect"} /> }

        <a href="https://www.youtube.com/@DotDager" target="_blank" style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "#f9f9f9",
          textDecoration: "underline",
          fontSize: "1.2em",
          marginTop: "1em",
        }}>Ver mas</a>
      </div>
    </section>
  );
};
