import React from 'react';
import Logo from '../assets/img/logo_portada.svg'
import {Link} from 'react-router-dom'
const Portada = () =>{
    return(
        <div className="portada_main">
           <div className="portada_text">
              <div className="portada_title">
                  <h1>Bienvenido a mi portafolio</h1>
              </div>
              <div className="portada_descripcion">
                  <h4>Mi nombre es Esteban Toloza y soy desarrollador web!</h4>
              </div>
              <Link to="/contacto" className="btn-contact">Contactame</Link>
           </div>
           <div className="portada_img">
              <img src={Logo} alt="Logo"/>
           </div>
        </div>
    )
}

export default Portada;