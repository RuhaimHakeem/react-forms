import { SignUpForm } from "./signup-form";

import { useState } from "react";
import { LoginFormModal } from "./login-form";

export const App: React.FC = () => {
  const [isOpenLoginModal, setIsOpenLoginModal] = useState<boolean>(false);

  return (
    <div className="App">
      <button
        onClick={() => {
          setIsOpenLoginModal(true);
        }}
      >
        Open Login Modal
      </button>
      <button
        onClick={() => {
          //TODO: open the signup modal
        }}
      >
        Open Signup Modal
      </button>
      {/* TODO: Create a signup modal by using our modal component */}
      <LoginFormModal
        visible={isOpenLoginModal}
        onClose={() => setIsOpenLoginModal(false)}
      />
    </div>
  );
};
