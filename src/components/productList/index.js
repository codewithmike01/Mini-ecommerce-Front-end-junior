import React, { useEffect } from 'react';
import { SpinnerCircular } from 'spinners-react';
import styled from 'styled-components';
import Header from '../feature/Header';
import ProductCard from './ProductCard';
// import ProductContent from './testContent/content';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../../store/features/ProductSlice';

function ProductList() {
  const dispatch = useDispatch();
  let { products, loading } = useSelector((state) => state.product);

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  products = products['products']?.map(({ sku, price, measure, name, id }) => (
    <ProductCard
      sku={sku}
      price={price}
      size={measure}
      product={name}
      id={id}
      key={id}
    />
  ));

  if (loading === false) {
    return (
      <>
        <Header headingText="Product List" />
        {products?.length > 0 && <Container>{products}</Container>}
        {products?.length === 0 && <h1>No product found</h1>}
      </>
    );
  } else {
    return (
      <>
        <Header headingText="Product List" />
        <SpinnerContainer className="spinner">
          <SpinnerCircular
            size={57}
            thickness={78}
            speed={100}
            color="rgba(57, 126, 172, 1)"
            secondaryColor="rgba(57, 110, 172, 0.44)"
          />
        </SpinnerContainer>
      </>
    );
  }
}

export default ProductList;
const Container = styled.div`
  padding: 0 5px;
  padding-top: 1.5rem;
  display: flex;
  gap: 10px;
  justify-content: center;
  flex-flow: row wrap;

  .spinner {
  }
`;

const SpinnerContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding-top: 30px;
`;
