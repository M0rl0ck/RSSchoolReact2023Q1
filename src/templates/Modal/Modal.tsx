import React from 'react';
import ReactDOM from 'react-dom';
import './modal.css';

type ModalProps = {
  children: React.ReactNode;
  callback: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
};

export default function CardModal({ children, callback }: ModalProps) {
  return ReactDOM.createPortal(
    <div className="card-modal-wrapper" onClick={callback}>
      <div
        className="card-modal-container"
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <span className="close-button" onClick={callback}>
          X
        </span>
        {children}
      </div>
    </div>,
    document.body
  );
}
