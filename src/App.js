import { useState } from "react";
import { Todo } from "./Todo";
import { AddTodo } from "./AddTodo";


export function App() {
    const [todos, setTodos] = useState(
        [
            { id: 1, model: "Opel", done: false },
           
        ]);

    const addTodo = (text) => {
        const newCar = {
            id: Date.now(),
            model: text,
            done: false
        }
        setTodos([...todos, newCar]);
    }
    const removeTodo = (id) => {
        const refreshTodo = todos.filter(el => el.id !== id)
        setTodos(refreshTodo)
    }
    const doneTodo = (id) => {
        const newdone = todos.map(el => {
            if (el.id === id) el.done = !el.done
            return el
        })
        setTodos(newdone);
    }

    return <div className="App">
        <AddTodo addTodo={addTodo}/>
        <Todo todos ={todos} removeTodo = {removeTodo} doneTodo = {doneTodo} />
    </div>
    
};
