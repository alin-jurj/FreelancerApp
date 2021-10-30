import React, { useState } from 'react';
import "./menu.scss";
import MyProfile from "../MyProfile/MyProfile";
import HeaderContent from "../LandingPage/HeaderContent";
import { Button } from "@material-ui/core";
import { useDispatch } from 'react-redux';
import { useHistory } from "react-router";
import * as actionType from '../../constants/actionTypes';


export default function Menu({ menuOpen, setMenuOpen }) {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
  const dispatch = useDispatch();
  const history = useHistory();

  const logout = () => {
    dispatch({ type: actionType.LOGOUT });

    history.push('/');

    setUser(null);
  }
  const goHome = () => {
    history.push('/MainPage');
  }
  const goToProfile= () => {
    history.push('/MyProfile');
  }

  const goToPortofolio = () => {
    history.push('/myportofolio');
  }

  const goToCompanies = () => {
    history.push('/companies');
  }

  const goToPending = () => {
    history.push('/pendingoffers');
  }

  const goToAccepted = () => {
    history.push('/acceptedoffers');
  }

  const goToComplaint = () => {
    history.push('/complaint');
  }

  const goToFreelancers = () => {
    history.push('/freelancers');
  }
  const goToAssignTasks = () => {
    history.push('/AssignTasks');
  }

  const goToComplaints = () => {
    history.push('/complaints');
  }
  const goToPayment= () => {
    history.push('/Payment');
  }



  return (
    <div className={"menu "+(menuOpen && "active")}>
      <ul>
        <li onClick={()=>setMenuOpen(false)}>
          <Button variant="text" color="primary" fullWidth onClick={goHome}>Home</Button>
          {
            user.result.type === 'freelancer' && (<> 
            <Button variant="text" color="primary" fullWidth onClick={goToProfile}>Your profile</Button>
            <Button variant="text" color="primary" fullWidth onClick={goToPortofolio}>My Portofolio</Button>
            <Button variant="text" color="primary" fullWidth onClick={goToCompanies}>Companies</Button>
            <Button variant="text" color="primary" fullWidth onClick={goToPending}>Pending Offers</Button>
            <Button variant="text" color="primary" fullWidth onClick={goToAccepted}>Accepted Offers</Button>
            <Button variant="text" color="primary" fullWidth onClick={goToComplaint}>Make a complaint</Button>
            <Button variant="text" color="primary" fullWidth onClick={goToPayment}>Add a credit card/photo</Button>
            </>)
          }
          {
            user.result.type === 'admin' && (<>
            <Button variant="text" color="primary" fullWidth onClick={goToCompanies}>Companies</Button>
            <Button variant="text" color="primary" fullWidth onClick={goToFreelancers}>Freelancers</Button>
            <Button variant="text" color="primary" fullWidth onClick={goToComplaints}>Complaints</Button>
            </>)
          }
          {
            user.result.type === 'company' && (<>
            <Button variant="text" color="primary" fullWidth onClick={goToFreelancers}>Freelancers</Button>
            <Button variant="text" color="primary" fullWidth onClick={goToAssignTasks}>Assign tasks</Button>
            <Button variant="text" color="primary" fullWidth onClick={goToComplaint}>Make a complaint</Button>
            </>)
          }

        <Button variant="text" color="primary" fullWidth onClick={logout}>Logout</Button>
        </li>
        
     </ul>
    </div>
   
  );
}