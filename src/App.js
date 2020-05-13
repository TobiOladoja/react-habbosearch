import React, { useState } from 'react';
import './App.css';
import axios from 'axios';
import UserForm from './components/UserForm';

function App() {
  const [lists, setLists] = useState({
    name: null,
    motto: null,
    memberSince: null,
  });

  const getUser = (e) => {
    e.preventDefault();
    const user = e.target.elements.username.value;
    if (user) {
      axios
        .get(`https://www.habbo.com/api/public/users?name=${user}`)
        .then((res) => {
          console.log(res);
          const { name, motto } = res.data;

          setLists({ name, motto });
        });
    } else return;
  };

  return (
    <div className='box-wrapper'>
      <div className='box'>
        <h1>Search Habbo User</h1>
        <UserForm getUser={getUser} />
        {lists.name ? (
          <p>
            Username: {lists.name} <br /> Motto: {lists.motto} <br /> Member
            since: {lists.memberSince}
          </p>
        ) : (
          <p>Please enter a username</p>
        )}
      </div>
    </div>
  );
}

export default App;
