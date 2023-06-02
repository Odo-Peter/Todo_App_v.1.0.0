import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Feed from './pages/Feed';
import Login from './pages/Login';
import Register from './pages/Register';

const App = () => (
  <main className="text-txt-color bg-bg-color min-h-screen flex flex-col justify-between overflow-hidden items-center">
    <Routes>
      <Route path="/" element={<Feed />} />
      <Route path="login" element={<Login />} />
      <Route path="register" element={<Register />} />
    </Routes>
  </main>
);

export default App;
