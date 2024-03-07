import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import BuscadorYerbas from './ContenedorBuscarYerbas/BuscadorYerbas';
import '../App.css'
import Notificaciones from './Notificaciones';

function Header() {
    return(
        <header>
              <nav className='header-nav'>
                <Link className='header-nav-linkLogo' to='/'><img className='header-nav-logo' src="../../public/imagenes/m_ateando-removebg-preview.png" alt="Logo Mateando" /></Link>
                <Link className='header-nav-links' to='/components/ContenedorManejoYerbas/ArmarioYerbas'>Armario</Link>
                <Link className='header-nav-links' to='/components/LaYerbaMate'>La yerba mate</Link>
                <Link className='header-nav-links' to='/components/ContenedorBuscarYerbas/CatalogoYerbas'>Catalogo de yerbas</Link>
                <BuscadorYerbas />
                <Notificaciones />
                <Link className='header-nav-links' to='/components/ContenedorRegistro/InicioSesion'>Inicia Sesion</Link>
                <Link className='header-nav-linkIconos' to='/components/ContenedorPerfil/Perfil'><img className='header-nav-links-imgPerfil' src="https://unavatar.io/Faustino" alt="" /></Link>
              </nav>
        </header>
    )
}
export default Header;