import React from "react";

const Button = ({ text, icon, className, onClick }) => {
  if (icon && !text) {
    return (
      <button
        onClick={onClick}
        className={`${className ? className : null} button-icon}`}
      >
        <img src={icon} alt="" />
      </button>
    );
  }
  return (
    <button
      onClick={onClick}
      className={`${className ? className : null} button-text-icon`}
    >
      {icon && <img src={icon} alt="" />}
      <p className="p1">{text}</p>
    </button>
  );
};
export default Button;
