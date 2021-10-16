import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { Container } from '@material-ui/core';
import './App.css';
import SignIn from './components/Auth/SignIn';
import SignUp from './components/Auth/SignUp';
import LandingPage from './components/LandingPage/LandingPage';
import MyProfile from './components/MyProfile/MyProfile'
import MainPage from './components/MainPage/MainPage';
function App() {
  return(
    <BrowserRouter>
        <Switch>
          <Route path="/" exact component={LandingPage} />
          <Route path="/signup" exact component={SignUp} />
          <Route path="/signin" exact component={SignIn} />
          <Route path="/MainPage" exact component={MainPage} /> 
          <Route path="/MyProfile" exact component={MyProfile}/>
        </Switch>
    </BrowserRouter>
  )

}

export default App;