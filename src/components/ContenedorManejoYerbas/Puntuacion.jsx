import { useState } from "react";

function BotonesPuntuacion({ BotonValue, setBotonValue }) {

    const TomarValor = (e) => {
        setBotonValue(parseInt(e.target.value));
    }

    return(
       <>
        <button className="PuntuacionEstrellas" onClick={TomarValor} id="1" value="1" ><img src={BotonValue >= 1 ? '../../public/imagenes/estrella2.png' : '../../public/imagenes/estrella.png'} style={{pointerEvents: 'none'}} alt="Estrella" /></button>
        <button className="PuntuacionEstrellas" onClick={TomarValor} id="2" value="2" ><img src={BotonValue >= 2 ? '../../public/imagenes/estrella2.png' : '../../public/imagenes/estrella.png'} style={{pointerEvents: 'none'}} alt="Estrella" /></button>
        <button className="PuntuacionEstrellas" onClick={TomarValor} id="3" value="3" ><img src={BotonValue >= 3 ? '../../public/imagenes/estrella2.png' : '../../public/imagenes/estrella.png'} style={{pointerEvents: 'none'}} alt="Estrella" /></button>
        <button className="PuntuacionEstrellas" onClick={TomarValor} id="4" value="4" ><img src={BotonValue >= 4 ? '../../public/imagenes/estrella2.png' : '../../public/imagenes/estrella.png'} style={{pointerEvents: 'none'}} alt="Estrella" /></button>
        <button className="PuntuacionEstrellas" onClick={TomarValor} id="5" value="5" ><img src={BotonValue >= 5 ? '../../public/imagenes/estrella2.png' : '../../public/imagenes/estrella.png'} style={{pointerEvents: 'none'}} alt="Estrella" /></button>
       </> 
    )
}

export default BotonesPuntuacion;
