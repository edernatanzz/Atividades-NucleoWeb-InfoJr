import styled from 'styled-components';

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5); 
  display: flex;
  justify-content: center;
  align-items: center;
 
`;

const MessageContent = styled.div`
  background-color: grey;
  padding: 2rem;
  border-radius: 5px;
  z-index: 1;
`;

const Message = ({ onClose, children }) => {
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
