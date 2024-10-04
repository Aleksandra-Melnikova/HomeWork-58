import { useState } from "react";
import Modal from "./components/Modal/Modal.tsx";

const App = () => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const cansel = () => {
    setShowModal(!showModal);
  };
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
    </>
  );
};

export default App;
