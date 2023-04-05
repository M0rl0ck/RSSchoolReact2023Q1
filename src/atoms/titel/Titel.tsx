import React from 'react';

interface ITitelProp {
  text: string;
}

export default function Titel({ text }: ITitelProp) {
  return <h1>{text}</h1>;
}
