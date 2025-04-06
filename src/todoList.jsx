
import { useState } from "react";
import "./TodoList.css"; 
import { v4 as uuidv4 } from 'uuid';

export default function TodoList() {
    let [todos, setTodos] = useState([{task:"Sample task",id:uuidv4() }]);
    let [newTodo, setNewTodo] = useState("");

    let addTask = () => {
            setTodos((prevTodo)=>{
                return[...todos,{task:newTodo,id:uuidv4() }]
            });
            setNewTodo("");
    };

    let updateTodoValue = (event) => {
        setNewTodo(event.target.value);
    };

    let deleteTodo = (id) => {    
        setTodos(todos.filter((todo) => {
            return todo.id !== id;
        }));
    };
    
    return (
        <div className="todo-container">
            <h1>Todo List</h1>
            <input
                placeholder="Add a task"
                value={newTodo}
                onChange={updateTodoValue}
                className="todo-input"
            />
            <button onClick={addTask} className="add-button">
                Add Task
            </button>
            <hr />
            <h4>Tasks Todo</h4>
            <ul className="todo-list">
                {todos.map((todo, index) => (
                    <li  className="todo-item" key={todo.id}>
                    <span>
                        {todo.task}
                    </span>
                    
                <button onClick={()=> deleteTodo(todo.id)} className="delete-button" ><i className="fa-regular fa-trash-can"></i></button>
                </li>
                ))}
            </ul>
        </div>
    );
}
