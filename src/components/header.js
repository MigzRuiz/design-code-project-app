import React from 'react'
import { Link } from 'gatsby'
import "./Header.css";

const Header = ({ siteTitle }) => (
  <div className="Header">
    <div className="HeaderGroup">
      <Link to="/"><img src={require("../images/logo-designcode.svg")} width="30"></img></Link>
      <Link to="/courses">Course</Link>
      <Link to="/downloads">Downloads</Link>
      <Link to="/workshops">Workshops</Link>
      <Link to="/buy"><button>Buy</button></Link>
    </div> 
  </div>
)

export default Header
