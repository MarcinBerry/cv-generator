import React, { PropsWithChildren } from 'react';

interface SectionProps {
  title: string;
}

export const Section = ({
  title,
  children,
}: SectionProps & PropsWithChildren) => (
  <div className="flex flex-col mt-6">
    <h2 className="pb-3 text-lg uppercase font-extralight">{title}</h2>
    <div className="flex flex-col pl-1 space-y-4">{children}</div>
  </div>
);
