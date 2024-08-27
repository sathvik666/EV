import React,{useState} from 'react'
import './Navbar.css'
import logo from '../Components/Assets/Rhyno Logo .png'
import { Link } from 'react-router-dom'

const Navbar = () => {
  const[menu,setMenu]= useState("home")
  
  return (
    <div className="navbar" >

       <nav className="navbar navbar-dark  fixed-top"  id='navbar'>
    
       
  <div className="container-fluid">
    <a className="navbar-brand" >
      <img src={logo} alt="Logo" width="130" height="100" className="d-inline-block align-text-top" />
      <p id='logo'>RHYNO EV</p>
    </a>
  

    <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="offcanvas offcanvas-end text-bg-dark" tabindex="-1" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
      <div className="offcanvas-header">
        <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div className="offcanvas-body">
        <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#"onClick={()=>{setMenu("home")}}><Link id='link'  to='/'>Home</Link>{menu==="home"?<hr/>:<></>}</a>
          </li>
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#"onClick={()=>{setMenu("about")}}><Link id='link'to='/about'>About us</Link>{menu==="about"?<hr/>:<></>}</a>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false" id='link'>
              Products
            </a>
            <ul className="dropdown-menu dropdown-menu-dark">
              <li><a className="dropdown-item" href="#"onClick={()=>{setMenu("product1")}}><Link id='link' to='/product1'>SE03 Lite</Link>{menu==="product1"?<h/>:<></>}</a></li>
              <li><a className="dropdown-item" href="#"onClick={()=>{setMenu("product2")}}><Link id='link' to='/product2'>SE03</Link>
              {menu==="product2"?<h/>:<></>}</a></li>
              <li><a className="dropdown-item" href="#"onClick={()=>{setMenu("product3")}}><Link id='link' to='/product3'>SE03 Max</Link>{menu==="product3"?<h/>:<></>}</a></li>
              <li>
                <hr className="dropdown-divider"/>
              </li>
              <li><a className="dropdown-item" href="/"onClick={()=>{setMenu("compareall")}}><Link id='link' to='/compareall'>Compare all</Link>{menu==="compareall"?<hr/>:<></>}</a></li>
            </ul>
          </li>
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#"onClick={()=>{setMenu("contact")}}><Link id='link' to='/contact'>Contact us</Link>
            {menu==="Contact"?<hr/>:<></>}</a>
          </li><li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#"onClick={()=>{setMenu("prebook")}}><Link id='link'to='/prebook'>PreBook Now</Link>{menu==="prebook"?<hr/>:<></>}</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</nav>
    </div>

  );
    
}

export default Navbar
