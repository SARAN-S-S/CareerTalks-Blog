import "./header.css"

export default function Header() {
  return (
    <div className='header'>
      <div className="headerTitle">
        <span className="headerTitleSm"><i><strong>" Dream, transforms into thoughts. Thoughts, result into action. "</strong></i></span>
        <span className="headerTitleLg">Discuss</span>
      </div>
        <img className="headerImg"
        src="\header.jpg"
        alt=""
      />
    </div>
  )
}
