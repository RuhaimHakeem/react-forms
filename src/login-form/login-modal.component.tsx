import React, { useCallback, useMemo, useState } from "react";
import { LoginForm } from ".";
import { Modal } from "../modal";
import { VerificationForm } from "../verification-form";
import { SignUpForm } from "../signup-form";

enum Step {
  LoginPhone,
  LoginVerification,
  SignUpForm,
}

interface Props {
  onClose: () => void;
  visible: boolean;
}

export const LoginModal: React.FC<Props> = ({ onClose, visible }) => {
  const [step, setStep] = useState<Step>(Step.SignUpForm);

  const submitHandler = useCallback(() => {
    if (step === Step.SignUpForm) {
      setStep(Step.LoginPhone);
    }
    if (step === Step.LoginPhone) {
      setStep(Step.LoginVerification);
    }
    if (step === Step.LoginVerification) {
      onClose();
    }
  }, [step, setStep, onClose]);

  const RenderPage = useMemo(() => {
    if (step === Step.SignUpForm) return SignUpForm;
    if (step === Step.LoginPhone) return LoginForm;
    else if (step === Step.LoginVerification) return VerificationForm;
    else return LoginForm;
  }, [step]);

  return (
    <Modal visible={visible} onClose={onClose}>
      <div className="closeButton">
        <button
          type="button"
          onClick={() => {
            onClose();
          }}
        >
          X
        </button>
      </div>
      <RenderPage onSubmit={submitHandler} />
    </Modal>
  );
};
