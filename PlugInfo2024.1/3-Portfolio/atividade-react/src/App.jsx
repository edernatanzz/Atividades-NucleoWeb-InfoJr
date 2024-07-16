
// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Section1 from './components/Section1';
import Section2 from './components/Section2';
import Navbar from './components/Navbar';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    if (darkMode) {
      document.body.classList.remove('dark-mode');
    } else {
      document.body.classList.add('dark-mode');
    }
  };

  return (
    <div className={darkMode ? 'dark-mode' : ''}>
      <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <main>
        <Navbar/>
        <div className='sections'>
          <Section1 />
          <Section2 />
        </div>
      </main>
    </div>
  );
}

export default App;
