import * as React from "react";

interface Props {
  show: boolean;
}

const Backdrop: React.FC<Props> = ({ show }) => {
  return (
    <div>
      <div
        className="modal-backdrop "
        style={{ display: show ? "block" : "none" }}
      />
    </div>
  );
};

export default Backdrop;
