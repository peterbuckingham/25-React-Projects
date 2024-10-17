import React, {useState} from 'react';
import './App.css';

function App() {
  const [todos, setTodos] = useState(['Take Dogs for a walk', 'Take the Rubbish out', 'Peter test', 'hello world']);
  const [input, setInput] = useState('');
  console.log(input);

  const addTodo = (event) => {
    //this will fire off when we click the button
    event.preventDefault(); //will stop the refresh
    console.log('Test');
    setTodos([...todos, input]);
    setInput(''); // clear up the input after clicking add todo button

  }

  return (
    <div className="App">
      <h1>Hello World</h1>
      <form type="submit">


      <input value={input} onChange={event => setInput(event.target.value)}/>
      <button onClick={addTodo}>Add Todo</button>
      </form>

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
