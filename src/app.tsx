import { useCallback, useEffect, useState } from "react";
import { Cart } from "./cart";
import { LoginModal } from "./login-form";
import { SignUpFormModal } from "./signup-form";

export const App: React.FC = () => {
  const [isOpenLoginModal, setIsOpenLoginModal] = useState<boolean>(false);
  const [isOpenSignupModal, setIsOpenSignupModal] = useState<boolean>(false);
  const [isOpenVerificationModal, setIsOpenVerificationModal] =
    useState<boolean>(false);

  const openModal = useCallback(() => {
    setIsOpenLoginModal(true);
  }, [setIsOpenLoginModal]);

  return (
    <div className="App">
      <button onClick={openModal}>Open Login Modal</button>
      <LoginModal
        visible={isOpenLoginModal}
        onClose={() => setIsOpenLoginModal(false)}
      />
      <button
        onClick={() => {
          setIsOpenSignupModal(true);
        }}
      >
        Open Signup Modal
      </button>

      <SignUpFormModal
        visible={isOpenSignupModal}
        onClose={() => setIsOpenSignupModal(false)}
        openVerificationModal={() => setIsOpenVerificationModal(true)}
        closeSignupModal={() => setIsOpenSignupModal(false)}
      />

      {/* <Verification
        visible={isOpenVerificationModal}
        onClose={() => setIsOpenVerificationModal(false)}
      /> */}
      <Cart />
    </div>
  );
};
