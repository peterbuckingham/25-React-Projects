import React, {useState} from 'react';
import './App.css';

function App() {
  const [todos, setTodos] = useState(['Take Dogs for a walk', 'Take the Rubbish out', 'Peter test']);


  return (
    <div className="App">
      <h1>Hello World</h1>
      <input />
      <button>Add Todo</button>

      <ul>
        {todos.map(todo => (
          <li>{todo}</li>
        ))}
        
        <li></li>
        <li></li>
      </ul>


    </div>
  );
}

export default App;
