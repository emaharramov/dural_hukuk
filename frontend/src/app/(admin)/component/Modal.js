import React from "react";
import ReactDOM from "react-dom";

const Modal = ({ onClose, onSave, user }) => {
  return ReactDOM.createPortal(
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-5 rounded-lg">
        {user && (
          <div>
            <h2 className="text-lg font-bold">Edit User</h2>
            <p>{user.name}</p>
            <p>{user.email}</p>
          </div>
        )}
        <button
          onClick={onSave}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2"
        >
          Save
        </button>
        <button
          onClick={onClose}
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
        >
          Close
        </button>
      </div>
    </div>,
    document.getElementById("modal-root")
  );
};

export default Modal;
