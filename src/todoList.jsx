
import { useState } from "react";
import "./TodoList.css"; 
import { v4 as uuidv4 } from 'uuid';

export default function TodoList() {
    let [todos, setTodos] = useState([{task:"Sample task",id:uuidv4(), isDone:false }]);
    let [newTodo, setNewTodo] = useState("");

    let addTask = () => {
            setTodos((prevTodo)=>{
                return[...todos,{task:newTodo,id:uuidv4(),isDone:false }]
            });
            setNewTodo("");
    };

    let updateTodoValue = (event) => {
        setNewTodo(event.target.value);
    };

    let markAsDone = (id) => {
        setTodos((prevTodo) => 
            prevTodo.map((todo) => {
                if (todo.id === id) {
                    return {
                        ...todo,
                        isDone: true
                    };
                } 
                return todo;
            })
        );
    };

    let markAllAsDone = () => {
        setTodos((prevTodo) => 
            prevTodo.map((todo) => ({
                ...todo,
                isDone: true
            }))
        );
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
                {todos.map((todo) => (
                    <li className="todo-item" key={todo.id}>
                        <span style={todo.isDone ? { textDecoration: "line-through" } : {}}>
                            {todo.task}
                        </span>
                        <button onClick={() => deleteTodo(todo.id)} className="delete-button">
                            <i className="fa-regular fa-trash-can"></i>
                        </button>
                        <button onClick={() => markAsDone(todo.id)} className="delete-button">
                            Done <i className="fa-solid fa-square-check"></i>
                        </button>
                    </li>
                ))}
            </ul>
            <button onClick={markAllAsDone} className="mark-all-button">
                Mark All as Done
            </button>
        </div>
    );    
}
