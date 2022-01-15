import React from "react";
import styled from "styled-components";
import { Button } from "../button";
import { Input } from "../input";
import { Text } from "../text";
import { FaMobile } from "react-icons/fa";
import { Modal } from "../modal";
import { Link } from "react-router-dom";
import { useHistory } from "react-router";

const SFormGroup = styled.div`
  margin-top: 32px;
  width: 400px;
`;

const SForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 80vh;
`;

interface Props {
  visible: boolean;
  onClose: () => void;
  openVerificationModal: () => void;
  closeLoginModal: () => void;
}

export const LoginFormModal: React.FC<Props> = ({
  onClose,
  visible,
  openVerificationModal,
  closeLoginModal,
}) => {
  const submitHandler: React.FormEventHandler = (e) => {
    closeLoginModal();
    openVerificationModal();
    alert("Submitted");
    e.preventDefault();
  };

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
      <SForm onSubmit={submitHandler}>
        <Text.Heading> Login </Text.Heading>
        <Text.SubHeading>Login To Continue With The Process</Text.SubHeading>
        <SFormGroup>
          <Input
            mt="16px"
            required
            type="text"
            placeholder="Enter Phone Number"
            rightIcon={<FaMobile />}
          />
        </SFormGroup>
        <Button mt="24px">Next</Button>
      </SForm>
    </Modal>
  );
};
