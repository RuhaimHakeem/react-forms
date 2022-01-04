import React from "react";
import styled from "styled-components";
import { Heading, SubHeading } from "../text";
import { Button } from "../button";
import { space, SpaceProps } from "styled-system";
import { useRef } from "react";

export const Verification: React.FC = () => {
  const submitHandler: React.FormEventHandler = (e) => {
    alert("Registered");
    e.preventDefault();
  };

  const inputRef1 = React.useRef<HTMLInputElement>(null);
  const inputRef2 = React.useRef<HTMLInputElement>(null);
  const inputRef3 = React.useRef<HTMLInputElement>(null);
  const inputRef4 = React.useRef<HTMLInputElement>(null);
  const inputRef5 = React.useRef<HTMLInputElement>(null);
  const inputRef6 = React.useRef<HTMLInputElement>(null);

  const focus1 = () => {
    inputRef1?.current?.focus();
  };
  const focus2 = () => {
    inputRef2?.current?.focus();
  };
  const focus3 = () => {
    inputRef3?.current?.focus();
  };
  const focus4 = () => {
    inputRef4?.current?.focus();
  };
  const focus5 = () => {
    inputRef5?.current?.focus();
  };
  const focus6 = () => {
    inputRef6?.current?.focus();
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

  const handleBackSpace = (e: any) => {
    if (e.keyCode === 8 && e.target.value("")) {
      inputRef5?.current?.focus();
    }
  };

  return (
    <SForm onSubmit={submitHandler}>
      <Heading> OTP Verification </Heading>
      <SubHeading>This is to verify your phone number</SubHeading>
      <SFormGroup>
        <SInput
          ref={inputRef1}
          mt="16px"
          type="text"
          id="first"
          required
          onChange={focus2}
          maxLength={1}
          autoFocus
        />
        <SInput
          ref={inputRef2}
          mt="16px"
          type="text"
          id="second"
          required
          maxLength={1}
          onChange={focus3}
        />
        <SInput
          ref={inputRef3}
          mt="16px"
          type="text"
          id="third"
          required
          maxLength={1}
          onChange={focus4}
        />
        <SInput
          ref={inputRef4}
          mt="16px"
          type="text"
          id="fourth"
          required
          maxLength={1}
          onChange={focus5}
        />
        <SInput
          ref={inputRef5}
          mt="16px"
          type="text"
          id="fifth"
          required
          maxLength={1}
          onChange={focus6}
        />
        <SInput
          ref={inputRef6}
          mt="16px"
          type="text"
          id="sixth"
          required
          maxLength={1}
          onKeyDown={handleBackSpace}
        />
      </SFormGroup>
      <SubHeading> Enter 6-digit code</SubHeading>
      <Button mt="24px">Verify</Button>
      <SubHeading style={{ color: "red", marginTop: "10px" }}>
        Resend OTP code
      </SubHeading>
    </SForm>
  );
};
