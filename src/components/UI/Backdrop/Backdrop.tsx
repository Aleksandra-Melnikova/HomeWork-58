import * as React from "react";

interface Props {
  show: boolean;
  onClose: React.MouseEventHandler;
}

const Backdrop: React.FC<Props> = ({ show, onClose }) => {
  return (
    <div>
      <div
        onClick={onClose}
        className="modal-backdrop "
        style={{ display: show ? "block" : "none", opacity: 0.7 }}
      />
    </div>
  );
};

export default Backdrop;
