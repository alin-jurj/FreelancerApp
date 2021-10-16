import React from 'react'
import Topbar from "./Topbar";
import Intro from "./Intro"
import Portfolio from "./Portfolio"
import Works from "./Works"
import Testimonials from "./Testimonials"
import Contact from "./Contact"
import "./MyProfile.scss"
import { useState } from "react";
import Menu from "./Menu";

export default function MyProfile() {
    const [menuOpen,setMenuOpen] = useState(false)
    return(
        <div className="app">
       
     <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
     <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
     <div className="sections">
       <Intro/>
       <Portfolio/>
       <Works/>
       <Testimonials/>
       <Contact/>
     </div>
    </div>
        
    )
  
  }