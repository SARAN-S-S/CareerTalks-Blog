import { Link, useLocation } from "react-router-dom"
import React, {  useState, useEffect, useContext } from "react";
import "./singlePost.css"
import axios from "axios"
import { Context } from "../../context/Context";

export default function SinglePost() {
  const locatiion = useLocation()
  const path = (locatiion.pathname.split("/")[2])
  const [post, setPost] = useState({})
  const PF = "http://localhost:7733/images/";
  const { user } = useContext(Context);
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [updateMode, setUpdateMode] = useState(false);



  useEffect(() => {
    const getPost = async ()=> {
      const res = await axios.get("/api/posts/"+path)
      setPost(res.data);
      setTitle(res.data.title);
      setDesc(res.data.desc);
    };
    getPost();
  },[path]);

  const handleDelete = async() => {
    try {
      await axios.delete(`/api/posts/${post._id}`, 
        {data: {username: user.username}} );
      window.location.replace("/")
    }
    catch(err)  {

    }
  };

  const handleUpdate = async () => {
    try {
      await axios.put(`/api/posts/${post._id}`, 
        {
          username: user.username,
          title, 
          desc
        }
       );
      //window.location.reload()
      setUpdateMode(false)
    }
    catch(err)  {

    }
  }
  

  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        {post.photo && 
          <img className="singlePostImg"
          src={PF + post.photo}
          alt=""  />
        }
      
        { 
          //update and post checking by using ternary operator
          updateMode ? ( <input type="text" value={title} 
          className="singlePostTitleInput"
          autoFocus
          onChange={(e) => setTitle(e.target.value)}
          />  ) : (

        <h1 className="siglePostTitle">
          {title} 

          { post.username === user?.username && (
          <div className="singlePostEdit">
            <i className="singlePostIcon fa-regular fa-pen-to-square" onClick={() => setUpdateMode(true)}></i>
            <i className="singlePostIcon fa-regular fa-trash-can" onClick={handleDelete}></i>
          </div>
          )}
        </h1>

        )
      }

        <div className="singlePostInfo">
          <span className="singlePostAuthor">Author: 
            <Link to={`/?user=${post.username}`} className="link" >
              <b>{post.username}</b>
            </Link>
          </span>
          
          <span className="singlePostDate">
            {new Date(post.createdAt).toDateString()}
          </span>
        </div>

        {updateMode &&  (
          <button className="singlePostButton" onClick={handleUpdate}>Update</button>
        )
       }
        
        {updateMode ? (<textarea className="singlePostDescInput "
                        value={desc} onChange={(e) => setDesc(e.target.value)}/>) : (
        <p className="singlePostDesc">{desc} </p>

        )}

        
        
      </div>
    </div>
  )
}
