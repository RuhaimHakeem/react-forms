import { SignUpForm } from "./signup-form";
import { LoginForm } from "./login-form";
import { Verification } from "./verification-form";

import { useState } from "react";

export const App: React.FC = () => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <div className="App">
      <button
        onClick={() => {
          setOpenModal(true);
        }}
      >
        Open Modal
      </button>
      {openModal && <LoginForm closeModal={setOpenModal} />}

      {/* <button
        onClick={() => {
          setOpenModal(true);
        }}
      >
        Open Modal
      </button>
      {openModal && <SignUpForm />} */}

      {/* <button
        onClick={() => {
          setOpenModal(true);
        }}
      >
        Open Modal
      </button>
      {openModal && <Verification />} */}
    </div>
  );
};
