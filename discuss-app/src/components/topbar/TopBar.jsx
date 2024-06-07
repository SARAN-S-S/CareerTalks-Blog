import { Link } from "react-router-dom";
import "./topbar.css"
import { useContext } from "react";
import { Context } from "../../context/Context";

export default function TopBar() {
  const { user, dispatch } = useContext(Context);

  return (
    <div className="top">
      <div className="topLeft">
        <i className="topIcon fa-brands fa-linkedin"></i>
        <i className="topIcon fa-brands fa-square-instagram"></i>
        <i className="topIcon fa-brands fa-square-whatsapp"></i>
      </div>
      <div className="topCorner">
        <ul className="topList">
            <li className="topListItem">
              <Link className="link" to = "/" >HOME</Link>
            </li>
            <li className="topListItem">
              <Link className="link" to = "/about" >ABOUT</Link>
            </li>
            <li className="topListItem">
              <Link className="link" to = "/contact" >CONTACT</Link>
            </li>
            <li className="topListItem">
              <Link className="link" to = "/write" >WRITE</Link>
            </li>
            <li className="topListItem">
              {user && "LOGOUT"}
            </li>  
        </ul>
      </div>
      <div className="topRight">
        {
          user ? (
            <img className="topImg"
            src="\pro.webp"  alt="" />
          ) :  (
            <ul className="topList">
              <li className="topListItem">
                <Link className="link" to = "/login" >LOGIN</Link>
              </li>
              <li className="topListItem">
                <Link className="link" to = "/register" >REGISTER</Link>
              </li>
                
            </ul>
          )

        }
        
        
        <i className ="topSearchIcon fa-solid fa-magnifying-glass"></i>
      </div>

    </div>
  )
}
