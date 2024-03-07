import { Link } from "react-router-dom"
import './ContenedorEstilos/Footer.css'

function Footer({estilo}) {
    return(
        <div className="ContentContainer" style={estilo}>
        <footer className="Footer">
            <div className="Footer-Nosotros">
                <h3>Nosotros</h3>
                <div className="Footer-Nosotros-Links">
                    <Link 
                    style={{
                        color:'white',
                        textDecoration:'none'
                    }} 
                    to='/'>Sobre nosotros</Link>
                    <Link 
                    style={{
                        color:'white',
                        textDecoration:'none'
                    }}  
                    to='/'>Terminos</Link>
                    <Link 
                    style={{
                        color:'white',
                        textDecoration:'none'
                    }} 
                    to='/'>Privacidad</Link>
                    <Link 
                    style={{
                        color:'white',
                        textDecoration:'none'
                    }}  
                    to='/'>Ayuda</Link>
                </div>
            </div>
            <div className="Footer-TrabajaNosotros">
                <h3>Trabaja con nosotros</h3>
                <div className="Footer-TrabajaNosotros-Links">
                    <Link 
                    style={{
                        color:'white',
                        textDecoration:'none'
                    }}    
                    to='/'>Ser colaborador</Link>
                </div>
            </div>
            <div className="Footer-Contactenos">
                <h3>Contactenos</h3>
                <div className="Footer-Contactenos-Links">
                    <a href=""><img src="../../public/imagenes/instagram.png" alt="Instagram" /></a>
                    <a href=""><img src="../../public/imagenes/signo-de-twitter.png" alt="Twitter" /></a>
                    <a href=""><img src="../../public/imagenes/facebook.png" alt="Facebook" /></a>
                </div>
            </div>
        </footer>
        </div>
    )
}

export default Footer;