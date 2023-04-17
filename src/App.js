import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Feed from './pages/Feed';
import Login from './pages/Login';
import Register from './pages/Register';

const App = () => (
  <main className="text-txt-color bg-bg-color min-h-screen flex justify-center items-center">
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="feed" element={<Feed />} />
        <Route path="register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  </main>
);

export default App;
