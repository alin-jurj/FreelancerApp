import {React,useEffect} from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { Container } from '@material-ui/core';
import './App.css';
import SignIn from './components/Auth/SignIn';
import SignUp from './components/Auth/SignUp';
import LandingPage from './components/LandingPage/LandingPage';
import MyProfile from './components/MyProfile/MyProfile'
import MainPage from './components/MainPage/MainPage';
import AddProject from './components/Auth/AddProject';
import MyPortofolio from './components/MyPortofolio/MyPortofolio';
import CompaniesDashboard from './components/ShowCompanies/CompaniesDashboard';
import CompanyInfo from './components/ShowCompanies/CompanyInfo';
import PendingOffers from './components/PendingOffers/PendingOffers';
import AcceptedOffers from './components/PendingOffers/AcceptedOffers';
import Complaint from './components/Complaint/Complaint';
import { getCompanies } from './actions/user';
import { useDispatch } from 'react-redux';

function App() {

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCompanies());
}, [dispatch]);

  return(
    <BrowserRouter>
        <Switch>
          <Route path="/" exact component={LandingPage} />
          <Route path="/MainPage" exact component={MainPage} /> 
          <Route path="/signup" exact component={SignUp} />
          <Route path="/signin" exact component={SignIn} />
          <Route path="/MyProfile" exact component={MyProfile}/>
          <Route path="/addProject" exact component={AddProject} />
          <Route path="/myportofolio" exact component={MyPortofolio}/>
          <Route path="/companies" exact component={CompaniesDashboard} />
          <Route path="/company/:id" exact component={CompanyInfo} />
          <Route path="/pendingoffers" exact component={PendingOffers} />
          <Route path="/acceptedoffers" exact component={AcceptedOffers} />
          <Route path="/complaint" exact component={Complaint} />
        </Switch>
    </BrowserRouter>
  )

}

export default App;
