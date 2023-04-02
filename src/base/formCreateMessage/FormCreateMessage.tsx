import React from 'react';
import ReactDOM from 'react-dom';

type FormMessageProps = {
  isOpen: boolean;
  callback: () => void;
};

export default function FormCreateMessage({ isOpen, callback }: FormMessageProps) {
  if (!isOpen) {
    return null;
  }
  return ReactDOM.createPortal(
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
    </div>,
    document.body
  );
}
