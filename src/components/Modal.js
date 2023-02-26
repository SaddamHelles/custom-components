import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import './Modal.css';

const Modal = ({ onClose, actionBar, children }) => {
  useEffect(() => {
    document.body.classList.add('overflow-hidden');

    return () => {
      document.body.classList.remove('overflow-hidden');
    };
  }, []);

  const modalElement = (
    <div>
      <div onClick={onClose} className="fixed inset-0 bg-gray-300 opacity-80">
        <div className="fixed inset-40 p-10 bg-white">
          <div className="flex flex-col justify-between h-full">{children}</div>
          <div className="flex justify-end">{actionBar}</div>
        </div>
      </div>
    </div>
  );

  return createPortal(modalElement, document.getElementById('modal-container'));
};

export default Modal;
