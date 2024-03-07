import Header from "../Header"
import ContenedorYerbas from "../ContenedorBuscarYerbas/TablaYerbas";
import { useLocation } from 'react-router-dom'
import { useState } from "react";
import '../ContenedorEstilos/InformacionYerbas.css'
import BotonesPuntuacion from "./Puntuacion";
import ButtonPublicar from "./ResenaUsuario";
import ButtonGuardarYerba from "./GuardarYerba";
import Footer from "../Footer";

function InformacionYerba() {
    const [BotonValue, setBotonValue] = useState(0);
    const location = useLocation();
    const [tablaYerbas, setTablaYerbas] = useState(ContenedorYerbas);

    let { index } = location.state
    index --;
    const yerba = tablaYerbas[index]
    return(
        <>
        <Header />
        <main>
            <article className="ArticuloResena">
                <section className="ArticuloResena-Yerba">
                    <div>
                        <div className="ArticuloResena-Yerba-imagen">
                            <img src={`../../public/imagenes/${yerba.imagen}`} alt={yerba.nombre} />
                            <ButtonGuardarYerba yerba={yerba} BotonValue={BotonValue}/>
                        </div>
                        <BotonesPuntuacion BotonValue={BotonValue} setBotonValue={(nuevaPuntuacion) => setBotonValue(Number(nuevaPuntuacion))} />
                    </div>
                    <div className="ArticuloResena-Yerba-descripcion">
                        <h2>{yerba.nombre}</h2>
                        <span>{yerba.marca}</span>
                        <div className="ArticuloResena-Yerba-descripcion-tipo"><p>Tipo: {yerba.tipo}</p></div>
                        <div className="ArticuloResena-Yerba-descripcion-tipo"><p>Tipo de molienda: {yerba.tipoMolienda}</p></div>
                        
                        <ButtonPublicar />
                    </div>
                </section>
            </article>
        </main>
        <Footer />
        </>
        
    )
}
export default InformacionYerba;