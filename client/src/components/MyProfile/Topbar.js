import "./topbar.scss";
import {AiFillMail} from "react-icons/ai"
import {BsFillPersonFill} from "react-icons/bs"
export default function Topbar({ menuOpen, setMenuOpen }) {
  return (
    <div className={"topbar " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">
            FreelanceApp
          </a>
          <div className="itemContainer">
            <BsFillPersonFill className="icon" />
            <span>+44 924 12 74</span>
          </div>
          <div className="itemContainer">
            <AiFillMail className="icon" />
            <span>React_app@gmail.com</span>
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
