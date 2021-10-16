import "./menu.scss";
import MyProfile from "../MyProfile/MyProfile";
import HeaderContent from "../LandingPage/HeaderContent";
export default function Menu({ menuOpen, setMenuOpen }) {
  return (
    <div className={"menu "+(menuOpen && "active")}>
      <ul>
        <li onClick={()=>setMenuOpen(false)}>
          <a href="MyProfile">Your profile</a>
        </li>
        
     </ul>
    </div>
   
  );
}
