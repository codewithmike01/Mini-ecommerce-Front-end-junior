import React from 'react';
import styled from 'styled-components';

function DvdForm() {
  return (
    <Container>
      <div className="form-item flex j-between">
        <label>Size (MB) </label>
        <input type="text" id="DVD" name="DVD" />
      </div>
      <p>
        <span className="very-imp">*</span>Please Provide Size
      </p>
    </Container>
  );
}

export default DvdForm;
const Container = styled.div`
  p {
    margin-top: 20px;
  }
`;
