import Backdrop from "../Backdrop/Backdrop.tsx";
import * as React from "react";
interface Props extends React.PropsWithChildren {
  show: boolean;
  title: string;
  onClose: () => void;
}

const Modal: React.FC<Props> = ({ show, title, onClose, children }) => {
  return (
    <>
      <Backdrop onClose={onClose} show={show} />
      <div className="modal show" style={{display: show ? 'block' : 'none', width: "500px", position: 'fixed', top: "50%", left: "50%", transform: "translate(-50%, -50%)"}}>
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5">{title}</h1>
              <button
                type="button"
                className="btn-close"
                onClick={onClose}
              ></button>
            </div>
            <div className="p-3">{children}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
