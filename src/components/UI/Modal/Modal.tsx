import Backdrop from "../Backdrop/Backdrop.tsx";
import * as React from "react";
import { motion } from "framer-motion";

interface Props extends React.PropsWithChildren {
  show: boolean;
  title: string;
  onClose: () => void;
}

export const Modal: React.FC<Props> = ({ show, title, onClose, children }) => {
  return (
    <>
      <Backdrop onClose={onClose} show={show} />
      <motion.div
        className="modal show"
        animate={{
          rotate: show ? 0 : 360,
          scale: show ? 1 : 0,
        }}
        transition={{ duration: 1.5 }}
        style={{
          display: show ? "block" : "none",
          width: "500px",
          position: "fixed",
          top: "50px",
          left: "600px",
        }}
      >
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
      </motion.div>
    </>
  );
};

export default Modal;
