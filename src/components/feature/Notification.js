import React from 'react';
import styled from 'styled-components';

function Notification({ message, show }) {
  return (
    <Container show={show}>
      <p>{message}</p>
    </Container>
  );
}

export default Notification;
const Container = styled.div`
  display: ${({ show }) => (show ? 'flex' : 'none')};
  width: 85%;
  text-align: center;
  border-radius: 5px;
  background-color: rgb(8, 167, 8);
  color: #fff;
  font-weight: bold;
  padding: 7px 0;
  position: absolute;
  top: 10px;
  justify-content: center;
  align-items: center;
  transform: translateX(10%);
`;
