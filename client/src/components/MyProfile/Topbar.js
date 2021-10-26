import react, {useState, useEffect} from 'react'
import "./topbar.scss";
import {AiFillMail} from "react-icons/ai"
import {BsFillPersonFill} from "react-icons/bs"
import {useSelector} from 'react-redux'
import { getUsers } from "../../api";
export default function Topbar({ menuOpen, setMenuOpen }) {
//   useEffect(() => {
//     dispatch(getUsers());
// }, [dispatch]);
//   const users = useSelector((state) => state.users);
    const [user,setUser] =useState(JSON.parse(localStorage.getItem('profile')));
  
    return (
    <div className={"topbar " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">
            FreelanceApp
          </a>
          <div className="itemContainer">
            <BsFillPersonFill className="icon" />
            <span>{user.result.phone}</span>
          </div>
          <div className="itemContainer">
            <AiFillMail className="icon" />
            <span>{user.result.email}</span>
          </div>
        </div>
        <div className="right">
          <div className="hamburger" onClick={()=>setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  );
}
