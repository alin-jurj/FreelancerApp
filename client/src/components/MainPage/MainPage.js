import {React,useEffect} from 'react'
import Topbar from '../MyProfile/Topbar';
import Menu from './Menu';
import "../MyProfile/MyProfile.scss"
import { useState } from "react";
import bg from '../../img/bg.svg';
import styled from 'styled-components';
import GlobalStyle from '../LandingPage/GlobalStyle';
import SearchBar from './SearchBar';
import {Divider} from '@material-ui/core';
import Tasks from './Tasks';
import TasksCompany from './TasksCompany';
import { getJoboffers } from '../../actions/joboffers';
import { useDispatch } from 'react-redux';
// import CategoriesCarousel from '../LandingPage/CategoriesCarousel';

export default function MainPage() {
    const [menuOpen,setMenuOpen] = useState(false)
    const user = JSON.parse(localStorage.getItem('profile'));
    const dispatch = useDispatch();
        useEffect(() => {
          dispatch(getJoboffers());
     }, [dispatch]);
    
     if(user.result.type=="freelancer"){
    return(
        
        <HeaderStyle>
            <GlobalStyle />
            <div className="app">
                <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
                <SearchBar placeholder="Enter the name of a company..." type={user.result.type} />
                <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
                <Divider variant="middle"/>
                <Tasks/>
            </div>
             
        </HeaderStyle>
    )}
    else if(user.result.type=="company")
    {
        return(
            <HeaderStyle>
            <GlobalStyle />
            <div className="app">
                <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
                <SearchBar placeholder="Enter the name of a freelancer..." type={user.result.type}/>
                <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
                <Divider variant="middle"/>
                <TasksCompany/>
            </div>
             
        </HeaderStyle>
        
        )}
        else
        {
            return(
                <HeaderStyle>
                <GlobalStyle />
                <div className="app">
                    <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
                    <SearchBar placeholder="Enter the name of a freelancer..." type={user.result.type}/>
                    <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
                    <Divider variant="middle"/>
                    {/* <TasksCompany/> */}
                </div>
                 
            </HeaderStyle>
            
            )}
        
    
}
const HeaderStyle = styled.header`
    height: 100vh;
    background-image: url(${bg});
    background-repeat: no-repeat;
    background-size: cover;
    width: 100%;
    background-position-y: 100%;
    .header-content{
        padding: 0 10rem;
    }
`;

