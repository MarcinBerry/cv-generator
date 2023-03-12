import React from 'react';

interface ExpSubSectionProps {
  date: string;
  title: string;
  company: string;
  list: string[];
}

export const ExpSubSection = ({
  date,
  title,
  company,
  list,
}: ExpSubSectionProps) => (
  <div className="flex flex-col justify-start pl-2">
    <p className="pt-2 text-xs font-light">{date}</p>
    <h3 className="ml-1 mt-0.5 font-bold">{title}</h3>
    <h4 className="ml-1 text-sm font-extralight">{company}</h4>
    <ul className="ml-1 list-[square] pl-7 pt-2">
      {list.map((item, index) => (
        <li key={`${item.slice(0, 5)}-${index}`}>
          <span className="text-sm font-extralight">{item}</span>
        </li>
      ))}
    </ul>
  </div>
);
