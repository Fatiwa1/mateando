import React, { useState } from "react";
import '../Publicaciones.css'
import ButtonComentar from "./ComentacionesUsuarios";

export function PublicacionesUsuarios({ nombreUsuario, titulo, texto }) {
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
          <strong className="SectionPost-Titulo">{titulo}</strong>
          <p className="SectionPost-Texto">{texto}</p>
        </div>
        <ButtonComentar />
      </section>
    </>
  );
}


export function PublicacionesInfo({ onPublicar }) {
  const [titulo, setTitulo] = useState('');
  const [texto, setTexto] = useState('');
  const [nombreUsuario, setNombreUsuario] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Llamar a la función proporcionada por el padre con los valores actuales
    onPublicar({ titulo, texto, nombreUsuario });
    // Limpiar los campos después de enviar el formulario
    setTitulo('');
    setTexto('');
    setNombreUsuario('');
  };
  return(
    <>
    <form className="InfoPublicacion" onSubmit={handleSubmit}>
      <input type="text" placeholder="Escribe tu nombre..." required value={nombreUsuario} onChange={(e) => setNombreUsuario(e.target.value)}/>
      <input type="text" placeholder="Escribe el titulo..." required value={titulo} onChange={(e) => setTitulo(e.target.value)}/>
      <textarea cols="30" rows="5" value={texto} onChange={(e) => setTexto(e.target.value)} placeholder="Escribe el texto..."></textarea>
      <button type="submit">Enviar</button>
    </form>
    
    </>
    
  )
}
export function ButtonPublicar() {
  const [showInfo, setShowInfo] = useState(false);
  const [publicaciones, setPublicaciones] = useState([]);
  const [nombreUsuario, setNombreUsuario] = useState('');

  const handlePublicar = (datos) => {
    // Agregar la nueva publicación al array de publicaciones
    setPublicaciones([datos, ...publicaciones]);
    // Actualizar el estado de nombreUsuario
    setNombreUsuario(datos.nombreUsuario);
    // Mostrar el componente MostrarPublicacion
    setShowInfo(false);
    console.log(datos)
  };

  const handleClick = () => {
    // Cambiar el estado para mostrar u ocultar InfoPublicar
    setShowInfo(!showInfo);
  };
  return (
    <>
    <div className="Contenedor-ButtonPublicar">
    <button className="ButtonPublicar" onClick={handleClick}><img src="public/imagenes/signo-de-mas.png" alt="Mas" /></button>
    </div>
      {showInfo && (
        <div>
          <PublicacionesInfo onPublicar={handlePublicar} nombreUsuario={nombreUsuario} />
        </div>
      )}
      <section>
      {publicaciones.map((publicacion, index) => (
            <PublicacionesUsuarios key={index} {...publicacion} nombreUsuario={nombreUsuario} />
          ))}
      </section>
    </>
  );
}
export default ButtonPublicar;