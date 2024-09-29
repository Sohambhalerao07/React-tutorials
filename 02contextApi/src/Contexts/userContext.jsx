import React,{useContext} from "react"

export const userContext = React.createContext({
    todos:[
        {
            id:1,
            todo:"todo ",
            completed: false,

        }
    ],
    addTodo :(todo)=>{},
    updateTodo:(id,todo)=>{},
    deleteTodo:(id)=>{},
    toggleComplete:(id)=>{}


});

export const useTodo = () => {
  return useContext(userContext);
};

export const TodoProvider = userContext.Provider;
