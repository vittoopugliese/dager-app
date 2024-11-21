import React from "react";
import {ProjectBox} from "./ProjectBox";
import './projects.css'
import { SectionTitle } from './../Shared/SectionTitle';

const projects = [
  {
    title: "GPTherapist",
    description: "Project Under Maintenance. Talk about your problems with an GPT-based therapist trained with experienced psycologist data. App interactions costs credits.",
    image: "./project-images/image1.png",
    tech: ['react', 'javascript', 'openai'],
    link: 'https://vittoopugliese.github.io/gptherapist/'
  },
  {
    title: "NFTorio",
    description: "Digital market. Watch, listen and buy my personal list of images and music NFT's. Integrated Crypto payments. Includes a built-in music player made with vanilla JS.",
    image: "./project-images/image2.png",
    tech: ['html', 'css', 'javascript'],
    link: 'https://vittoopugliese.github.io/NFTorio/'
  },
];

export const Projects = () => {
  return (
    <section className="projects-section-container">
      <SectionTitle iconClass='fa-solid fa-layer-group' 
      title='Main Projects' />

      <div className="projects-container">
        {projects.map((project) => {
          return <ProjectBox project={project} key={project.title} />;
        })}
      </div>
    </section>
  );
};
