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
            <div className="clock">
              Current time: <Clock />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
