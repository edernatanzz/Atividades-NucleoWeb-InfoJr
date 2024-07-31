import React from 'react';
import styled from 'styled-components';

interface MessageProps {
  onClose: () => void;
  children: React.ReactNode;
}

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 150%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 768px) {
height: 200%;
}
`;

const MessageContent = styled.div`
  background-color: grey;
  padding: 2rem;
  border-radius: 5px;
  z-index: 1;
`;

const Message: React.FC<MessageProps> = ({ onClose, children }) => {
  return (
    <Overlay>
      <MessageContent>
        {children}
        <button onClick={onClose}>Close</button>
      </MessageContent>
    </Overlay>
  );
};

export default Message;
