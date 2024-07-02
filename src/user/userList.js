import React, { useState, useEffect } from 'react';
import api from './api';
import { useNavigate } from 'react-router-dom';

const UsersList = () => {
    const [users, setUsers] = useState([]);
    const navigate = useNavigate() 
  
    useEffect(() => {
      api.get('/users/')  //llama al api
        .then(response => {
          setUsers(response.data);
        })
        .catch(error => {
          console.error('Error fetching users:', error);
        });
    }, []);
  
    const handleDelete = (id) => {
        api.delete(`/users/${id}`)
            .then(response => {
                setUsers(users.filter(user => user.id !== id));
            })
            .catch(error => {
                console.error('Error deleting user:', error);
        });
    };
  
    const handleEdit = (id) => {
        navigate(`/edit/${id}`)
    };
  
    return (
    <div>
      <h2>Lista de Usuarios</h2>
      <ul>
        {users.map(user => (
          <li key={user.id}>
            Nombre: {user.name} - Email: {user.email}  
            <div>
           
              <button onClick={() => handleEdit(user.id)} >Editar</button>
           
              <button onClick={() => handleDelete(user.id)}>Eliminar</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
    );
  };
  
  export default UsersList;
  