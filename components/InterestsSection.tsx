import React from 'react';

import { LeftSubSection } from './LeftSubSection';

export const InterestsSection = ({
  title,
  list,
}: {
  title: string;
  list: string[];
}) => (
  <LeftSubSection {...{ title }}>
    <ul className="list-[square] pl-4 pt-1 pb-3 w-full">
      {list.map((item, index) => (
        <li key={`${item.slice(0, 5)}-${index}`}>
          <span className="font-light">{item}</span>
        </li>
      ))}
    </ul>
  </LeftSubSection>
);
