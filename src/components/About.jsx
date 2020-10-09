import React from 'react';
import Perfil from "../assets/img/perfil.jpg"

const About = () =>{
     
    return(
        <div className="about">
            <div className="about_main">
                 <div className="about_title">
                     <h1>Sobre Mí</h1>
                 </div>
                 <div className="about_content">
                     <div className="about__info">
                         <h2>Mi presentacion</h2>
                         <p>Mi nombre es Esteban Toloza Méndez, tengo 21 años y actualmente me encuentro cursando la carrera de Ingenieria de ejecucion en Computacion e Informatica en la Universidad del Bio-Bio. 
                           Vivo en la ciudad de Arauco(VIII Region) y arriendo en Concepcion. Mis Hobbies son la Fotografia, el futbol y la programacion. Mi objetivo a futuro es 
                           convertirme en Desarrollador Web Full Stack. 
                            </p>
                         <div className="carrera">
                             <div className="carrera_title">
                                 <h2>Mis Estudios</h2>
                             </div>
                             <div className="carrera_link">
                                 <a target="_blank" href="https://ubiobio.cl/admision/todas_las_carreras/21/Ingenieria_de_Ejecucion_en_Computacion_e_Informatica/">Ingenieria de ejecucion en Computacion e Informatica</a>
                             </div>
                         </div>
                         
                         <div className="lenguajes">
                             <div className="lenguajes-title">
                                 <h4>Mis Tecnologias preferidas</h4>
                             </div>
                             <div className="lenguajes-list">
                                 <ul>
                                     <li><i className="fab fa-html5"></i></li>
                                     <li><i className="fab fa-css3-alt"></i></li>
                                     <li><i className="fab fa-js"></i></li>
                                     <li><i className="fab fa-react"></i></li>
                                     <li><i className="fab fa-bootstrap"></i></li>
                                     <li><i className="fab fa-php"></i></li>
                                     <li><i className="fab fa-laravel"></i></li>
                                     <li><i className="fab fa-node-js"></i></li>
                                     <li><i className="fab fa-angular"></i></li>
                                 </ul>
                             </div>
                         </div>
                     </div>
                     <div className="about__foto">
                         <img src={Perfil} alt="Foto de perfil"/>
                     </div>
                 </div>
            </div>
        </div>
    )
}

export default About;