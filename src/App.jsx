// src/App.jsx
import React from 'react';
import HomePage from './components/homepage';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div>
      <main>
        <Routes>
          <Route path="/" element={<HomePage/>} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
