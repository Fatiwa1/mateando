import React, { useState } from 'react'
import './App.css'
import LinksHeader from './components/LinksHeader'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import ButtonComentar from './components/ComentacionesUsuarios';
import ButtonPublicar from './components/PublicacionesUsuarios';
import BuscadorYerbas from './components/BuscadorYerbas';
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
      </Routes> 
    </Router>
  )
}

export default App
