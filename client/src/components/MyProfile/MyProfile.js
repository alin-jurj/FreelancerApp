import React, { useState , useEffect } from "react";
import Topbar from "./Topbar";
import Intro from "./Intro"
import Portfolio from "./Portfolio"
import Testimonials from "./Testimonials"
import bg from '../../img/bg.svg';
import styled from 'styled-components';
import Contact from "./Contact"
import "./MyProfile.scss"
import { useDispatch } from 'react-redux';
import { getUserCreditCards } from "../../actions/CreditCard";
import Menu from "./Menu";
import { Cards } from './CardsList/Cards';
import Portofolio from "./Portfolio";


export default function MyProfile() {
    const [menuOpen,setMenuOpen] = useState(false);
    const dispatch = useDispatch();
    useEffect(() => {
      dispatch(getUserCreditCards());
  }, [dispatch]);

    return(
      
    <div className="app">
       <BodyStyle>
      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
       <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <div className="sections">
      <Intro/>
      
       <Portofolio/>
            <div className="works">
                <Cards/>
            </div>
        {/* <Contact/> */}
       </div>
       </BodyStyle>
       
       {/* <Testimonials/> */}
       {/* <Contact/>  */}
     
    </div>
        
    )
  
  }
  const BodyStyle = styled.header`
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