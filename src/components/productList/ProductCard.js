import React from 'react';
import styled from 'styled-components';
import { setDeleteProduct } from '../../store/features/ProductSlice';
import { useDispatch } from 'react-redux';

function ProductCard({ sku, price, size, product, id }) {
  const dispatch = useDispatch();
  return (
    <Container>
      <form>
        <input
          type="checkbox"
          name="product-list"
          value={id}
          className="delete-checkbox"
          onClick={(e) => dispatch(setDeleteProduct(parseInt(e.target.value)))}
        />
      </form>
      <section className="product-list-text flex column" id={id}>
        <p>{sku}</p>
        <p>{product}</p>
        <p>
          <span> $</span>
          {price}
        </p>
        <p>
          <span>{size}</span>
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
  width: 150px;
  height: 140px;

  .product-list-text {
    text-align: center;
    margin-top: 10px;
    gap: 0.2rem;
  }
`;
