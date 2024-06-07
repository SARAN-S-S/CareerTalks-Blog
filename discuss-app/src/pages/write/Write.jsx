import "./write.css"

export default function Write() {
  return (
    <div className="write">
      <img className="writeImg" 
        src="/write.jpg" 
        alt="" />

      <form className="writeForm">

        <div className="writeFormGroup">
            <label htmlFor="fileInput">
                <i className="writeIcon fa-solid fa-plus"></i>
            </label>
            <input type="file" id="fileInput" className="writeFile" />
            <input type="text" placeholder="Company Name | Role" className="writeInput" autoFocus={true}/>
        </div>

        <div className="writeFormGroup">
            <textarea placeholder="Share your Interview Experience..." type="text" className="writeInput writeText"></textarea>
        </div>

        <button className="writeSubmit">Share</button>

      </form>

    </div>
  )
}
