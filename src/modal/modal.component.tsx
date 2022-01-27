import React from "react";
import styled from "styled-components";

interface SModalProps {
  visible: boolean;
}

const SModal = styled.div<SModalProps>`
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.2);
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  visibility: ${({ visible }) => (visible ? "visible" : "hidden")};
  display: ${({ visible }) => (visible ? "grid" : "none")};
  opacity: ${({ visible }) => (visible ? 1 : 0)};
  transition: 0.3s all;
`;

const SModalWrapper = styled.div`
  width: 500px;
  height: 500px;
  border-radius: 12px;
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  display: flex;
  flex-direction: column;
  padding: 16px;
`;

interface Props {
  visible: boolean;
  onClose: () => void;
}

export const Modal: React.FC<Props> = ({ visible, children, onClose }) => {
  return (
    <SModal onClick={onClose} visible={visible}>
      <SModalWrapper onClick={(e) => e.stopPropagation()}>
        {children}
      </SModalWrapper>
    </SModal>
  );
};
