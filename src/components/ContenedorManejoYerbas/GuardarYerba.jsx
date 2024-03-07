import { useNavigate } from "react-router-dom";

function ButtonGuardarYerba({ yerba, BotonValue }) {
  let navigate = useNavigate();

  const manejarClick = () => {
    let datos = { index: yerba.index, puntuacion: BotonValue };

    navigate("/components/ContenedorManejoYerbas/ArmarioYerbas", { state: datos });
  };

  return(
    <>
      <button onClick={manejarClick}>Agregar al armario</button>
    </>
  )
}

export default ButtonGuardarYerba;
