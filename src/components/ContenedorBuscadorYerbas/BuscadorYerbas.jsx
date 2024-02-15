import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import ContenedorYerbas from "./CatalogoYerbas";
import "../ContenedorEstilos/Busqueda.css";
import App from "../../App";

function BuscadorYerbas() {
    const [tablaYerbas, setTablaYerbas] = useState(ContenedorYerbas);
    const [yerbas, setYerbas] = useState([]);
    const [busqueda, setBusqueda] = useState("");

    useEffect(() => {
        //Cuando se produce un cambio en el estado y se cumple la condicion empieza a filtrar la busqueda
        if (busqueda.length >= 3) {
            filtrar(busqueda);
        } else {
            setYerbas([]); // Si hay menos de tres letras, no mostrar ninguna yerba.
        }
    }, [busqueda]);

    const handleChange = (e) => {
        const inputValue = e.target.value;
        setBusqueda(inputValue);
    }

    const filtrar = (terminoBusqueda) => {
        const resultadosBusqueda = tablaYerbas.filter((elemento) =>
            elemento.nombre.toLowerCase().includes(terminoBusqueda.toLowerCase())
        );
        if (resultadosBusqueda.length > 0) {
            setYerbas(resultadosBusqueda.slice(0, 5));
        } else {
            setYerbas([]);
        }
    }

    return (
        <div>
            <input
                className=""
                value={busqueda}
                placeholder="Buscar yerba..."
                onChange={handleChange}
            />
            {yerbas.length >= 1 && (
                <ul className="ContenedorBusqueda">
                    {yerbas.map((yerba) => (
                        <Link to="/components/ReseñaLibros" className="ContenedorBusquda-Busqueda" key={yerba.index}>
                            <img className="ContenedorBusqueda-Busqueda-Imagen" src={yerba.imagen} alt="Yerbas" />
                            <div className="ContenedorBusquda-Busqueda-Textos">
                                <span className="ContenedorBusqueda-Busqueda-Textos-Titulo">{yerba.nombre}</span> 
                                <p>{yerba.marca}</p>
                            </div>
                        </Link>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default BuscadorYerbas;
