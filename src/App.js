import React, { useEffect, useState } from 'react';
import { Switch, Route } from "react-router-dom";

import Casdastro from './pages/Cadastro';
import LogIn from './pages/LogIn';
import DragonsList from './pages/DragonsList';
import NavBar from './components/NavBar';
import Detalhe from './pages/Detalhe';

import './App.css';

function App({ history }) {
  const [isUserLogged, setUserLogged] = useState({});

  /*useEffect(() => {
    const user = JSON.parse(sessionStorage.getItem('user'));
    const isLogged = user ? user.isLogged : false;
  
    if (isLogged) {
      setUserLogged(isLogged);
    }
  }, []); // eslint-disable-line*/

  return (
    <div className="App">
      <NavBar />
      <Switch>
       <div className="main">
          <Route
            exact 
            path="/" 
            component={LogIn} 
          />
          <Route path="/DragonsList" component={DragonsList} />
          <Route path="/Cadastro" component={Casdastro} />
          <Route path="/Detalhe/:id" component={Detalhe} />
        </div>
       </Switch>
    </div>
  );
}

export default App;
