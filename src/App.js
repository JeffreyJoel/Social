import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from 'react';
import Chats from './pages/Chats/Chats';
import Home from './pages/Home/Home';

function App() {
  return (
    <div className='App'>
      <Router>
        <Routes>
          <Route path='/' element={<Chats/>} />
          <Route path='home' element={<Home/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
