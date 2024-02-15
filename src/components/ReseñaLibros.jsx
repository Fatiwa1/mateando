import LinksHeader from "./LinksHeader";

function ReseñaLibros() {
    return(
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
    )
}
export default ReseñaLibros;