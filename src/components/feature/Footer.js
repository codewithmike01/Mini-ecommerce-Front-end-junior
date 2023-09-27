import React from 'react';
import styled from 'styled-components';

function Footer() {
  return (
    <Container>
      <div className="wrapper">
        <hr className="footer-line line" />
        <p>Shopping list by Mike</p>
      </div>
    </Container>
  );
}

export default Footer;
const Container = styled.div`
  position: relative;
  padding: 10px 0;
  height: 20vh;

  .wrapper {
    position: absolute;
    bottom: 0;
    right: 0;
    left: 0;
    .footer-line {
      margin-top: 1rem;
    }

    p {
      margin-top: 10px;
      text-align: center;
    }
  }
`;
