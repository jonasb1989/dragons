import React, { useEffect, useState } from 'react';

import { getDragons, deleteDragon, updateDragon } from '../../api';
import Dragon from '../../components/Dragon';
import MessageHandler from '../../components/MessageHandler';
import Spinner from '../../components/Spinner';

import {
    UPDATE_SUCCESS,
    UPDATE_FAILURE,
    EXCLUSAO_SUCCESS,
    EXCLUSAO_FAILURE,
} from './consts';

import './index.scss';

const DragonsList = ({ history }) => {
    const [dragons, setDragons] = useState([]);
    const [loading, setLoading] = useState(false);
    const [isSubmitSuccess, setSubmitSucces] = useState(false);
    const [isSubmitFailure, setSubmitFailure] = useState(false);
    const [message, setMessage] = useState('');

    useEffect(() => {
        const fetchDragons = async () => {
            setLoading(true);

            try {
                await handleGetDragons();
            } catch (error) {
                console.log(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchDragons();
    }, []);

    const handleGetDragons = async () => {
        setLoading(true);

        try { 
            const { data } = await getDragons();
            setDragons(data);
        } catch (error) { 
            throw error;
        } finally {
            setLoading(false);
        }
        
    };

    const handleDeleteDragon = async id => {
        try {
            await deleteDragon(id);
            setSubmitSucces(true);
            setMessage(EXCLUSAO_SUCCESS);
            await handleGetDragons();
            setTimeout(() => setSubmitSucces(false), 3000);
        } catch (error) {
            setSubmitFailure(true);
            setMessage(EXCLUSAO_FAILURE);
            setTimeout(() => setSubmitFailure(false), 3000);
        }
    }

    const handleUpdateDragon = async (id, dragonObject) => {
        try {
            await updateDragon(id, dragonObject);
            setMessage(UPDATE_SUCCESS);
            setSubmitSucces(true);
            await handleGetDragons();
            setTimeout(() => setSubmitSucces(false), 3000);
        } catch (error) {
            setMessage(UPDATE_FAILURE);
            setSubmitFailure(true);
            setTimeout(() => setSubmitFailure(false), 3000);
        }
    }

    return (
        <Spinner isLoading={loading}>
            <div className="dragoes">
                <h2>Dragões</h2>
                <MessageHandler
                    isVisible={isSubmitSuccess || isSubmitFailure}
                    isSuccess={isSubmitSuccess}
                    isError={isSubmitFailure}
                    message={message}
                />
                {!!dragons.length && (
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
                                history={history}
                                onDelete={handleDeleteDragon}
                                onUpdate={handleUpdateDragon} 
                                {...dragon} 
                            />
                        ))}
                    </tbody>
                </table>
                )}
            </div>
        </Spinner>
    );
};

export default DragonsList;
