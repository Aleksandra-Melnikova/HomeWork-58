import { useState } from "react";
import Modal from "./components/Modal/Modal.tsx";
import Alert from './components/UI/Alert/Alert.tsx';

const App = () => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [showAlert, setShowAlert] = useState<boolean>(true);
  const cansel = () => {
    setShowModal(!showModal);
  };
  const closeAlert = (): boolean => {
    setShowAlert(prevState => !prevState);
    return showAlert;
  }
  return (
    <>
      <Modal show={showModal} onClose={cansel} title="Some kinda modal title">
        <p>This is modal content</p>
      </Modal>

      <button
        type="button"
        className="btn btn-primary"
        onClick={() => setShowModal(!showModal)}
      >
        Open modal
      </button>
      <Alert

        type="warning"

        onDismiss={closeAlert}

      >This is a warning type alert</Alert>

      <Alert type="success">This is a success type alert</Alert>
    </>
  );
};

export default App;
