import * as React from "react";
interface Props extends React.PropsWithChildren {
  type: "primary" | "success" | "warning" | "danger";
  onDismiss?: () => boolean;
}

const Alert: React.FC<Props> = ({ type, onDismiss, children }) => {
  const [showAlert, setShowAlert] = React.useState(true);

  if (onDismiss !== undefined) {
    const cansel = () => {
      if (onDismiss()) {
        setShowAlert(!showAlert);
        return showAlert;
      }
    };
    return (
      <div
        style={{ display: showAlert ? "row" : "none" }}
        className={`w-25 p-2 bg-${type} row justify-content-between mt-2 ms-auto me-auto align-items-center`}
      >
        <p className="col-9 p-2 text-start d-block m-0">{children}</p>
        <button
          className="btn-close col-2"
          onClick={cansel}
          type="button"
        ></button>
      </div>
    );
  } else {
    return (
      <div
        className={`w-25 p-2 bg-${type} row justify-content-between mt-2 ms-auto me-auto align-items-center`}
      >
        <p className="col-9 p-2 text-start d-block m-0">{children}</p>
      </div>
    );
  }
};

export default Alert;
