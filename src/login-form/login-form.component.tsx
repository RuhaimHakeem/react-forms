import React from "react";
import { FaMobile } from "react-icons/fa";
import styled from "styled-components";
import { Button } from "../button";
import { Input } from "../input";
import { Text } from "../text";

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
  onSubmit: () => void;
}

export const LoginForm: React.FC<Props> = ({ onSubmit }) => {
  const submitHandler: React.FormEventHandler = (e) => {
    e.preventDefault();
    onSubmit();
  };

  return (
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
  );
};
