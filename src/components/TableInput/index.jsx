import React from 'react';

import './index.scss'

const TableInput = ({ handleChange, ...otherProps }) => (
    <div className="group">
        <input className="table-input" onChange={handleChange} {...otherProps} />
    </div>
);

export default TableInput;
