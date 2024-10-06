import * as React from "react";
import { motion } from "framer-motion";

interface Props extends React.PropsWithChildren {
  type: "primary" | "success" | "warning" | "danger";
  onDismiss?: () => boolean;
}

const variants = {
  open: {
    scale: [1, 2, 2, 1, 1],
    rotate: [0, 0, 270, 270, 0],
    borderRadius: ["20%", "20%", "50%", "50%", "20%", "0%"],
    duration: 1.5,
  },
  closed: {
    scale: [2, 2, 1, 1, 0],
    rotate: [0, 0, 270, 270, 0],
    duration: 1.0,
  },
};

const Alert: React.FC<Props> = ({ type, onDismiss, children }) => {
  const [showAlert, setShowAlert] = React.useState(true);

  if (onDismiss !== undefined) {
    return (
      <motion.div
        animate={showAlert ? "open" : "closed"}
        variants={variants}
        // style={{ display: showAlert ? "row" : "none" }}
        className={`w-25 p-2 bg-${type} row justify-content-between mt-2 ms-auto me-auto align-items-center`}
      >
        <p className="col-9 p-2 text-start d-block m-0">{children}</p>
        <button
          className="btn-close col-2"
          onClick={() => setShowAlert((isOpen) => !isOpen)}
          type="button"
        ></button>
      </motion.div>
    );
  } else {
    return (
      <motion.div
        animate={showAlert ? "open" : "closed"}
        variants={variants}
        className={`w-25 p-2 bg-${type} row justify-content-between mt-2 ms-auto me-auto align-items-center`}
      >
        <p className="col-9 p-2 text-start d-block m-0">{children}</p>
      </motion.div>
    );
  }
};

export default Alert;
