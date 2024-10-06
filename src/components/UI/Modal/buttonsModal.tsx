import React from "react";
import { IButtonModal } from "../../../types";

const ButtonsModal: React.FC<IButtonModal> = ({ type, label, onClick }) => {
  return (
    <div>
      <button
        type="button"
        onClick={onClick}
        className={`btn btn-${type} p-2 d-block m-2`}
        style={{ width: "100px" }}
      >
        {label}
      </button>
    </div>
  );
};

export default ButtonsModal;
