import TablaYerbas from './TablaYerbas';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from "../Header";
import Footer from "../Footer";
import '../ContenedorEstilos/CatalogoYerbas.css'

function CatalogoYerbas() {
    const [tablaYerbas, setTablaYerbas] = useState(TablaYerbas);
    const marcasYTipos = {};

    const BucleMarcasYerbas = () => {
        for (let i = 0; i < tablaYerbas.length; i++) {
            const yerba = tablaYerbas[i];
            const marcaYerba = yerba.marca;
            const tipoYerba = yerba.tipo;
            const nombreYerba = yerba.nombre;

            if (!marcasYTipos[marcaYerba]) {
                marcasYTipos[marcaYerba] = {};
            }

            if (!marcasYTipos[marcaYerba][tipoYerba]) {
                marcasYTipos[marcaYerba][tipoYerba] = [];
            }

            if (!marcasYTipos[marcaYerba][tipoYerba].includes(yerba)) {
                marcasYTipos[marcaYerba][tipoYerba].push(yerba);
            }
        }
        const MostrarBuscar = (e) => {
            const liElement = e.currentTarget;
            liElement.classList.toggle('mostrarContenido');
            console.log("Evento:", e);
            console.log("Objetivo:", e.target);  // Agrega este console.log
        }
        
        // Ahora, después del bucle, puedes devolver la lista de marcas, tipos y nombres
        return (
                <ul className="Contenedor-LiMarca">
                {Object.keys(marcasYTipos).map((marca, marcaIndex) => (
                    <li  onClick={(e) => MostrarBuscar(e)}className="LiMarca" key={marcaIndex}>
                        <h3>{marca}</h3>
                        <ul className="LisBuscar-tipo">
                            {Object.keys(marcasYTipos[marca]).map((tipo, tipoIndex) => (
                                <li  onClick={(e) => MostrarBuscar(e)} className="LiTipo" key={tipoIndex}>
                                    <h4>{tipo}</h4>
                                    <ul className='LisBuscar-nombre'>
                                        {marcasYTipos[marca][tipo].map((yerba, index) => (
                                            <li className="LiNombre" key={index}>
                                                <Link to="/components/ContenedorManejoYerbas/InformacionYerba" state={{ index: yerba.index }} className="ContenedorBusquda-Busqueda" key={yerba.index}>
                                                    <img className="ContenedorBusqueda-Busqueda-Imagen" src={`../../public/imagenes/${yerba.imagen}`} alt="Yerbas" />
                                                    <div className="ContenedorBusquda-Busqueda-Textos">
                                                        <span className="ContenedorBusqueda-Busqueda-Textos-Titulo">{yerba.nombre}</span> 
                                                        <p>{yerba.marca}</p>
                                                    </div>
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </li>
                            ))}
                        </ul>
                    </li>
                ))}
            </ul>
        );
    };

    useEffect(() => {
        BucleMarcasYerbas();
    }, []);

    const estiloPersonalizado = {
        minHeight: '70vh',
        zIndex: '0'
    }

    return (
        <>
            <Header />
            <main>
                <article className="ArticuloYerbas"><BucleMarcasYerbas /></article>
                
            </main>
            <Footer estilo={estiloPersonalizado}/>
        </>
    );
}

export default CatalogoYerbas;
