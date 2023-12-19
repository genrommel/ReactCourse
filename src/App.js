import React from 'react';
import {TodoList} from './TodoList.js'
import {TodoCounter} from './TodoCounter.js'
import {TodoSearch} from './TodoSearch.js'
import { TodoItem } from './TodoItem.js';
import { CreateTodoButton } from './CreateTodoButton.js';
import './App.css';


const defaultTodos = [
  {text: 'learn next.js', completed: false},
  {text: 'learn express.js', completed: false},
  {text: 'learn something related to backend', completed: false},
  {text: 'learn chemistry : the basics', completed: true},
  {text: 'Loss 13 kg', completed: false},
]

function App() {
  const [todos, setTodos] = React.useState(defaultTodos);
  const [searchValue, setSearchValue] = React.useState('');

  const completedTodos = todos.filter((todo) => todo.completed).length;
  const totalTodos = todos.length;

  return (
    <React.Fragment>      
    
      <h1> To-do <span>hub</span></h1>
      <TodoCounter total={totalTodos} completed={completedTodos}/>
      <TodoSearch
        searchValue = {searchValue}
        setSearchValue = {setSearchValue}
      />
      <TodoList>
        {defaultTodos.map(todo => 
          <TodoItem 
            key={ todo.text }
            text={ todo.text }
            completed={todo.completed}/>
        )}
       
      </TodoList>

      <CreateTodoButton/>


    </React.Fragment>

  );
}



export default App;
