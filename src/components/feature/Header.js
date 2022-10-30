import React, { useState } from 'react';
import Button from '../utilities/Button';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { deleteProduct } from '../../store/features/ProductSlice';
import Notification from '../feature/Notification';

function Header({ headingText }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [notice, setNotice] = useState({
    show: false,
    message: '',
  });
  const { productDelete } = useSelector((state) => state.product);
  const handleAddPage = () => {
    navigate('/add-product');
  };

  const handleFormSubmit = () => {
    document.querySelector('form').querySelector('.submit').click();
  };

  const handleFormCancel = () => {
    document.querySelector('form').querySelector('.cancel').click();
  };

  const handleDelete = () => {
    if (deleteProduct.length > 0) {
      dispatch(deleteProduct({ list: productDelete }));

      handleNotice([true, 'Product(s) deleted Successfully']);
    }
  };

  const handleNotice = (noticeMessage) => {
    setNotice(() => ({
      show: noticeMessage[0],
      message: noticeMessage[1],
    }));

    setTimeout(() => {
      setNotice(() => ({
        ...notice,
        show: false,
      }));
      window.location.reload();
    }, 2000);
  };

  return (
    <Container heading={headingText}>
      <Notification message={notice['message']} show={notice['show']} />
      <section className="header-items flex j-between">
        <h1>{headingText}</h1>

        <div className="header-buttons">
          <Button type="button" title="ADD" actionHandle={handleAddPage} />
          <Button
            type="button"
            title="MASS DELETE"
            actionHandle={handleDelete}
          />
        </div>

        <div className="header-buttons-save">
          <Button type="button" title="SAVE" actionHandle={handleFormSubmit} />
          <Button
            type="button"
            title="CANCEL"
            actionHandle={handleFormCancel}
          />
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
    padding: 0 7px;
    align-items: flex-end;
    .header-buttons,
    .header-buttons-save {
      align-items: center;
      gap: 1rem;
    }

    .header-buttons {
      display: ${({ heading }) =>
        heading.includes('Product Add') ? 'none' : 'flex'};
    }

    .header-buttons-save {
      display: ${({ heading }) =>
        heading.includes('Product List') ? 'none' : 'flex'};
    }
  }

  @media screen and (max-width: 290px) {
    .header-items {
      flex-direction: column;
      align-items: center;
      gap: 20px;
    }
  }
`;
