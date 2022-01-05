import { SignUpForm } from "./signup-form";
import { LoginForm } from "./login-form";
import { Verification } from "./verification-form";
import Modal from "react-modal";
import { useState } from "react";
import { Button } from "./button";
import { backgroundColor } from "styled-system";

export const App: React.FC = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  return (
    <div className="App">
      <Button onClick={() => setModalIsOpen(true)}>Open Modal</Button>

      <Modal className={"Modal"} isOpen={modalIsOpen}>
        <LoginForm />

        <button onClick={() => setModalIsOpen(false)}>Close</button>
      </Modal>

      {/* <Modal className={"Modal"} isOpen={true}>
        <SignUpForm />
      </Modal> */}

      {/* <Modal className={"Modal"} isOpen={true}>
        <Verification />
      </Modal> */}
    </div>
  );
};
