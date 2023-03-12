import React from 'react';

import { Section } from './Section';
import { StuSubSection } from './StuSubSection';

interface EducationSectionProps {
  title: string;
  entries: {
    date: string;
    title: string;
    place: string;
  }[];
}
export const EducationSection = ({ title, entries }: EducationSectionProps) => (
  <Section title={title}>
    {entries.map((entry, index) => (
      <StuSubSection {...entry} key={`StuSubSection-${index}`} />
    ))}
  </Section>
);
