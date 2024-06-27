import { Link } from "react-router-dom"
import "./sidebar.css"

export default function Sidebar() {
  return (
    <div className="sidebar">
        <div className="sidebarItem">
        <Link className="link" to = "/about" >
          <span className="sidebarTitle"><bold><i>ABOUT DISCUSS</i></bold></span>
        </Link>
            <img className="sidebarImg"
            src="\side.jpg"
            alt=""
            />
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit nisi quibusdam, omnis reiciendis recusandae in corrupti.</p>
        </div>
    </div>
  )
}
