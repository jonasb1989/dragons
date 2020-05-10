import React from "react";

import './index.scss';

const CustomButton = ({ children, isDelete = false, ...props }) => {
  const isDeleteClassname = isDelete ? 'is-delete' : '';

  return (
    <button className={`custom-button ${isDeleteClassname}`} {...props}>
      {children}
    </button>
  );
};

export default CustomButton;