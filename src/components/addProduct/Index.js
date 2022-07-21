import React from 'react';
import styled from 'styled-components';
import Header from '../feature/Header';
import Form from './Form';

function AddProduct() {
  return (
    <>
      <Header headingText="Product Add" />
      <Container>
        <Form />
      </Container>
    </>
  );
}

export default AddProduct;
const Container = styled.div`
  padding-top: 1.5rem;
`;
