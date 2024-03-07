import React, { useContext, useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import ContenedorYerbas from "../ContenedorBuscarYerbas/TablaYerbas";
import Header from "../Header";
import Footer from '../Footer';
import { YerbaContext, PuntuacionContext } from '../Contextos/YerbaContext';
import BotonesPuntuacion from './Puntuacion';
import '../ContenedorEstilos/ArmarioYerbas.css';
import ButtonEliminarYerba from './EliminarYerba';

function ArmarioYerbas() {
  const [tablaYerbas, setTablaYerbas] = useState(ContenedorYerbas);
  const [index, setIndex] = useState(null);
  const location = useLocation();
  const datos = location.state;

  useEffect(() => {
    if (datos && datos.index !== undefined && datos.index > 0 && datos.index < tablaYerbas.length) {
      setIndex(datos.index -1);
    }
  }, [datos, tablaYerbas]);

  const [yerbas, setYerbas] = useContext(YerbaContext);
  const [puntuacionesYerbas, setPuntuacionesYerbas] = useContext(PuntuacionContext);

  useEffect(() => {
    if (index !== null) {
      const nuevaYerba = tablaYerbas[index];
      setYerbas((prevYerbas) => [...prevYerbas, nuevaYerba]);
      setPuntuacionesYerbas((prevPuntuaciones) => {
        const nuevasPuntuaciones = [...prevPuntuaciones];
        nuevasPuntuaciones[index] = datos.puntuacion || 0;
        return nuevasPuntuaciones;
      });
    }
  }, [index, datos, tablaYerbas]);

  const actualizarPuntuacion = (index, nuevaPuntuacion) => {
    setPuntuacionesYerbas((prevPuntuaciones) => {
      const nuevasPuntuaciones = [...prevPuntuaciones];
      nuevasPuntuaciones[index] = nuevaPuntuacion;
      return nuevasPuntuaciones;
    });
  };

  const eliminarYerba = (index) => {
    // Copia el array de yerbas y elimina la yerba en la posición index
    const nuevoArrayYerbas = [...yerbas];
    nuevoArrayYerbas.splice(index, 1);
  
    // Actualiza el estado de yerbas
    setYerbas(nuevoArrayYerbas);
  };
  const eliminarPuntuacion = (index) => {
    const nuevoArrayPuntuaciones = [...puntuacionesYerbas]
    nuevoArrayPuntuaciones.splice(index, 1);

    setPuntuacionesYerbas(nuevoArrayPuntuaciones)
  }

  const ContenedorYerba = () => {
    return yerbas.map((yerba, i) => (
      <div key={i}>
        <div className='Card'>
          <div className='Card-info'>
            <h3>{yerba.nombre}</h3>
            <span>{yerba.marca}</span>
            <img src={`../../public/imagenes/${yerba.imagen}`} alt={yerba.nombre} />
          </div>
          <div className='Card-puntuaciones'>
            <BotonesPuntuacion
              BotonValue={puntuacionesYerbas[i]}
              setBotonValue={(nuevaPuntuacion) => actualizarPuntuacion(i, nuevaPuntuacion)}
            />
          </div>
          <ButtonEliminarYerba 
          index={i} 
          yerbas={yerbas} 
          puntuaciones={puntuacionesYerbas} 
          eliminarYerba={() => eliminarYerba(i)}
          eliminarPuntuacion={() => eliminarPuntuacion(i)}
          />
        </div>
      </div>
    ));
  };

  

  return (
    <>
      <Header />
      <main>
        <article>
          <section className='ArticuloSobrePagina-section'>
            <h2 className='SubTitulo'>Armario</h2>
            <div className='Contenedor-Card'>
              <ContenedorYerba />
            </div>
          </section>
        </article>
      </main>
      <Footer />
    </>
  );
}

export default ArmarioYerbas;
