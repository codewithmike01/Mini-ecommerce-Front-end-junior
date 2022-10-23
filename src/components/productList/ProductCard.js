import React from 'react';
import styled from 'styled-components';

function ProductCard({ sdk, price, size, product }) {
  return (
    <Container>
      <form>
        <input
          type="checkbox"
          name="product-list"
          className="delete-checkbox"
        />
      </form>
      <section className="product-list-text flex column">
        <p>{sdk}</p>
        <p>{product}</p>
        <p>
          {price} <span> $ </span>
        </p>
        <p>
          <span>{size}</span> 700 MB
        </p>
      </section>
    </Container>
  );
}

export default ProductCard;
const Container = styled.div`
  padding: 15px;
  padding-bottom: 30px;
  border: 2px solid #000;
  height: 140px;

  .product-list-text {
    text-align: center;
    margin-top: 10px;
    gap: 0.2rem;
  }
`;
