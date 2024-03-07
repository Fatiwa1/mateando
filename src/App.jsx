import './App.css'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import BuscadorYerbas from './components/ContenedorBuscarYerbas/BuscadorYerbas';
import InformacionYerba from './components/ContenedorManejoYerbas/InformacionYerba'
import Header from './components/Header';
import ArmarioYerbas from './components/ContenedorManejoYerbas/ArmarioYerbas';
import { YerbaProvider, PuntuacionProvider } from './components/Contextos/YerbaContext';
import InicioSesion from './components/ContenedorRegistro/InicioSesion';
import Registro from './components/ContenedorRegistro/Registro';
import LaYerbaMate from './components/LaYerbaMate'
import Footer from './components/Footer';
import CatalogoYerbas from './components/ContenedorBuscarYerbas/CatalogoYerbas';
import TablaYerbas from './components/ContenedorBuscarYerbas/TablaYerbas';
import ButtonPerfil from './components/ContenedorPerfil/Perfil';

function App() {
  return (
    <YerbaProvider>
      <PuntuacionProvider >
      <Router>
      <Routes>
        <Route exact path="/" element={
          <>
            <Header />
            <main>
              <article className='ArticuloSobrePagina'>
                <section className='ArticuloSobrePagina-section'>
                  <h2>¿Te gusta el mate?</h2>
                  <p>
                  Esta página está pensada para los apasionados del mate que quieran compartir y aprender sobre las yerbas mates. La idea es ir añadiendo funcionalidades según el público que se vaya captando. Escucharemos la opinión del público, así que no duden en enviar sus opiniones, errores e ideas.
                  </p>
                  <p>Podrás descubrir qué yerbas se adaptan mejor a tus gustos y necesidades. Además, podrás guardar tu opinión y puntaje de cada yerba que pruebes, para tener un registro personalizado y comparar tus preferencias con las de otros usuarios. También podrás ayudar a la gente a elegir sus yerbas, compartiendo tus experiencias y consejos.</p>
                </section>
              </article>
            </main>
            <Footer />  
          </>
        } />
        <Route path='/components/ContenedorManejoYerbas/InformacionYerba' element={<InformacionYerba />} />
        <Route path='/components/ContenedorBuscarYerbas/BuscadorYerbas' element={<BuscadorYerbas />}/>
        <Route path='/components/ContenedorManejoYerbas/ArmarioYerbas' element={<ArmarioYerbas />} />
        <Route path='/components/ContenedorRegistro/InicioSesion' element={<InicioSesion />} />
        <Route path='/components/ContenedorRegistro/Registro' element={<Registro />} />
        <Route path='/components/LaYerbaMate' element={<LaYerbaMate />} />
        <Route path='/components/ContenedorBuscarYerbas/CatalogoYerbas' element={<CatalogoYerbas />} />
        <Route path='/components/ContenedorPerfil/Perfil' element={<ButtonPerfil />} />
      </Routes> 
    </Router>
      </PuntuacionProvider>
    </YerbaProvider>
  )
}

export default App
