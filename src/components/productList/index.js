import React, { useEffect } from 'react';
import { ColorRing } from 'react-loader-spinner';
// import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
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
  }, []);

  products = products['products']?.map(({ sdk, price, measure, name, id }) => (
    <ProductCard
      sdk={sdk}
      price={price}
      size={measure}
      product={name}
      key={id}
    />
  ));

  if (loading === false) {
    return (
      <>
        <Header headingText="Product List" />
        <Container>{products}</Container>
      </>
    );
  } else {
    return (
      <>
        <Header headingText="Product List" />
        <ColorRing
          visible={true}
          height="80"
          width="80"
          ariaLabel="blocks-loading"
          wrapperStyle={{}}
          wrapperClass="blocks-wrapper"
          colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
        />
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
`;
