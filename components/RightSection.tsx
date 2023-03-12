import React from 'react';

import CONTENT from '@/content.json';

import { EducationSection } from './EducationSection';
import { ExperienceSection } from './ExperienceSection';
import { Heading } from './Heading';

export const RightSection = () => {
  const { experienceSection, educationSection, title, name } = CONTENT;
  return (
    <div className="flex flex-col px-4 pt-12 w-[65%]">
      <Heading {...{ title, name }} />
      <ExperienceSection {...experienceSection} />
      <EducationSection {...educationSection} />
    </div>
  );
};
