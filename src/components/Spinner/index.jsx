import React, { Fragment } from 'react';

import './index.scss';

const Spinner = ({ isLoading, children }) =>  {
   return isLoading ? (
        <div className="spinner-overlay">
                <div className="spinner-container"/>
        </div>
   ) : (
        <Fragment>
            {children}
        </Fragment>
   )
};

export default Spinner;

