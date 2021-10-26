import "./intro.scss";
import react, {useState} from 'react'
//import { init } from "ityped";
import { useEffect, useRef } from "react";
import man from '../../img/mainPage/man.png'
import down from '../../img/mainPage/down.png'
import { getUsers } from "../../api";
import { useDispatch, useSelector } from 'react-redux';
export default function Intro() {
  const textRef = useRef();
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
  // useEffect(() => {
  //   init(textRef.current, {
  //     showCursor: true,
  //     backDelay: 1500,
  //     backSpeed:60,
  //     strings: ["Developer", "Designer", "Content Creator"],
  //   });
  // }, []);
 
  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imgContainer">
          <img src={user.result.photo} alt="" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hi There, I'm</h2>
          <h1>{user.result.name}</h1>
        </div>
        <a href="#portfolio">
          <img src={down} alt="" />
        </a>
      </div>
    </div>
  );
}