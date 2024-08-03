// src/components/Modal.js

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;
 

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-primary p-4 rounded-lg shadow-lg max-w-lg w-full relative">
        <button
          className="absolute  top-0 right-2 text-red-500 text-xl font-bold"
          onClick={onClose}
        > 
       
          &times;
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
