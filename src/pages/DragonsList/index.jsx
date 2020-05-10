import React, { useEffect, useState } from 'react';

import { getDragons, deleteDragon } from '../../api';
import Dragon from '../../components/Dragon';

import './index.scss';

const DragonsList = () => {
    const [dragons, setDragons] = useState([]);
    useEffect(() => {
        const fetchDragons = async () => {
            try {
                await handleGetDragons();
            } catch(error) {
                console.log(error.message);
            }
        };

        fetchDragons();
    }, []);

    const handleGetDragons = async () => {
        try { 
            const { data } = await getDragons();
            setDragons(data);
        } catch(error) { 
            throw error;
        }
        
    };

    const handleDeleteDragon = async id => {
        try {
            await deleteDragon(id);
            await handleGetDragons();
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className="dragoes">
            <h2>Dragões</h2>
            <table className="dragoes-table">
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>Tipo</th>
                    </tr>
                </thead>
                <tbody>
                    {dragons.map(dragon => (
                        <Dragon 
                            key={dragon.id} 
                            onDelete={handleDeleteDragon} 
                            {...dragon} 
                        />
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default DragonsList;
