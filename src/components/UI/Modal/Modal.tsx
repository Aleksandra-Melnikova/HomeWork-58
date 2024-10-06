import Backdrop from "../Backdrop/Backdrop.tsx";
import * as React from "react";
import { motion } from "framer-motion";
import { IButtonModal } from "../../../types";
import ButtonsModal from "./buttonsModal.tsx";

interface Props extends React.PropsWithChildren {
  show: boolean;
  title: string;
  buttonArray: IButtonModal[];
  onClose: () => void;
}

export const Modal: React.FC<Props> = ({
  show,
  title,
  onClose,
  buttonArray,
  children,
}) => {
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
          height: "auto",
          position: "fixed",
          transform: "translate(-50%, -50%)",
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
            <div className="d-flex justify-content-center">
              {buttonArray.map((button) => (
                <ButtonsModal
                  key={button.label}
                  type={button.type}
                  label={button.label}
                  onClick={button.onClick}
                />
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Modal;
