import React from 'react';
import styled from 'styled-components';

function Footer() {
  return (
    <Container>
      <hr className="footer-line line" />
      <p>Sabdiweb test assignment by Mike</p>
    </Container>
  );
}

export default Footer;
const Container = styled.div`
  .footer-line {
    margin-top: 4rem;
  }

  p {
    margin-top: 10px;
    text-align: center;
  }
`;
