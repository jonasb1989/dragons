import React from 'react';

import CustomButton from '../CustomButton';
import TableInput from '../TableInput';
 
import './index.scss';

const Dragon = ({ name, type, id, onDelete }) =>  (
    <tr className="dragon">
       <td><TableInput value={name} /></td>
       <td><TableInput value={type} /></td>
       <td>
            <CustomButton
                onClick={() => onDelete(id)}
                isDelete={true}
            >
                EXCLUIR
            </CustomButton>
        </td>
    </tr>
);

export default Dragon;
