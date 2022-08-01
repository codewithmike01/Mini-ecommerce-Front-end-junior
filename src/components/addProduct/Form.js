import React, { useState } from 'react';
import styled from 'styled-components';
import BookForm from './formUtils/BookForm';
import DvdForm from './formUtils/DvdForm';
import FunitureForm from './formUtils/FunitureForm';
import selectedFormItem, { getFormValue, isValid } from './formUtils/Ultils';
import { useNavigate } from 'react-router-dom';
import Notification from '../feature/Notification';

function Form() {
  const noItemShown = {
    DVD: false,
    Furniture: false,
    Book: false,
  };

  const navigate = useNavigate();
  const [state, setState] = useState(noItemShown);
  const [notice, setNotice] = useState({
    show: false,
    message: '',
  });

  const formSelect = (e) => {
    const itemSelected = e.target.value;

    setState(() => {
      switch (itemSelected) {
        case 'DVD':
          return {
            Furniture: false,
            Book: false,
            DVD: !state['DVD'],
          };
        case 'Furniture':
          return {
            DVD: false,
            Book: false,
            Furniture: !state['Furniture'],
          };
        case 'Book':
          return {
            Furniture: false,
            DVD: false,
            Book: !state['Book'],
          };
        default:
          return { noItemShown };
      }
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const selectedValue = selectedFormItem(state);
    const formData = getFormValue(selectedValue, e);
    const isValidReponse = isValid(formData);

    if (isValidReponse[0] === true) {
      handleNotice(isValidReponse);
    } else {
      console.log(formData);
    }
  };

  const handleNotice = (checkResult) => {
    setNotice(() => ({
      show: checkResult[0],
      message: checkResult[1],
    }));

    setTimeout(() => {
      setNotice(() => ({
        ...notice,
        show: false,
      }));
    }, 5000);
  };

  return (
    <>
      <Notification message={notice['message']} show={notice['show']} />
      <Container>
        <form
          className="product-form flex column"
          onSubmit={(e) => handleSubmit(e)}
        >
          <div className="form-item flex j-between">
            <label>SkU</label>
            <input type="text" name="sku" id="sku" />
          </div>

          <div className="form-item flex j-between">
            <label>Name</label>
            <input type="text" name="name" id="name" />
          </div>

          <div className="form-item flex j-between">
            <label>Price ($)</label>
            <input type="text" name="price" id="price" />
          </div>

          <div className=" switcher form-item flex j-between">
            <label>Type Switcher</label>
            <select onChange={(e) => formSelect(e)}>
              <option selected>Type Switcher</option>
              <option value="DVD">DVD</option>
              <option value="Furniture">Furniture</option>
              <option value="Book">Book</option>
            </select>
          </div>
          <section className="dynamic-form flex column">
            <div
              className="book-form"
              style={{ display: state['Book'] ? 'block' : 'none' }}
            >
              <BookForm />
            </div>
            <div
              className="dvd-form"
              style={{ display: state['DVD'] ? 'block' : 'none' }}
            >
              <DvdForm />
            </div>
            <div
              className="furniture-form"
              style={{ display: state['Furniture'] ? 'block' : 'none' }}
            >
              <FunitureForm />
            </div>
          </section>

          <div className="form-buttons flex">
            <button
              type="button"
              className="button"
              onClick={() => navigate('/')}
            >
              Cancel
            </button>

            <button type="submit" className="button">
              Save
            </button>
          </div>
        </form>
      </Container>
    </>
  );
}

export default Form;
const Container = styled.div`
  .product-form {
    gap: 15px;

    .switcher {
      margin: 20px 0;
      padding-right: 15px;
    }

    .form-item {
      gap: 20px;
      align-items: flex-end;

      label {
        font-size: 1rem;
      }
    }

    .dynamic-form {
      gap: 15px;
    }

    input:focus {
      outline: none;
      padding-left: 2px;
    }

    .form-buttons {
      gap: 30px;
      .button {
        width: 80px;
      }
    }
  }
`;
