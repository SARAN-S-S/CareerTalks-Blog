import "./settings.css"
import Sidebar from "../../components/sidebar/Sidebar"

export default function Settings() {
  return (
    <div className="settings">

        <div className="settingsWrapper">

            <div className="settingsTitle">
                <span className="settingsUpdateTitle">Update Your Account</span>
                <span className="settingsDeleteTitle">Delete Account</span>
            </div>

            <form className="settingsForm">
                <label>Profile Picture</label>
                <div className="settingsPP">
                    <img className="settingsImg"
                    src="/profile.jpg" alt="" />
                    <label htmlFor="fileInput">
                    <i className="settingsPPIcon fa-regular fa-circle-user"></i> 
                    </label>
                    <input type="file" className="fileInput" id="fileInput"/>
                </div>
                
                <label>Username</label>
                <input type="text" placeholder="Saran" />
                <label>Email</label>
                <input type="email" placeholder="Saran.ec21@bitsathy.ac.in" />
                <label>Password</label>
                <input type="password" placeholder="***" />
                <button className="settingsSubmit"><strong>Update</strong></button>
            </form>

        </div>
        <Sidebar/>
    </div>
  )
}
