import React from 'react';
import './App.css';
import LoginButton from './components/LoginButton';
import LogoutButtom from './components/LogoutButton';
import Profile from './components/Profile';

function App() {
  return (
    <>
      <LoginButton></LoginButton>
      <LogoutButtom></LogoutButtom>
      <Profile></Profile>
    </>
  );
}

export default App;
