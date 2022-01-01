import React from "react";
import { Button } from "../button";
import { Input } from "../input/input.component";
import { FaMobile } from "react-icons/fa";
import styled from "styled-components";

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

export const SignUpForm: React.FC = () => {
  return (
    <SForm>
      <SH2> Sign up </SH2>
      <SP>Sign up to continue with the process</SP>

      <SFormGroup>
        <Input
          type="text"
          placeholder="Enter Phone Number"
          rightIcon={<FaMobile />}
        />
        <Input mt="16px" type="text" placeholder="First name " />
        <Input mt="16px" type="text" placeholder="Last name " />
      </SFormGroup>
      <Button mt="24px">Next</Button>
    </SForm>
  );
};
