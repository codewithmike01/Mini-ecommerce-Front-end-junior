import React, { useState } from 'react';
import styled from 'styled-components';
import BookForm from './formUtils/BookForm';
import DvdForm from './formUtils/DvdForm';
import FunitureForm from './formUtils/FunitureForm';
import Button from '../utilities/Button';

function Form() {
  const noItemShown = {
    DVD: false,
    Furniture: false,
    Book: false,
  };
  const [state, setState] = useState(noItemShown);

  const formSelect = (e) => {
    const item = e.target.value;

    setState(() => {
      switch (item) {
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
    console.log('in form');
    e.preventDefault();
    console.log('in form');
  };

  return (
    <Container>
      <form
        className="product-form flex column"
        onSubmit={(e) => handleSubmit(e)}
      >
        <div className="form-item flex j-between">
          <label>SkU</label>
          <input type="text" name="sku" id="sku" required />
        </div>

        <div className="form-item flex j-between">
          <label>Name</label>
          <input type="text" name="name" id="name" required />
        </div>

        <div className="form-item flex j-between">
          <label>Price ($)</label>
          <input type="text" name="price" id="price" required />
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

        <Button type="submit" title="SAVE" className="button">
          Save
        </Button>
      </form>
    </Container>
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

    .button {
      width: 80px;
    }
  }
`;
