import React, { useEffect, useState } from 'react';

import { getDragonDetail } from '../../api';
import Spinner from '../../components/Spinner';
import { dateToShow } from '.././../helpers';

import './index.scss';

const defaultDragonObject = {
    createdAt: '',
    histories: [],
    id: '',
    name: '',
    type: '',
};

const Detalhe = ({ hitory, location, match }) => {

    const [loading, setLoading] = useState(false);
    const [dragon, setDragon] = useState(defaultDragonObject);

    useEffect(() => {
        const fetchDragonDetail = async () => {
            const { params: { id } } = match;
            setLoading(true);
            try {
                const { data } = await getDragonDetail(id);
                setDragon(data);
            } catch (error) {
                console.log(error.message);
            } finally {
                setLoading(false);
            }
            
        };
        
        fetchDragonDetail();
    }, []); // eslint-disable-line

    const { name, type, createdAt, histories } = dragon;

    return (
        <Spinner isLoading={loading}>
            <div className="dragao-detalhes">
                <h2>Detalhe</h2>
                    <div className="detalhes">
                        <div className="detalhe">
                            <h3>Nome</h3>
                            <span>{name}</span>
                        </div>
                        <div className="detalhe">
                            <h3>Tipo</h3>
                            <span>{type}</span>
                        </div>
                        <div className="detalhe">
                            <h3>Data de Criação</h3>
                            <span>{dateToShow(createdAt)}</span>
                        </div>
                        {!!histories.length && histories.map(history => (
                            <div className="detalhe">
                                <h3>História</h3>
                                <span>{history}</span>
                            </div>
                        ))}
                    </div>
            </div>
        </Spinner>
    );
};

export default Detalhe;