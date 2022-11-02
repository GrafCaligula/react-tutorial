import logo from "./react.png"

export default function Navbar(){
  return (
   <nav className="navbar">
    <div className="logo-wrapper">
      <img className="logo" src={logo} alt="React-Logo"></img>
      <h3>ReactFacts</h3>
    </div>
    <h4 className="extra-title">React Course - Project 1</h4>
   </nav>
  )
}