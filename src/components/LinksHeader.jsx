function LinksHeader({name, ruta}) {
    return(
        <a className='header-nav-links' href={ruta}>{name}</a>
    )
}
export default LinksHeader;