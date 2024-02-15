import React, { useState } from "react";
import ButtonPublicar from "./PublicacionesUsuarios";
import '../ContenedorEstilos/Publicaciones.css'

export function ComentacionesUsuarios({nombreUsuarioComent, textoComent}) {
    return(
      <div className="Contenedor-Comentario">
        <div>
            <img
              className="SectionPost-Logo"
              src={`https://unavatar.io/${nombreUsuarioComent}`}
              alt={`avatar de ${nombreUsuarioComent}`}
            />
            <span className="SectionPost-Nombre">{nombreUsuarioComent}</span>
          </div>
          <div className="SectionPost-ContContenido">
            <p className="SectionPost-Texto">{textoComent}</p>
          </div>
      </div>
    )
  }
export function ComentarInfo({onPublicar}) {
    const [textoComent, setTextoComent] = useState('');
    const [nombreUsuarioComent, setNombreUsuarioComent] = useState('');
  
    const handleSubmit = (e) => {
      e.preventDefault();
      // Llamar a la función proporcionada por el padre con los valores actuales
      onPublicar({ textoComent, nombreUsuarioComent });
      // Limpiar los campos después de enviar el formulario
      setTextoComent('');
      setNombreUsuarioComent('');  
    };
    return(
        <form className="Contenedor-hacerComentario" onSubmit={handleSubmit}>
          <input type="text" placeholder="Escribe tu nombre..." required value={nombreUsuarioComent} onChange={(e) => setNombreUsuarioComent(e.target.value)}/>
          <textarea cols="30" rows="2" value={textoComent} onChange={(e) => setTextoComent(e.target.value)} placeholder="Escribe el texto..."></textarea>
          <button type="submit">Enviar</button>
        </form>
    )
  }

export function ButtonComentar() {
  const [showInfo, setShowInfo] = useState(false);
  const [Comentaciones, setComentaciones] = useState([]);


  const handlePublicar = (datos) => {
    // Agregar la nueva publicación al array de publicaciones
    const nuevoComentario = { id: Comentaciones.length + 1, ...datos };
    setComentaciones([nuevoComentario, ...Comentaciones]);
    // Mostrar el componente MostrarPublicacion
    setShowInfo(false);
  };

  const handleClick = () => {
    // Cambiar el estado para mostrar u ocultar InfoPublicar
    setShowInfo(!showInfo);
  };

  return (
    <>
      <button className="Button-CrearComentario" onClick={handleClick}
      style={{
        fontSize:'10px',
        margin: '0px'
      }}
      >Comentar</button>
      {showInfo && (
        <div>
          <ComentarInfo onPublicar={handlePublicar} />
        </div>
      )}
      <section>
      {Comentaciones.map((comentario, index) => (
  <ComentacionesUsuarios key={index} {...comentario} />
))}
      </section>
    </>
  );
}

export default ButtonComentar;
