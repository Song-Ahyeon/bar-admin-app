import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import MainLayout from './components/MainLayout'

function App() {
  const [isLogin, setIsLogin] = useState(true);
  return (
    <div>
      {isLogin ? <MainLayout /> :
      <p>Login Page</p> 
      }
    </div>
  );
}

export default App;
