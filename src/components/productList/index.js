import React from 'react';
import styled from 'styled-components';
import Header from '../feature/Header';
import ProductCard from './ProductCard';
import ProductContent from './testContent/content';

function ProductList() {
  const products = ProductContent.map(({ SDK, Price, Size, Name, id }) => (
    <ProductCard sdk={SDK} price={Price} size={Size} product={Name} key={id} />
  ));
  return (
    <>
      <Header headingText="Product List" />
      <Container>{products}</Container>
    </>
  );
}

export default ProductList;
const Container = styled.div`
  padding-top: 1.5rem;
  display: flex;
  gap: 25px;
  justify-content: center;
  flex-flow: row wrap;
`;
