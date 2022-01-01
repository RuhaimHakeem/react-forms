import React from "react";
import styled from "styled-components";
import { Button } from "../button";
import { Input } from "../input";

const SH2 = styled.h2`
  color: black;
  font-size: 50px;
  font-weight: bolder;
  text-align: center;
  font-family: "Roboto Slab", "serif";
  margin-bottom: 10px;
`;
const SP = styled.p`
  margin-bottom: 30px;
  text-align: center;
  color: #928686ec;
`;

const SFormGroup = styled.div`
  display: block;
  width: 300px;
  margin-bottom: 15px;
`;

const SForm = styled.form`
  display: block;
  position: relative;
`;

/*const SInput = styled.input`
  display: block;
  width: 100%;
  padding: 10px 15px;
  background-color: #f8f8f8;
  border-radius: 8px;
  transition: 0.4s;
  text-align: center;

  border-bottom: 1px solid #f3610cec;
  margin-bottom: 30px;
`;*/

export const LoginForm: React.FC = () => {
  const submitHandler: React.FormEventHandler = (e) => {
    alert("Submitted");
    e.preventDefault();
  };

  return (
    <SForm onSubmit={submitHandler}>
      <SH2> Login </SH2>
      <SP>Login To Continue With The Process</SP>
      <SFormGroup>
        <Input required type="text" placeholder="Enter Phone Number " />
      </SFormGroup>
      <Button>Next</Button>
    </SForm>
  );
};
