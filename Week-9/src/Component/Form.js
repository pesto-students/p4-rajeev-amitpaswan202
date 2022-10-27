//this compoenent will be responsible for adding the list item in the app.
import React, {useEffect} from 'react';
//unique id for each item in Todo list
import {v4 as uuidv4} from "uuid";

const Form=({input, setInput, todos, setTodos, editTodo, setEditTodo})=>{
    // updateTodo function will take title, id and completed and 
    // it will check whether todo.id matches with the provided id in function then 
    // it will return title, id and completed or todo itself.
    const updateTodo=(title, id, completed)=>{
        const newTodo = todos.map((todo)=>
            todo.id===id ? {title, id, completed}: todo
        );
        // in setTodo -> it will provide new Todo
        setTodos(newTodo);
        // and empty string in editTodo.
        setEditTodo("");
    };
// useEffect hook is used to- > it will perform below operation after render
    useEffect(()=>{
        // if editTodo is called then it will setinput as editTodo.title 
        // or return empty string
        if(editTodo){
            setInput(editTodo.title);
        }else{
            setInput("");
        }
    },[setInput, editTodo])

    // this onInputChange functon will return new value to the target event.
    const onInputChange=(event)=>{
        setInput(event.target.value);
    }

    const onFormSubmit=(event)=>{
        // preventDefault-> it is to prevent default behaviuor of this event.
        event.preventDefault();
        if(!editTodo){
        setTodos([...todos, {id:uuidv4(), title:input, completed:false}]);
        setInput("");
        }else{// in case of edit, it will update the todo and campleted will be true.
            updateTodo(input, editTodo.id, editTodo.completed)
        }

    }
    return(
        <form onSubmit={onFormSubmit}>
            <input type="text" placeholder="Enter a TODO..." className='task-input'
            value={input}
            required
            onChange={onInputChange}
            />
            <button className='button-add' type="submit">
                {editTodo ? "OK" : "Add"}
            </button>

        </form>
    )
}

export default Form;