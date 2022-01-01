import React from "react";
import { FaRoute } from "react-icons/fa";
import styled from "styled-components";
import { space, SpaceProps } from "styled-system";

const SInput = styled.input<InputProps>`
  display: block;
  width: 100%;
  padding: 10px 15px;
  background-color: #f8f8f8;
  border-radius: 8px;
  transition: 0.4s;
  border: none;

  border-bottom: 1px solid #f3610cec;
`;

const SWrapper = styled.div<SpaceProps>`
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  position: center;

  ${space}
`;

const SIconWrapper = styled.div`
  position: absolute;
  right: 0;
  padding: 8px;
  margin-left: 8px;
  z-index: 100;
`;

interface InputProps
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  rightIcon?: React.ReactNode;
}

interface Props extends InputProps, SpaceProps {}

export const Input: React.FC<Props> = ({ rightIcon, ...rest }) => {
  return (
    <SWrapper {...(rest as SpaceProps)}>
      <SInput {...(rest as any)} />
      {rightIcon ? <SIconWrapper>{rightIcon}</SIconWrapper> : null}
    </SWrapper>
  );
};
