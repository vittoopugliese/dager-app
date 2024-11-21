import React from 'react'
import { experience } from '../../utils/constants';
import { ExpCard } from './ExpCard';
import { SectionTitle } from '../Shared/SectionTitle';

export const Experiences = () => {
  return (
    <div className="experience-container">
    <SectionTitle iconClass={"fa-solid fa-dumbbell"} title="Experience" />

    {experience.map((exp) => {
      return <ExpCard exp={exp} key={exp.title} />;
    })}
  </div>
  )
}
