import { useContext, useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { YerbaContext, PuntuacionContext, OpinionesContext } from '../Contextos/YerbaContext';
import Header from "../Header";
import Footer from "../Footer";
import '../ContenedorEstilos/Perfil.css';
import BotonesPuntuacion from '../ContenedorManejoYerbas/Puntuacion';

function ButtonPerfil() {
  const [yerbas, setYerbas] = useContext(YerbaContext);
  const [puntuacionesYerbas, setPuntuacionesYerbas] = useContext(PuntuacionContext);
  const [opiniones, setOpiniones] = useState([]);
  const [cantidadCalificaciones, setCantidadCalificaciones] = useState(0);
  const [cantidadOpiniones, setCantidadOpiniones] = useState(0);

  useEffect(() => {
    // Update cantidadCalificaciones after the component has mounted
    setCantidadCalificaciones(puntuacionesYerbas.length);
    setCantidadOpiniones(opiniones.length);
  }, [puntuacionesYerbas, opiniones]);

  // Update opinions when OpinionesContext is available and is an array
  useEffect(() => {
    if (Array.isArray(OpinionesContext)) {
      setOpiniones(OpinionesContext);
    }
  }, [OpinionesContext]);

  const ContenedorYerba = () => {
    return yerbas.map((yerba, i) => (
      <div key={i}>
        <div className='Card2'>
          <div className='Card-info2'>
            <img src={`../../public/imagenes/${yerba.imagen}`} alt={yerba.nombre} />
            <div>
              <h3>{yerba.nombre}</h3>
              <span>{yerba.marca}</span>
            </div>
          </div>
          <div className='Card-puntuaciones2'>
            <BotonesPuntuacion
              BotonValue={puntuacionesYerbas[i]}
              setBotonValue={(nuevaPuntuacion) => actualizarPuntuacion(i, nuevaPuntuacion)}
            />
          </div>
        </div>
      </div>
    ));
  };

  return (
    <>
      <Header />
      <main>
        <article className='articuloPerfil'>
          <section className="SectionInfo">
            <div className='SectionInfo-ContenedorLogo'>
              <img src="https://unavatar.io/Faustino" alt="" />
              <Link className='SectionInfo-ContenedorLogo-Link' to='/components/ContenedorManejoYerbas/ArmarioYerbas'>
                Calificaciones: {cantidadCalificaciones}{' '}
              </Link>
              <Link className='SectionInfo-ContenedorLogo-Link' to='/components/ContenedorManejoYerbas/ArmarioYerbas'>
                Opiniones: {cantidadOpiniones}
              </Link>
            </div>
            <div className='SectionInfo-ContenedorNombre'>
              <h3>Faustino</h3>
            </div>
          </section>
          <section>
            <div className='Contenedor-Card2'>
              <ContenedorYerba />
            </div>
          </section>
        </article>
      </main>
      <Footer />
    </>
  );
}
export default ButtonPerfil;
