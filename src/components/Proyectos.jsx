
import React,{useState,useEffect} from "react";
import portafolio from "../assets/img/Portafoliov2.png";
import tolowebs from "../assets/img/Tolowebs.png"
import teloregalo from "../assets/img/teloregalo.png"
import cmsTienda from "../assets/img/CMSTIENDA.png"
import DinamiteStore from "../assets/img/dinamitastore.png"
import notFound from "../assets/img/img-404.png";
import {Link} from "react-router-dom"

const Proyecto = () => {
  const proyectos = [
    {
      nombre: "Portafolio",
      descripcion: "Sitio web para regalar articulos que lo necesiten para algun proyecto.",
      img: portafolio,
      lenguaje: "ReactJs",
      github: "https://github.com/toloza011/portafolio-client",
      web: "http://tolowebs.herokuapp.com/"
    },
    {
      nombre: "Tolowebs",
      descripcion: "Mi sitio web para ofrecer mis servicios de desarrollador web.",
      img: tolowebs,
      lenguaje: "laravel",
      github: "https://github.com/toloza011/tolowebs"
    },
    {
      nombre: "Mi tienda",
      descripcion: "Administrador CMS para tiendas Online",
      img: cmsTienda,
      lenguaje: "laravel",
      github: "https://github.com/toloza011/CmsTienda"
    },
    {
      nombre : "Dinamita Store",
      descripcion: "Tienda Online de codigos de videojuegos digitales",
      img: DinamiteStore,
      lenguaje: "laravel",
      github: "https://github.com/toloza011/Dinamita-Store"
    }
    
  ];

  const [busqueda, setbusqueda] = useState("");
  const [listaproyectos, setproyectos] = useState(proyectos);

  
  useEffect(() => {
     
  });

  

 const buscar = (search) =>{
    setbusqueda(search)
    if(search.length > 0){
      var filtrados = listaproyectos.filter(filtrados => filtrados.nombre.toLowerCase().includes(busqueda));
      if(filtrados.length == 0){
        var filtrados = listaproyectos.filter(filtrados => filtrados.nombre.includes(busqueda));
        if(filtrados.length == 0){
          var filtrados = listaproyectos.filter(filtrados => filtrados.nombre.toUpperCase().includes(busqueda));
        }
      }
      filtrar(filtrados);
   }else{
      filtrar(proyectos);
   }
 }
 const filtrar = (filtrados) =>{
   setproyectos(filtrados);
   console.log(filtrados);
 }
 const filtrarCategoria = (lenguaje) => {
    setproyectos(proyectos);
    var filtrados = proyectos.filter(filtrados => filtrados.lenguaje.toLowerCase() == lenguaje);
    if(filtrados.length > 0){
      console.log(filtrados);
      setproyectos(filtrados);
    }else{
      if(lenguaje == "todos"){
        setproyectos(proyectos);
      }else{
        console.log(proyectos);
        setproyectos([]);
      }
      
    }
 }


  return (
    <div className="proyectos_main">
      <div className="proyectos__main_header">
        <div className="header_title">
          <h1>Conoce mis proyectos!</h1>
        </div>
        <div className="header_subtitle">
          <h4>
            Estos son mis mejores proyectos y de los que mas me enorgullezco.
          </h4>
        </div>
      </div>
      <div className="proyectos__buscador">
       <input
          type="text"
          placeholder="Busca algunos de mis proyectos..."
          className="buscador"
          onChange={(e) => buscar(e.target.value)}
        />
        <button type="submit">
          <i className="fa fa-search"></i>
        </button>
      </div>
      {busqueda.length>0 ? 
       <h1 className="query">Tu busqueda: {busqueda}</h1>
       : ''
       }
     
       <div className="filtros">
         <button type="button" className="active" onClick={(e) => filtrarCategoria("todos")} >Todos</button>
         <button type="button" className="active" onClick={(e) => filtrarCategoria("laravel")} >Laravel</button>
         <button type="button" className="active" onClick={(e) => filtrarCategoria("reactjs")}>ReactJs</button>
         <button type="button" className="active" onClick={(e) => filtrarCategoria("NodeJs")}>NodeJs</button>
       </div>

      <div className="list-proyectos">
        <div className="container-proyectos">
          {
          listaproyectos.length > 0 ? 
          listaproyectos.map((proyecto, index) => {
            return (
              <div key={index} className="card" id={proyecto.lenguaje}>
                <figure>
                  <img src={proyecto.img} alt="Te lo regalo" />
                </figure>
                <div className="contenido">
                  <h3>{proyecto.nombre}</h3>
                  <p>{proyecto.descripcion}</p>
                  {
                    proyecto.web != null ? 
                   <a href="" >
                  <i className="far fa-eye">
                  </i>
                  Visitar Sitio
                  </a> 
                  : ''
                  }
                  <a href={proyecto.github} target="__blank">
                  <i className="fab fa-github"></i>
                  Repositorio
                  </a>
                </div>
              </div>
            );
          }) : 
           <div className="not-found">
             <h1>No hay resultados para tu busqueda</h1>
             <img src={notFound} alt="Sin resultados"/>
           </div>
          }
        </div>
      </div>
    </div>
  );
};

export default Proyecto;
