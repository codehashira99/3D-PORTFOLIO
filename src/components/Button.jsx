import React from 'react';

const Button = ({ text, className, id, onClick }) => {
  return (
    <a
      id={id}
      onClick={onClick} // 🔥 THIS enables the click event
      className={`${className ?? ''} cta-wrapper cursor-pointer`} // 👈 Added cursor-pointer
    >
      <div className="cta-button group">
        <div className="bg-circle" />
        <p className="text">{text}</p>
        <div className="arrow-wrapper">
          <img src="/images/arrow-down.svg" alt="arrow" />
        </div>
      </div>
    </a>
  );
};

export default Button;
