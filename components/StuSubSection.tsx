import React from 'react';

interface StuSubSectionProps {
  date: string;
  title: string;
  place: string;
}

export const StuSubSection = ({ title, date, place }: StuSubSectionProps) => (
  <div className="pt-2 pl-2">
    <div className="flex flex-row text-sm font-bold">
      <span className="pr-1">{date}</span>
      {'|'}
      <span className="pl-1">{title}</span>
    </div>
    <p className="text-sm font-extralight">{place}</p>
  </div>
);
