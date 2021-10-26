import "./intro.scss";
//import { init } from "ityped";
import { useEffect, useRef } from "react";
import man from '../../img/mainPage/man.png'
import down from '../../img/mainPage/down.png'
import { getUsers } from "../../api";
import { useDispatch, useSelector } from 'react-redux';
export default function Intro() {
  const textRef = useRef();
  const user= useSelector((state) => state.users);
  // useEffect(() => {
  //   init(textRef.current, {
  //     showCursor: true,
  //     backDelay: 1500,
  //     backSpeed:60,
  //     strings: ["Developer", "Designer", "Content Creator"],
  //   });
  // }, []);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUsers());
}, [dispatch]);
  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imgContainer">
          <img src={man} alt="" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hi There, I'm</h2>
          <h1>{user.name}</h1>
          <h3>
            Freelance <span ref={textRef}></span>
          </h3>
        </div>
        <a href="#portfolio">
          <img src={down} alt="" />
        </a>
      </div>
    </div>
  );
}
