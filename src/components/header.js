import { Link } from "gatsby"

import React from "react"

import Logo from "../images/logonew.png"

const Header = () => (
  <header>
       <img  class="logo" src={Logo} alt="Logo" />

            <div class="table">
            <ul id="menu">
            <li><Link  exact to="/">HOME</Link></li>
            <li><Link to="/ourteam">OUR TEAM</Link></li>
            <li><Link to="/programs/">PROGRAMS</Link></li>
            <li><Link to="/resources/">RESOURCES</Link></li>
            <li><Link to="/about/">ABOUT</Link></li>
            <li><Link to="/contactus/">CONTACT US</Link></li>
            </ul>
            </div>
            <hr></hr>
  </header>
)

export default Header
