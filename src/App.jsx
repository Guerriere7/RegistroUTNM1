import React from 'react';
import './App.css'; // Importa el archivo CSS

const App = () => {
  return (
    <div className="container">
      <h2 className="title">Registro de Usuario</h2>
      <form className="form">
        {/* Nombre */}
        <div className="inputGroup">
          <label htmlFor="nombre" className="label">Nombre:</label>
          <input
            type="text"
            id="nombre"
            name="nombre"
            placeholder="Ingrese su nombre"
            className="input"
          />
        </div>

          {/*apellido*/}
        <div className="inputGroup">
          <label htmlFor="apellido" className="label">Apellido:</label>
          <input
            type="text"
            id="apellido"
            name="apellido"
            placeholder="Ingrese su apellido"
            className="input"
          />
        </div>

        {/* Email */}
        <div className="inputGroup">
          <label htmlFor="email" className="label">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Ingrese su email"
            className="input"
          />
        </div>

        {/* Teléfono */}
        <div className="inputGroup">
          <label htmlFor="telefono" className="label">Teléfono:</label>
          <input
            type="tel"
            id="telefono"
            name="telefono"
            placeholder="Ingrese su teléfono"
            className="input"
          />
        </div>

        {/* Contraseña */}
        <div className="inputGroup">
          <label htmlFor="password" className="label">Contraseña:</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Ingrese su contraseña"
            className="input"
          />
        </div>

        {/* Confirmar Contraseña */}
        <div className="inputGroup">
          <label htmlFor="confirmPassword" className="label">Confirmar Contraseña:</label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            placeholder="Confirme su contraseña"
            className="input"
          />
        </div>

        {/* Botón de Registro */}
        <button type="submit" className="button">Registrarse</button>
      </form>
    </div>
  );
};

export default App;