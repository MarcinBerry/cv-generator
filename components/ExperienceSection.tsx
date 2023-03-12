import React from 'react';

import { ExpSubSection } from './ExpSubSection';
import { Section } from './Section';

interface ExperienceSectionProps {
  title: string;
  entries: {
    date: string;
    title: string;
    company: string;
    list: string[];
  }[];
}

export const ExperienceSection = ({
  entries,
  title,
}: ExperienceSectionProps) => (
  <Section title={title}>
    {entries.map((entry, index) => (
      <ExpSubSection {...entry} key={`expSubSection-${index}`} />
    ))}
  </Section>
);
