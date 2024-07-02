import React, { useState } from 'react';
import api from './api';
import { useNavigate } from 'react-router-dom';

const CreateUser = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        api.post('/users/', { name, email })
          .then(response => {
            console.log('User created:', response.data);
       
            setName('');
            setEmail('');
            navigate('/')
          })
          .catch(error => {
            console.error('Error creating user:', error);
          });
      };
  

  
    return (
      <div>
        <h2>Crear Usuario</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Nombre"
          />
        </div>
        <div>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Correo Electrónico"
          />
        </div>
        <button type="submit">Crear</button>
      </form>
      </div>
    );
  };
  
  export default CreateUser;