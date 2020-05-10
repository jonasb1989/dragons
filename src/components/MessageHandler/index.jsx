import React from 'react';

import './index.scss';

const successClassName = 'success-message';
const errorClassName  = 'error-message'

const MessageHandler = ({ 
    isVisible = false, 
    isSuccess = true, 
    isError = false,
    message = '',
}) => {

    const typeClassName = isError ? errorClassName : successClassName;
    const className = 
        isVisible ? `${typeClassName} ${typeClassName}-visible` : `${typeClassName} ${typeClassName}-hidden`;

    return (
        <div>
            <div className={className}>
                <span>
                    {message}
                </span>
            </div>
        </div>
    );
};

export default MessageHandler;