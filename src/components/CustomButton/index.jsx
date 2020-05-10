import React from "react";

import './index.scss';

const CustomButton = ({ children, isDelete = false, ...props }) => {
  const deleteClassname = isDelete ? 'is-delete' : '';

  return (
    <button className={`custom-button ${deleteClassname}`} {...props}>
      {children}
    </button>
  );
};

export default CustomButton;