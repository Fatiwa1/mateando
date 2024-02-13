import { useEffect, useState } from "react";
import ContenedorYerbas from "./CatalogoYerbas";
import axios from 'axios';

function BuscadorYerbas() {
    const [yerbas, setYerbas]= useState([]);
    const [tablaYerbas, setTablaYerbas]= useState([]);
    const [busqueda, setBusqueda]= useState("");

    const peticionGet=async()=>{
        await axios.get('src/components/CatalogoYerbas.jsx')
        .then(Response=>{
            setYerbas(Response.data);
            setTablaYerbas(Response.data);
        }).catch(error=>{
            console.log(error);
        })
    }
    const handleChange=e=>{
        setBusqueda(e.target.value)
        console.log("Busqueda: "+e.target.value)
    }

    const filtrar=(terminoBusqueda)=>{
        var resultadosBusqueda=tablaYerbas.filter((elemento)=>{
            if(elemento.name.toString().toLowerCase().includes(terminoBusqueda.toLowerCase())){
                return elemento
            }
        })

        setYerbas(resultadosBusqueda);
    }

    useEffect(()=>{
        peticionGet();
    },[])
    return(
        <div>
        <input 
        className=""
        value={busqueda}
        placeholder="Buscar yerba..."
        onChange={handleChange}
        />
        <p>{setYerbas}</p>
        </div>
        
    )
}
export default BuscadorYerbas;
