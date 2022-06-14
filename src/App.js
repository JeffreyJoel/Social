import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from 'react';
import Chats from './pages/Chats/Chats';
import Home from './pages/Home/Home';
import Messages from './pages/Messages/Messages';
function App() {
  return (
    <div className='App'>
      <Router>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='chats' element={<Chats/>} />
          <Route path='messages' element={<Messages/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
