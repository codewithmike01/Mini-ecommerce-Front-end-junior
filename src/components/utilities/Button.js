import React from 'react';

function Button({ type, title, actionHandle }) {
  return (
    <button type={type} className="button" onClick={actionHandle}>
      {title}
    </button>
  );
}

export default Button;
