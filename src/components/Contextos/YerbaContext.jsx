// YerbaContext.js
import React, { createContext, useState } from 'react';

// Crear los contextos
export const YerbaContext = createContext();
export const PuntuacionContext = createContext();
export const OpinionesContext = createContext(); // Nuevo contexto para las puntuaciones

// Crear los proveedores del contexto
export const YerbaProvider = ({ children }) => {
  const [yerbas, setYerbas] = useState([]);
  return (
    <YerbaContext.Provider value={[yerbas, setYerbas]}>
      {children}
    </YerbaContext.Provider>
  );
};

export const PuntuacionProvider = ({ children }) => { // Nuevo proveedor para las puntuaciones
  const [puntuacionesYerbas, setPuntuacionesYerbas] = useState([]);
  return (
    <PuntuacionContext.Provider value={[puntuacionesYerbas, setPuntuacionesYerbas]}>
      {children}
    </PuntuacionContext.Provider>
  );
};

export const OpinionesProvider = ({ children }) => {
  const [opiniones, setOpiniones] = useState([]);
  return (
    <OpinionesContext.Provider value={[opiniones, setOpiniones]}>
      {children}
    </OpinionesContext.Provider>
  );
}
