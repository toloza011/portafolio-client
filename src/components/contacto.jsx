import React from 'react';
import axios from 'axios';
import { useState } from 'react';
import emailjs from 'emailjs-com';

const Contacto = () =>{

    const [nombre, setNombre] = useState("");
    const [email, setEmail] = useState("");
    const [telefono, setTelefono] = useState("");
    const [asunto, setAsunto] = useState("");
    const [mensaje, setMensaje] = useState("");
    const [alerta, setalerta] = useState("");


    const limpiarCampos = () => {
        setNombre("")
        setEmail("") 
        setTelefono("")
        setAsunto("")
        setMensaje("")
    }

    const handleNombre = (e) =>{
        setNombre(e.target.value) 
    }
    const handleEmail = (e) =>{
        setEmail(e.target.value)
    }
    const handleTelefono = (e) =>{
        setTelefono(e.target.value)
    }
    const handleAsunto = (e) =>{
        setAsunto(e.target.value)
    }
    const handleMensaje = (e) =>{
        setMensaje(e.target.value)
    }
    

    const enviar = (e) =>{
        e.preventDefault();
        const data = {
            nombre: nombre,
            email: email,
            telefono: telefono,
            asunto: asunto,
            mensaje: mensaje
        }
        console.log(data);
        if(data.nombre != '' && data.email != '' && data.telefono != '' && data.asunto != '' && data.mensaje != ''){
            emailjs.send('default_service','template_v510gau',data,'user_lsZWJ6AgA7RFLlXRmtgAD')
            .then((response)=>{
                //console.log(response.data.mensaje);
                console.log(response);
                setalerta("Mensaje enviado exitosamente!")
                limpiarCampos();
                setTimeout(()=>{
                    setalerta("")
                },4000)
            })
            .catch((error)=>{
                console.log(error)
                setalerta("Error al enviar el mensaje, intentelo de nuevo mas tarde.")
                limpiarCampos();
                setTimeout(()=>{
                    setalerta("")
                },4000)
            })
        }else{
            setalerta("Los campos no pueden estar vacios!");
            
            setTimeout(()=>{
                setalerta("")
            },4000)
        }
       

        /* axios.post('/api/enviarEmail',data)
        .then((response)=>{
            console.log(response.data.mensaje);
            setalerta(response.data.mensaje)
            limpiarCampos();
            setTimeout(()=>{
                setalerta("")
            },4000)
            
        })
        .catch((error)=>{
            console.log(error)
            setalerta("Error al enviar el mensaje, intentelo de nuevo mas tarde.")
            limpiarCampos();
            setTimeout(()=>{
                setalerta("")
            },4000)
        })
        */
       
    }



    
    return(
        <div className="contacto">
           <h1 className="logo">Contactame</h1>
           <div className="contact-wrapper">
               <div className="contact-form">
                 <h3>Contactame</h3>
                 <form onSubmit={(e)=> enviar(e)}>
                     <p>
                         <label htmlFor="nombre">Nombre Completo</label>
                         <input type="text" value={nombre} onChange={(e)=>handleNombre(e)} name="nombre"/>
                     </p>
                     <p>
                         <label htmlFor="email">Email</label>
                         <input type="email" value={email} onChange={(e)=>handleEmail(e)} name="email" id="email"/>
                     </p>
                     <p>
                         <label htmlFor="telefono">telefono: </label>
                         <input type="tel" onChange={(e)=>handleTelefono(e)} value={telefono} name="telefono" id="" />
                     </p>
                     <p>
                         <label htmlFor="Asunto">Asunto</label>
                         <input type="text" onChange={(e)=>handleAsunto(e)} value={asunto} name="asunto"/>
                     </p>
                     <p className="block">
                         <label htmlFor="mensaje">Mensaje</label>
                         <textarea name="mensaje" onChange={(e)=>handleMensaje(e)} value={mensaje} id="mensaje" cols="30" rows="4"></textarea>
                     </p>
                     {
                         alerta.length > 0 ? 
                         <div className="block">
                         <div className="alerta">
                             {alerta}
                         </div>
                        </div> : 
                        ''
                     }
                    
                     <p className="block">
                         <button type="submit">Enviar</button>
                         
                     </p>
                 </form>
               </div>
               <div className="contact-info">
                    <h4>Mas informacion</h4>
                    <ul>
                        <li>
                            <i className="fas fa-map-marker-alt"></i>
                            Arauco, Chile
                        </li>
                        <li>
                            <i className="fas fa-phone">
                                
                            </i>
                            (+56)9 64617091
                        </li>
                        <li>
                            <i className="far fa-envelope"> estebantoloza1998@gmail.com</i>
                        </li>
                    </ul>
                    <p>
                        Hola! Muchas gracias por visitar mi portafolio. Si te intereso mi perfil o necesitas alguna asesoria, no dudes en contactarme!
                    </p>
                    <p>Tolowebs.com</p>
               </div>
               
           </div>
        </div> 
    )
}

export default Contacto;