import React from 'react';
import './button.css';

interface ISubmitButton {
  text: string;
  className: string;
}

export function SubmitButton({ text, className }: ISubmitButton) {
  return <input type="submit" className={className} value={text} />;
}
