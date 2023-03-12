import React from 'react';

export const Footer = ({ content }: { content: string }) => (
  <div className="flex flex-col items-center justify-center">
    <hr className="w-[95%] my-3" />
    <p className="px-4 text-xs font-light text-justify">{content}</p>
  </div>
);
