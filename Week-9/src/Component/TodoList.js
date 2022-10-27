import React from 'react';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';


const Todoslist=({todos, setTodos, setEditTodo})=>{

    //it will return updated todo after making changes in edit.
    const handleComplete=(todo)=>{
        setTodos(
            todos.map((item)=>{
                if(item.id===todo.id){
                    return {...item,completed: !item.completed};
                }
                return item;
            })
        );

    }

    //function to handle edit operation
    const handleEdit=({id})=>{
        //it will re#b35701 which matches with todo id.
        const findtodo= todos.find((todo)=>todo.id===id);
        setEditTodo(findtodo);
    }
    //function to perform delete operation
    const handleDelete= ({ id })=>{
        //it will only filter whose id will not match with Todo id
        setTodos(todos.filter((todo)=>todo.id!==id));
    };
    //componenet will return ->
    //1- <li className="list-item" key={todo.id}>---< here will get help us to get the item which id had changed
    //2- onChange={(event)=>event.preventDefault()----> it is used to prevent default behaviour of onChange method.
    //3- then we are calling button methids and assigning them icons and handling events on them.
    return(
        <div>
            {todos.map((todo)=>(
                <li className="list-item" key={todo.id}>
                    <input
                    type="text"
                    value={todo.title}
                    className={`list" ${todo.completed ? "complete" : ""}`}
                    onChange={(event)=>event.preventDefault()}
                    />
                    <div className="list-buttons">
                        <button className="button-complete task-button" onClick ={()=> handleComplete(todo)}>
                        <CheckBoxIcon />
                        </button>
                        <button className="button-edit task-button" onClick ={()=>handleEdit(todo)}>
                            <EditIcon />
                        </button>
                        <button className="button-delete task-button" onClick ={()=>handleDelete(todo)}>
                            <DeleteIcon />
                        </button>

                    </div>
                </li>
            ))}

        </div>
    )
}

export default Todoslist;