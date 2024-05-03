
import React, { useState, useEffect } from 'react';
import './App.css';
import useCrud from './hooks/usersCrud';
import UserForm from './components/UserForm';
import UserCard from './components/UserCard';

function App() {

  const urlBase='https://users-crud.academlo.tech/';

  const [updateUser, setUpdateUser] = useState();
  const [users, getUsers, createUser, deleteUser, editUser] = useCrud(urlBase);

  useEffect(() => {
   const path = 'users';
   getUsers(path);
  }, []);

   console.log(users);

  return (
      <div>
       <h1>Crud Users</h1>
       <UserForm
        createUser={createUser}
        updateUser={updateUser}
        editUser={editUser}
        setUpdateUser={setUpdateUser}
       />
       <div>
        {
          users?.map((user)  =>(
            <UserCard
            key={user.id}
            user={user}
            deleteUser={deleteUser}
            setUpdateUser={setUpdateUser}
            />
          ))
        }
       </div>
      </div>
  )
}

export default App;
