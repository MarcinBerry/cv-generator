import React, { PropsWithChildren } from 'react';

interface LeftSubSectionProps {
  title: string;
}
export const LeftSubSection = ({
  title,
  children,
}: LeftSubSectionProps & PropsWithChildren) => (
  <div className="flex flex-col items-center justify-center px-2 pt-7">
    <p className="w-full pb-2 font-bold uppercase">{title}</p>
    <div className="w-full pl-3">{children}</div>
  </div>
);
