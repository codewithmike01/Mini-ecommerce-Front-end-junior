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
  width: 95%;
  text-align: center;
  border-radius: 5px;
  background-color: rgb(8, 167, 8);
  color: #fff;
  font-weight: bold;
  padding: 7px 0;
  position: absolute;
  top: 10px;

  display: ${({ show }) => (show ? 'block' : 'none')};
`;
