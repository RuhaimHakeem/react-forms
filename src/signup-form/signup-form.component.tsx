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

export const SignUpForm: React.FC<Props> = ({ onSubmit }) => {
  const submitHandler: React.FormEventHandler = (e) => {
    onSubmit();
    e.preventDefault();
  };

  return (
    <SForm onSubmit={submitHandler}>
      <Text.Heading> Sign up </Text.Heading>
      <Text.SubHeading>Sign up to continue with the process</Text.SubHeading>
      <SFormGroup>
        <Input
          type="text"
          placeholder="Enter Phone Number"
          rightIcon={<FaMobile />}
          required
        />
        <Input mt="16px" type="text" placeholder="First name" required />
        <Input mt="16px" type="text" placeholder="Last name" required />
      </SFormGroup>
      <Button mt="24px">Next</Button>
    </SForm>
  );
};
