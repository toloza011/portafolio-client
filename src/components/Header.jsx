import React from "react";
import { BrowserRouter as Router,NavLink, Switch, Route, Link } from "react-router-dom";



const active = (value) => {
  var navbar = document.getElementById("check").checked;
  if(navbar){
    console.log(navbar)
    console.log("Estas en responsivo!");
    value.classList.add('active')

  }else{
    console.log("Estas en escritorio!");
  }
  
  if(value.className === "header_li_a active"){
    document.getElementById("check").checked = false;
  }
}

const Header = () => {


  return (
    <div className="header">
      <header className="header_main">
          <nav className="header_nav">
            <div className="header_logo">
              <h1>ETM</h1>
            </div>
            <input type="checkbox" name="check" id="check"/>
            <label htmlFor="check" className="checkbtn">
              <i className="fas fa-bars"></i>
            </label>
            <ul className="header_ul">
              <li className="header_li">
                <Link to="/home" onClick={(e)=>active(e.target)} className="header_li_a">Home</Link>
              </li>
              <li className="header_li">
                <Link to="/proyectos" onClick={(e)=>active(e.target)} className="header_li_a">Proyectos</Link>
              </li>
              <li className="header_li">
                <Link to="/about" onClick={(e)=>active(e.target)} className="header_li_a">Sobre Mí</Link>
              </li>
              <li className="header_li">
                <Link to="/contacto" onClick={(e)=>active(e.target)} className="header_li_a">Contacto</Link>
              </li>
            </ul>
            <div className="social">
              <a href="https://www.facebook.com/esteban.toloza.5/" target="_blank"   className="social_a">
                <div className="social_i">
                  <i className="fab fa-facebook"></i>
                </div>
              </a>
              <a href="https://twitter.com/tebi_mendez" target="_blank" className="social_a">
                <div className="social_i">
                  <i className="fab fa-twitter"></i>
                </div>
              </a>
              <a href="https://www.instagram.com/estebantolozx/" target="_blank"  className="social_a">
                <div className="social_i">
                  <i className="fab fa-instagram"></i>
                </div>
              </a>
            </div>
           
          </nav>
      </header>
    </div>
  );
};

export default Header;
