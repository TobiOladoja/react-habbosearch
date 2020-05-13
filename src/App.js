import React from 'react';
import './App.css';
import axios from 'axios';
import UserForm from './components/UserForm';

function App() {
  const getUser = (e) => {
    e.preventDefault();
    const user = e.target.elements.username.value;
    axios
      .get(`https://www.habbo.com/api/public/users?name=${user}`)
      .then((res) => {
        console.log(res);
      });
  };

  return (
    <div className='box-wrapper'>
      <div className='box'>
        <h1>Search Habbo User</h1>
        <UserForm getUser={getUser} />
      </div>
    </div>
  );
}

export default App;
