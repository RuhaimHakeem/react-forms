import styled from "styled-components";
import { space, SpaceProps } from "styled-system";

export const Button = styled.button<SpaceProps>`
  display: inline-block;
  padding: 20px 15px;
  border-radius: 8px;
  background-size: 200%;
  background-position: 0%;
  transition: 0.4s;
  color: white;
  font-weight: 700;
  cursor: pointer;
  width: 300px;
  border: 1000px;
  text-align: center;
  background-color: #f3610cec;
  ${space}
`;
