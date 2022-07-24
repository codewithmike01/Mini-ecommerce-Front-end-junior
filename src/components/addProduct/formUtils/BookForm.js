import React from 'react';
import styled from 'styled-components';

function BookForm() {
  return (
    <Container>
      <div className="form-item flex j-between">
        <label>Weight (KG) </label>
        <input type="text" id="book" name="books" value=" " required />
      </div>
      <p>Please Provide Weight</p>
    </Container>
  );
}

export default BookForm;
const Container = styled.div`
  p {
    margin-top: 20px;
  }
`;
