import React from 'react';
import Button from '../utilities/Button';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

function Header({ headingText }) {
  const navigate = useNavigate();
  const HandleAddPage = () => {
    navigate('/add-product');
  };
  return (
    <Container>
      <section className="header-items flex j-between">
        <h1>{headingText}</h1>

        <div className="header-buttons flex">
          <Button type="button" title="ADD" actionHandle={HandleAddPage} />
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
  margin-top: 20px;

  .header-items {
    align-items: flex-end;
    .header-buttons {
      align-items: center;
      gap: 1rem;
    }
  }
`;
