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
import FreelancersDashboard from './components/ShowFreelancers/FreelancersDashboard';
import ComplaintsDashboard from './components/Complaint/ComplaintsDashboard';
import { getCompanies } from './actions/user';
import { useDispatch } from 'react-redux';
import AssignTasks from './components/AssignTasks/AssignTasks';
import CreditCard from './components/MyProfile/Payment';
import { AddCreditCard } from './components/Auth/AddCreditCard';
import {Payment} from './components/MyProfile/Payment'
import { getUserCreditCards } from './actions/CreditCard';
import FinishedTasksCompany from './components/FinishedTasksCompany/FinishedTasksCompany';
function App() {

//    const dispatch = useDispatch();
//    useEffect(() => {
//      dispatch(getUserCreditCards());
//  }, [dispatch]);

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
          <Route path="/freelancers" exact component={FreelancersDashboard} />
          <Route path="/AssignTasks" exact component={AssignTasks} />
          <Route path="/complaints" exact component={ComplaintsDashboard} />
          <Route path="/Payment" exact component={Payment} />
          <Route path="/addCreditCard" exact component={AddCreditCard} />
          <Route path="/FinishedTasks" exact component={FinishedTasksCompany} />
        </Switch>
    </BrowserRouter>
  )

}

export default App;
