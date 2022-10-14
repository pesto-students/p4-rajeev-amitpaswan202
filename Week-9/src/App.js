// importing all important componenet in here.
import React, {useState} from 'react';
import './App.css';
import Cheader from "./Component/header"
import Form from './Component/Form'
import Todoslist from './Component/TodoList';


//App function is using UseState Hook for, input, todos and editTodo.
const App =()=>{
  const [input, setInput]=useState("");
  const [todos, setTodos]=useState([]);
  const [editTodo, setEditTodo]= useState(null);

//return will render all componenets in it.
  return(
     <div className='container'>
      <div className='app-wrapper'>
        <div>
          <Cheader/>
          </div>
          <div>
            <Form input={input}
            setInput={setInput}
            todos={todos}
            setTodos={setTodos}
            editTodo={editTodo}
            setEditTodo={setEditTodo}
            />
          </div>
          <div>
            <Todoslist todos ={todos} setTodos={setTodos} setEditTodo={setEditTodo}/>
          </div>

      </div>
     </div>
  );
}


export default App;