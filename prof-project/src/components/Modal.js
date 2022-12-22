import ReactDOM from "react-dom";
import { useEffect } from "react";

function Modal({ onClose, children }) {
  useEffect(() => {
    document.body.classList.add("overflow-hidden");

    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, []);

  return ReactDOM.createPortal(
    <div>
      <div
        onClick={onClose}
        className="fixed inset-0 bg-gray-300 opacity-80 "
      ></div>
      <div className="fixed inset-y-32 inset-x-20 lg:inset-x-40 xl:inset-x-60 2xl:inset-x-80 bg-white rounded-xl  overflow-auto w-fit">
        <div className="flex flex-col">{children}</div>
      </div>
    </div>,
    document.querySelector(".modal-container")
  );
}

export default Modal;
