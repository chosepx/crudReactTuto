import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import api from './api';

const UpdateUser = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [user, setUser] = useState(null);
  
    useEffect(() => {
      api.get(`/users/${id}`)
        .then(response => {
          setUser(response.data);
          setName(response.data.name);
          setEmail(response.data.email);
        })
        .catch(error => {
          console.error('Error fetching user:', error);
        });
    }, [id]);

    const handleSubmit = (e) => {
        e.preventDefault();
        api.put(`/users/${id}`, { name, email })
          .then(response => {
            console.log('User updated:', response.data);
            navigate('/');
          })
          .catch(error => {
            console.error('Error updating user:', error);
          });
      };

  
    return (
      <div>
    <h2>Actualizar Usuario</h2>
      {user && (
        <form onSubmit={handleSubmit}>
          <div>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Nuevo Nombre"
            />
          </div>
          <div>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Nuevo Correo Electrónico"
            />
          </div>
          <button type="submit">Actualizar</button>
        </form>
      )}
      </div>
    );
  };
  
  export default UpdateUser;
  