import React, {useEffect} from "react";
import {MiniProjectBox} from "./MiniProjectBox";
import "./moreProjects.css";
import { SectionTitle } from './../Shared/SectionTitle';

const miniProjects = [
  {
    title: "Git-In-CSharp",
    description:"Una implementación (básica) de Git, usando C#!",
    link: "https://github.com/MarianoVilla/Git-In-CSharp",
    tech: ["csharp"],
    aos: 'fade-right'
  },
  {
    title: "HTTP-Server",
    description:"Servidor HTTP desde cero, usando C#!",
    link: "https://github.com/MarianoVilla/HTTP-Server",
    tech: ["csharp"],
    aos: 'fade-left'
  },
  {
    title: "DNS Server",
    description: "Servidor DNS desde cero, usando C#!.",
    link: "https://github.com/MarianoVilla/DNS-Server",
    tech: ["csharp"],
    aos: 'fade-right'
  },
  {
    title: "Chau Mundo",
    description: "Andateeeeeeeeeeee. ¿No ves que tengo calzoncillo nuevo?",
    link: "https://github.com/MarianoVilla/ChauMundo",
    tech: ["andate"],
    aos: 'fade-left'
  }
];

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
