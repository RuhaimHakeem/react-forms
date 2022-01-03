import React from "react";
import styled from "styled-components";
import { Heading, SubHeading } from "../text";
import { Button } from "../button";
import { space, SpaceProps } from "styled-system";

export const Verification: React.FC = () => {
  const submitHandler: React.FormEventHandler = (e) => {
    alert("Registered");
    e.preventDefault();
  };

  const SFormGroup = styled.div`
    margin-top: 32px;
    width: 500px;
  `;

  const SForm = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 95vh;
  `;

  const SInput = styled.input<SpaceProps>`
    margin: 10px;
    height: 50px;
    width: 55px;
    border: none;
    border-width: 1px;
    border-radius: 10px;
    text-align: center;
    font-size: 1.2rem;
    background: #eef2f3;
    ${space};
  `;

  return (
    <SForm onSubmit={submitHandler}>
      <Heading> OTP Verification </Heading>
      <SubHeading>This is to verify your phone number</SubHeading>
      <SFormGroup>
        <SInput mt="16px" type="text" id="first" required maxLength={1} />
        <SInput mt="16px" type="text" id="second" required maxLength={1} />
        <SInput mt="16px" type="text" id="third" required maxLength={1} />
        <SInput mt="16px" type="text" id="fourth" required maxLength={1} />
        <SInput mt="16px" type="text" id="fifth" required maxLength={1} />
        <SInput mt="16px" type="text" id="sixth" required maxLength={1} />
      </SFormGroup>
      <SubHeading> Enter 6-digit code</SubHeading>
      <Button mt="24px">Verify</Button>
      <SubHeading style={{ color: "red", marginTop: "10px" }}>
        Resend OTP code
      </SubHeading>
    </SForm>
  );
};
