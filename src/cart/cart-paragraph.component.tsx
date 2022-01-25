import styled from "styled-components";

const SPara = styled.p<{ fontWeight?: string }>`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
  font-size: 15px;
  margin-right: 10px;
  font-weight: ${({ fontWeight }) => fontWeight};
`;

export { SPara };
