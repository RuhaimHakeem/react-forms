import React, { memo, useCallback, useRef } from "react";
import styled from "styled-components";
import { space, SpaceProps } from "styled-system";
import { Button } from "../button";
import { Text } from "../text";

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

export const Verification: React.FC = () => {
  const submitHandler: React.FormEventHandler = (e) => {
    alert("Registered");
    e.preventDefault();
  };

  const inputRefs = useRef<HTMLInputElement[]>([]);

  const handleFocus = useCallback(
    (e: React.KeyboardEvent<HTMLInputElement>, index: number) => {
      let targetIndex = index + 1;

      if (e.key === "Backspace") {
        targetIndex = index - 1;
      }

      inputRefs?.current[targetIndex]?.focus();
    },
    [inputRefs]
  );

  const VerificationInputs = memo(() => {
    const inputs = [];
    for (let index = 0; index < 6; index++) {
      inputs.push(
        <SInput
          ref={(ref) => (inputRefs.current[index] = ref as any)}
          mt="16px"
          type="text"
          key="index"
          required
          onKeyUp={(e) => handleFocus(e, index)}
          maxLength={1}
          autoFocus={index === 0}
        />
      );
    }

    return <>{inputs}</>;
  });

  return (
    <SForm onSubmit={submitHandler}>
      <Text.Heading> OTP Verification </Text.Heading>
      <Text.SubHeading>This is to verify your phone number</Text.SubHeading>
      <SFormGroup>
        <VerificationInputs />
      </SFormGroup>
      <Text.SubHeading> Enter 6-digit code</Text.SubHeading>
      <Button mt="24px">Verify</Button>
      <Text.SubHeading style={{ color: "red", marginTop: "10px" }}>
        Resend OTP code
      </Text.SubHeading>
    </SForm>
  );
};
