import React, { useState } from 'react';
import CustomButton from '../../components/CustomButton';
import FormInput from '../../components/FormInput';

import './index.scss';

const LogIn = ({ history, onLogIn }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async event => {
        event.preventDefault();
        if (email === 'jonas@teste.com.br' && password === '123456789') {
            sessionStorage.setItem('user', JSON.stringify({
                isLogged: true,
                email,
                password, 
            }));
            onLogIn();
            history.push('/DragonsList');
        };
    };

    const handleEmailChange = e => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = e => {
        setPassword(e.target.value);
    };

    return (
        <div className="sign-in">
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
              <FormInput
                name="email"
                type="email"
                value={email}
                handleChange={handleEmailChange}
                label="Email"
                required
              />
              <FormInput
                name="password"
                type="password"
                value={password}
                handleChange={handlePasswordChange}
                label="Password"
                required
              />
            <div className="buttons">
                <CustomButton type="submit">LOGAR</CustomButton>
            </div>
            </form>
        </div>
    );
};

export default LogIn;
