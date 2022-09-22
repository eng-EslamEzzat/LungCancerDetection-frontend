import "./navbar.css";
import logo from "../../assets/logo.png";
import { NavLink } from "react-router-dom";
import { useRef } from "react";

export default function NavBar() {
  
  const ulRef = useRef()

  const toggleNavBar = () => {
    ulRef.current.className = ulRef.current.className === ""? "active" : ""
  }

  const removeNavBar = () =>{
    ulRef.current.className = ""
  }

  return (
    <div className="nav-bar">
      <img src={logo} className="logo" alt="logo" />
      <button className="navbar-toggler" onClick={toggleNavBar}>
            <span className="navbar-toggler-icon">☰</span>
      </button>
      <ul ref={ulRef} onClick={removeNavBar}>
        <li>
          <NavLink to="home" className="navItem">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="detect" className="navItem">
            Detect
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" className="navItem">
            About Developer
          </NavLink>
        </li>
      </ul>
    </div>
  );
}
