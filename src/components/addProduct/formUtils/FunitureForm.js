import React from 'react';
import styled from 'styled-components';

function FunitureForm() {
  return (
    <Container className="flex column">
      <div className="form-item flex j-between">
        <label>Height (CM)</label>
        <input type="text" id="height" name="height" />
      </div>
      <div className="form-item flex j-between">
        <label>Width (CM)</label>
        <input type="text" id="weight" name="weight" />
      </div>
      <div className="form-item flex j-between">
        <label>Length (CM)</label>
        <input type="text" id="length" name="length" />
      </div>

      <p>Please Provide dimensions in HxWxL</p>
    </Container>
  );
}

export default FunitureForm;
const Container = styled.div`
  gap: 15px;
`;
