import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { Container } from '@material-ui/core';
import './App.css';
import SignIn from './components/Auth/SignIn';
import SignUp from './components/Auth/SignUp';
import LandingPage from './components/LandingPage/LandingPage';
function App() {
  return(
    <BrowserRouter>
        <Switch>
          <Route path="/" exact component={LandingPage} />
          <Route path="/signup" exact component={SignUp} />
          <Route path="/signin" exact component={SignIn} />
        </Switch>
    </BrowserRouter>
  )

}

export default App;
