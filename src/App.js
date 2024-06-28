import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login/Login';
import Main from './components/Main/Main';
import './css/App.css';

function App() {
  return (
    <Router>
      <Routes>
        {/* 로그인 페이지 */}
        <Route path="/" element={<Login />} />

        {/* 유저페이지 */}
        <Route path="/user/*" element={<Main />} />
      </Routes>
    </Router>
  );
}

export default App;
