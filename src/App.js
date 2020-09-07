import React from 'react';

import NavBar from './components/NavBar'
import Clock from './components/Clock';
import TodoList from './components/TodoList';
import Counter from './components/Counter';

import './styles/App.css';

import todos from './components/constants/Todos';

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
            <div className="todos">
              Todos:<br/><TodoList todos={todos}/>
            </div>
            <div className="counter">
              <Counter />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
