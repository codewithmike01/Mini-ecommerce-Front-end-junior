import React from 'react';
import styled from 'styled-components';
import Header from '../feature/Header';

function AddProduct() {
  return (
    <>
      <Header headingText="Product Add" />
      <Container>AddProduct</Container>
    </>
  );
}

export default AddProduct;
const Container = styled.div`
  padding-top: 1.5rem;
`;
