import React from 'react';

export const Heading = ({ name, title }: { name: string; title: string }) => (
  <div className="flex flex-col items-center justify-center w-full mb-2">
    <h1 className="text-3xl font-bold uppercase">{name}</h1>
    <p className="font-light">{title}</p>
  </div>
);
