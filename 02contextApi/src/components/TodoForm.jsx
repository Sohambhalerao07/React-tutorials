import React from 'react'
import {useState} from 'react'
import App from '../App';
import { TodoProvider, useTodo } from '../Contexts';

function TodoForm() {
    const[todo,setTodos]=useState("")
    const {addTodo}= useTodo();
    const handleAddTodo = () => {
        if (!todo) return;
        addTodo({ todo, complete: false });
        setTodos("");
    };
    const handleSubmit=(e)=>{
        e.preventDefault()
        if(!todo)
            return
        addTodo({todo , complete:false})
        setTodos("")
    }

    return (
        <form  className="flex" onSubmit={handleSubmit}>
            <input
                type="text"
                value={todo}
                placeholder="Write Todo..."
                className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
                onChange={(e)=>setTodos(e.target.value)}
              
            />
            <button  
            onClick={handleAddTodo}
            type="submit" className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0">
                Add
            </button>
        </form>
    );
  
}

export default TodoForm
