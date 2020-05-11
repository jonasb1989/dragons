import React, { useEffect, useState } from 'react';
import { Switch, Route, BrowserRouter } from "react-router-dom";

import Casdastro from './pages/Cadastro';
import LogIn from './pages/LogIn';
import DragonsList from './pages/DragonsList';
import NavBar from './components/NavBar';
import Detalhe from './pages/Detalhe';
import PrivateRouter from './components/PrivateRouter';

import './App.css';

function App({ history }) {
  const [isUserLogged, setUserLogged] = useState(false);
  const user = JSON.parse(sessionStorage.getItem('user'));

  useEffect(() => {
    const isLogged = user ? user.isLogged : false;
  
    if (isLogged) {
      setUserLogged(isLogged);
    }
  }, [user]);

  const handleLogOut = () => {
    sessionStorage.clear();
    setUserLogged(false);
  };

  const handleLogIn = () => {
    setUserLogged(true);
  }

  return (
    <BrowserRouter>
      <div className="App">
        <NavBar onLogOut={handleLogOut} />
        <Switch>
         <div className="main">
            <Route
              exact 
              path="/"
              render={props => <LogIn onLogIn={handleLogIn} {...props} />}
            />
            <PrivateRouter
              isUserLogged={isUserLogged} 
              path="/DragonsList"
              component={DragonsList} 
            />
            <PrivateRouter
              isUserLogged={isUserLogged}
              path="/Cadastro" 
              component={Casdastro} 
            />
            <PrivateRouter
              isUserLogged={isUserLogged}
              path="/Detalhe/:id"
              component={Detalhe}
            />
          </div>
         </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
