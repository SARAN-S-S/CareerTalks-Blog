import { Link } from "react-router-dom"
import "./sidebar.css"

export default function Sidebar() {
  return (
    <div className="sidebar">
        <div className="sidebarItem">
        <Link className="link" to = "/about" >
          <span className="sidebarTitle"><b><i>ABOUT DISCUSS</i></b></span>
        </Link>
            <img className="sidebarImg"
            src="\side.jpg"
            alt=""
            />
            <p>CareerTalk offers a comprehensive resource for freshers and juniors preparing for job interviews. Our platform provides detailed insights into interview processes, common questions, and real-world experiences from professionals. We also invite individuals to share their own interview experiences, contributing to a valuable knowledge base for others. Explore our discussions and expert advice to gain confidence and excel in your career journey. Join us in enhancing our collective understanding and preparation strategies.</p>
        </div>
    </div>
  )
}
