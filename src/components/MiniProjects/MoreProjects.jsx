import React, {useEffect} from "react";
import {MiniProjectBox} from "./MiniProjectBox";
import "./moreProjects.css";
import { SectionTitle } from './../Shared/SectionTitle';
import { miniProjects } from "../../utils/constants";

export const MoreProjects = () => {
  return (
    <div>
      <section className="more-projects-section">
      <SectionTitle iconClass='fa-solid fa-network-wired' 
      title='Proyectos relevantes' />

        <div className="more-projects-container">
          {miniProjects.map((project) => {
            return <MiniProjectBox project={project} key={project.title} />;
          })}
        </div>
      </section>
    </div>
  );
};
