import React, { useState } from 'react';

function Notificaciones() {
    const [mostrarNotificaciones, setMostrarNotificaciones] = useState(false);

    const MostrarNotificaciones = () => {
        setMostrarNotificaciones(!mostrarNotificaciones);
    }

    return (
        <div>
            <button onClick={MostrarNotificaciones} className='header-nav-linkIconos'>
                <img className='header-nav-linkLogo-notificaciones' src="../../../public/imagenes/alarma.png" alt="Notificaciones" />
            </button>

            {mostrarNotificaciones && (
                <div className="ContenedorNotificaciones">
                    <div className='ContenedorBusquda-Busqueda'>
                    <img className='ContenedorNotificaciones-Logo' src="https://unavatar.io/Faustino" alt="" />
                    <div className='ContenedorNotificaciones-Info'>
                        <h3 className='ContenedorNotificaciones-Nombre'>Faustino</h3>
                        <p className='ContenedorNotificaciones-Texto'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste iure pariatur mollitia.</p>
                    </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Notificaciones;
