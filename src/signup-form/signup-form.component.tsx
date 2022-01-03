import React, { ReactEventHandler } from "react";
import { Button } from "../button";
import { Input } from "../input";
import { FaMobile } from "react-icons/fa";
import styled from "styled-components";
import { Heading, SubHeading } from "../text";

const SFormGroup = styled.div`
  margin-top: 32px;
  width: 400px;
`;

const SForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 95vh;
`;

export const SignUpForm: React.FC = () => {
  const submitHandler: React.FormEventHandler = (e) => {
    alert("Registered");
    e.preventDefault();
  };

  return (
    <SForm onSubmit={submitHandler}>
      <Heading> Sign up </Heading>
      <SubHeading>Sign up to continue with the process</SubHeading>
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
