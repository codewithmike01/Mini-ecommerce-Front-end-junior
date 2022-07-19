import React from 'react';

function Button({ type, title }) {
  return (
    <button type={type} className="button">
      {title}
    </button>
  );
}

export default Button;
