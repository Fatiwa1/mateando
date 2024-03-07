function ButtonEliminarYerba({ eliminarPuntuacion, eliminarYerba }) {
    const handleEliminarClick = () => {
      eliminarYerba();
      eliminarPuntuacion();
    };
  
    return (
      <>
        <button className="buttonEliminar" onClick={handleEliminarClick}>Eliminar</button>
      </>
    );
  }

export default ButtonEliminarYerba;