import React from "react";
import {ProjectBox} from "./ProjectBox";
import './projects.css'
import { SectionTitle } from './../Shared/SectionTitle';
import { projects } from "../../utils/constants";

export const Projects = () => {
  return (
    <section className="projects-section-container">
      <SectionTitle iconClass='fa-solid fa-layer-group' 
      title='Últimos videos' />

      <div className="projects-container">
        {projects.map((project) => {
          return <ProjectBox project={project} key={project.title} />;
        })}

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
