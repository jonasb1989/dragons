import React from 'react';

import './index.scss'

const TableInput = ({ ...otherProps }) => (
    <div className="group">
        <input className="table-input" {...otherProps} />
    </div>
);

export default TableInput;
