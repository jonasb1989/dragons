import React, { useState } from 'react';  
import { saveDragon } from '../../api';

import CustomButton from '../../components/CustomButton';
import FormInput from '../../components/FormInput';
import MessageHandler from '../../components/MessageHandler';
import Spinner from '../../components/Spinner';

import { CADASTRO_SUCCESS, CADASTRO_FAILURE } from './consts';

import './index.scss';

const Cadastro = () => {
    const [name, setName] = useState('');
    const [type, setType] = useState('');
    const [loading, setLoading] = useState(false);
    const [isSubmitSuccess, setSubmitSucces] = useState(false);
    const [isSubmitFailure, setSubmitFailure] = useState(false);

    const handleSubmit = async event => {
        event.preventDefault();
        setLoading(true);
        const dragonObject = {
            name,
            type,
            createdAt: new Date(),
        };

        try {

            await saveDragon(dragonObject);
            setSubmitSucces(true);
            
        } catch (error) {

            setSubmitFailure(true);

        } finally {
            setLoading(false);
            setTimeout(() => {
                setName('');
                setType('');
                setSubmitFailure(false)
                setSubmitSucces(false);
            }, 3000);
        }
    }

    const handleNameChange = e => {
        setName(e.target.value);
    }

    const handleTypeChange = e => {
        setType(e.target.value);
    }

    return (
        <Spinner isLoading={loading}>
            <div className="cadastro">
                <h2>Cadastrar Dragão</h2>
                <MessageHandler
                    isVisible={isSubmitSuccess || isSubmitFailure}
                    isSuccess={isSubmitSuccess}
                    isError={isSubmitFailure}
                    message={isSubmitSuccess ? CADASTRO_SUCCESS : CADASTRO_FAILURE}
                /> 
                <form onSubmit={handleSubmit}>
                  <FormInput
                    name="name"
                    type="text"
                    value={name}
                    handleChange={handleNameChange}
                    label="Nome"
                    required
                  />
                  <FormInput
                    name="type"
                    type="text"
                    value={type}
                    handleChange={handleTypeChange}
                    label="Tipo"
                    required
                  />
                <div className="buttons">
                    <CustomButton type="submit">
                        CADASTRAR
                    </CustomButton>
                </div>
                </form>
            </div>
        </Spinner>
    );
};

export default Cadastro;
