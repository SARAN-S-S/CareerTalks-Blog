import { useContext, useState } from "react"
import "./write.css"
import axios from "axios";
import { Context } from "../../context/Context";

export default function Write() {
  const [title,setTitle] = useState("")
  const [desc,setDesc] = useState("")
  const [file,setFile] = useState(null)
  const { user } = useContext(Context);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newPost = {
      username: user.username,
      title,
      desc,
    };
    if(file) {
      const data = new FormData();
      const filename = Date.now() + file.name;
      data.append("name", filename);
      data.append("file", file);
      newPost.photo = filename;
      
      try {
        await axios.post("/api/upload", data)
      } catch(err) {
        console.error("Error uploading file:", err);
      }
    }
    try {
      const res = await axios.post("/api/posts", newPost);
      window.location.replace("/post/" + res.data._id)
    } catch(err) {
      console.error("Error creating post:", err);
    }
  }
  

  return (
    <div className="write">
      {file && (
      <img className="writeImg" 
        src={URL.createObjectURL(file)}
        alt="" />

      )}

      <form className="writeForm" onSubmit={handleSubmit}>

        <div className="writeFormGroup">
            <label htmlFor="fileInput">
                <i className="writeIcon fa-solid fa-plus"></i>
            </label>
            <input type="file" id="fileInput" className="writeFile" onChange={(e) => setFile(e.target.files[0])}/>
            <input type="text" placeholder="Company Name | Role" className="writeInput" autoFocus={true} onChange={e=>setTitle(e.target.value)}/>
        </div>

        <div className="writeFormGroup">
            <textarea placeholder="Share your Interview Experience..." type="text" className="writeInput writeText" onChange={e=>setDesc(e.target.value)} ></textarea>
        </div>

        <button className="writeSubmit" type="submit">Post</button>

      </form>

    </div>
  )
}
