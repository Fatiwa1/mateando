import React, { useState } from 'react';
import axios from 'axios';
import '../ContenedorEstilos/Registro.css';
import Header from '../Header';
import { Link } from 'react-router-dom';
import Footer from '../Footer';

function Registro() {
  const [formData, setFormData] = useState({
    correoElectronico: '',
    nombreUsuario: '',
    contraseña: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Realizar la solicitud al backend para el registro
      const response = await axios.post('http://localhost:5141/api/registro', {
        userName: formData.nombreUsuario,
        email: formData.correoElectronico,
        password: formData.contraseña
      });

      // Manejar la respuesta del backend según tus necesidades
      console.log(response.data);
    } catch (error) {
      console.error('Error', error);
    }
  };

  return (
    <>
      <Header />
      <main>
        <article>
          <section className="SectionRegistro">
        <form className="SectionRegistro-form" onSubmit={handleSubmit}>
        <label htmlFor="correoElectronico">Correo electronico</label>
          <input
            type="email"
            id="email"
            name="correoElectronico"
            placeholder="Correo electronico..."
            value={formData.correoElectronico}
            onChange={handleChange}
          />
          <label htmlFor="nombreUsuario">Nombre de usuario</label>
          <input
            type="text"
            id="name"
            name="nombreUsuario"
            placeholder="Nombre de usuario..."
            value={formData.nombreUsuario}
            onChange={handleChange}
          />
          <label htmlFor="contraseña">Contraseña</label>
          <input
            type="password"
            id="password"
            name="contraseña"
            placeholder="Contraseña..."
            value={formData.contraseña}
            onChange={handleChange}
          />
          <button type="submit">Registrate</button>
          <p>
            ¿Ya tienes una cuenta? <Link to='/components/ContenedorRegistro/InicioSesion'>Inicia Sesion</Link>
          </p>
        </form>
      </section>
        </article>
      </main>
      <Footer />
    </>
  );
}

export default Registro;
