import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UsersList from './user/userList';
import CreateUser from './user/createUser';
import UpdateUser from './user/updateUser';
function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Routes>
        <Route path="/" element={< UsersList/>}></Route>
        <Route path="/createUser" element={< CreateUser/>}></Route>
        <Route path="/edit/:id" element={< UpdateUser/>}></Route>
      </Routes>
    </BrowserRouter>
     
    </div>
  );
}

export default App;
