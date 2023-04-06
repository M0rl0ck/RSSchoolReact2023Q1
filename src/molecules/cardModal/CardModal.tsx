import React from 'react';
import ReactDOM from 'react-dom';
import './cardModal.css';

type CardModalProps = {
  id: number;
  callback: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
};

export default function CardModal({ id, callback }: CardModalProps) {
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
        <h2 className="">Id: {id}</h2>
      </div>
    </div>,
    document.body
  );
}
