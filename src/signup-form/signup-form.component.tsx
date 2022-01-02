import React, { ReactEventHandler } from "react";
import { Button } from "../button";
import { Input } from "../input/input.component";
import { FaMobile } from "react-icons/fa";
import styled from "styled-components";

const SH2 = styled.h2`
  color: black;
  font-size: 50px;
  font-weight: bold;
  margin: 0;
`;
const SP = styled.p`
  color: #928686ec;
`;

const SFormGroup = styled.div`
  margin-top: 32px;
  width: 400px;
`;

const SForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

export const SignUpForm: React.FC = () => {
  const submitHandler: React.FormEventHandler = (e) => {
    alert("Registered");
    e.preventDefault();
  };

  return (
    <SForm onSubmit={submitHandler}>
      <SH2> Sign up </SH2>
      <SP>Sign up to continue with the process</SP>
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
