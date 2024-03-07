import React, { useState, useContext, useEffect } from "react";
import '../ContenedorEstilos/ResenaUsuarios.css'
import { OpinionesContext } from '../Contextos/YerbaContext'

export function PublicacionesUsuarios({ nombreUsuario, texto }) {
  return (
    <>
      <section className="SectionPost">
        <div>
          <img
            className="SectionPost-Logo"
            src={`https://unavatar.io/${nombreUsuario}`}
            alt={`avatar de ${nombreUsuario}`}
          />
          <span className="SectionPost-Nombre">{nombreUsuario}</span>
        </div>
        <div className="SectionPost-ContContenido">
          <p className="SectionPost-Texto">{texto}</p>
        </div>
      </section>
    </>
  );
}


export function PublicacionesInfo({ onPublicar }) {
  const [texto, setTexto] = useState('');
  const [nombreUsuario, setNombreUsuario] = useState('');

  const [opiniones, setOpiniones] = useState(OpinionesContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Llamar a la función proporcionada por el padre con los valores actuales
    onPublicar({  texto, nombreUsuario });
    // Limpiar los campos después de enviar el formulario
    setTexto('');
    setNombreUsuario('');
  };
  return(
    <>
    <form className="InfoPublicacion" onSubmit={handleSubmit}>
      <input type="text" placeholder="Escribe tu nombre..." required value={nombreUsuario} onChange={(e) => setNombreUsuario(e.target.value)}/>
      <textarea cols="30" rows="5" value={texto} onChange={(e) => setTexto(e.target.value)} placeholder="Escribe el texto..."></textarea>
      <button type="submit">Enviar</button>
    </form>
    
    </>
    
  )
}
export function ButtonPublicar() {
  const [showInfo, setShowInfo] = useState(false);
  const [opiniones, setOpiniones] = useState([]);
  const [nombreUsuario, setNombreUsuario] = useState('');

  useEffect(() => {
    // Check if OpinionesContext is an array before updating the state
    if (Array.isArray(OpinionesContext)) {
      setOpiniones(OpinionesContext);
    }
  }, [OpinionesContext]);

  const handlePublicar = (datos) => {
    // Agregar la nueva publicación al array de publicaciones
    setOpiniones([datos, ...opiniones]);
    // Actualizar el estado de nombreUsuario
    setNombreUsuario(datos.nombreUsuario);
    // Mostrar el componente MostrarPublicacion
    setShowInfo(false);
    console.log(datos);
  };

  const handleClick = () => {
    // Cambiar el estado para mostrar u ocultar InfoPublicar
    setShowInfo(!showInfo);
  };

  return (
    <>
      <div className="Contenedor-ButtonPublicar">
        <button className="ButtonPublicar" onClick={handleClick}>
          Comentar
        </button>
      </div>
      {showInfo && (
        <div>
          <PublicacionesInfo onPublicar={handlePublicar} nombreUsuario={nombreUsuario} />
        </div>
      )}
      <section>
        {opiniones.map((opinion, index) => (
          <PublicacionesUsuarios key={index} {...opinion} nombreUsuario={nombreUsuario} />
        ))}
      </section>
    </>
  );
}

export default ButtonPublicar;
