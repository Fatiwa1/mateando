import React, { useState } from 'react'
import './App.css'
import LinksHeader from './components/LinksHeader'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import ButtonPublicar from './components/ContenedorPublicacionesComentaciones/PublicacionesUsuarios';
import BuscadorYerbas from './components/ContenedorBuscadorYerbas/BuscadorYerbas';
import ReseñaLibros from './components/ReseñaLibros';
function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={
          <>
            <header>
              <nav className='header-nav'>
                <Link to='/'><img className='header-nav-logo' src="../public/imagenes/m_ateando-removebg-preview.png" alt="Logo Mateando" /></Link>
                <LinksHeader name="Armario" ruta="/"/>
                <LinksHeader name="Buscar" ruta="/"/>
                <LinksHeader name="Comunidad" ruta="/"/>
                <BuscadorYerbas />
                <button>Notificaciones</button>
                <LinksHeader name="Mensajes" ruta="/"/>
                <LinksHeader name="Amigos" ruta="/"/>
                <button>Perfil</button>
              </nav>
            </header>
            <main>
              <article className='ArticuloPublicaciones'>
                <section>
                  <ButtonPublicar />
                </section>
              </article>
            </main>
          </>
        } />
        <Route path='/components/ReseñaLibros' element={<ReseñaLibros />} />
        <Route path='/components/ContenedorBuscadorYerbas/BuscadorYerbas' element={<BuscadorYerbas />}/>
      </Routes> 
      
    </Router>
  )
}

export default App
