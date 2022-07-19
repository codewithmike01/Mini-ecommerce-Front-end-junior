import React from 'react';
import Button from '../utilities/button';
import styled from 'styled-components';

function Header() {
  return (
    <Container>
      <section className="header-items flex j-between">
        <h1>Product List</h1>

        <div className="header-buttons flex">
          <Button type="button" title="ADD" />
          <Button type="button" title="MASS DELETE" />
        </div>
      </section>
      <hr className="line" />
    </Container>
  );
}

export default Header;
const Container = styled.div`
  padding-top: 3rem;

  .header-items {
    align-items: flex-end;
    .header-buttons {
      align-items: center;
      gap: 1rem;
    }
  }
`;
