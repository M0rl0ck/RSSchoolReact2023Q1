import React from 'react';

type FormMessageProps = {
  callback: () => void;
};

export default function FormCreateMessage({ callback }: FormMessageProps) {
  return (
    <div className="form-message-wrapper" onClick={callback}>
      <div
        className="form-message-container"
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <span className="close-button" onClick={callback}>
          X
        </span>
        <h2 className="form-message">The card has been created</h2>
      </div>
    </div>
  );
}
