import React, { useState } from 'react';

import { dateToShow } from '../../helpers';
import CustomButton from '../CustomButton';
import TableInput from '../TableInput';

const Dragon = ({ name, type, id, createdAt, onDelete, onUpdate, history }) =>  {
    const [dragonName, setDragonName] = useState(name);
    const [dragonType, setDragonType] = useState(type);

    const handleUpdate = async value => {
        const dragonObject = {
            name: value === name ? dragonName : name,
            type: value === type ? dragonType : type,
            createdAt,
        };

        await onUpdate(id, dragonObject);
    };

    const handleDragonNameChange = e => {
        setDragonName(e.target.value);
    };

    const handleDragonTypeChange = e => {
        setDragonType(e.target.value);
    };

    return (
        <tr className="dragon">
       <td>
           <TableInput 
                name="name"
                type="text"
                value={dragonName}
                onBlur={() => handleUpdate(name)} 
                handleChange={handleDragonNameChange}
           />
           </td>
       <td>
           <TableInput
                name="type"
                type="text"
                value={dragonType}
                onBlur={() => handleUpdate(type)} 
                handleChange={handleDragonTypeChange}
           />
        </td>
       <td>
           <TableInput 
                value={dateToShow(createdAt)} 
                disabled 
           />
        </td>
       <td>
        <CustomButton onClick={() => history.push(`/Detalhe/${id}`)}>
            VER DETALHES
        </CustomButton>
       </td>
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
};

export default Dragon;
