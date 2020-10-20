import React from 'react';
import './sass/App.scss';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  return (
    <div className="App m-5">
      <header className="App-header">Todo List - Using Redux</header>
      <div className="App-container">
        
        <TodoInput/>
        <TodoList/>
        
        
      </div>
      
    </div>
  );
}

export default App;
