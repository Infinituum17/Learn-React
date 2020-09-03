import React from 'react';

import NavBar from './components/NavBar'
import Clock from './components/Clock';

import './styles/App.css';

function App() {
  return (
    <div>
      <NavBar />
      <main>
        <div className="mainContent">
          <div className="mainPage">
            <Clock />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
