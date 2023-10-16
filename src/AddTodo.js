import { useState } from "react"



export function AddTodo({ addTodo }) {

    const [value, setValue] = useState('');
    const SubmitHandler = (e) => {
        e.preventDefault();
        addTodo(value);
        setValue(" ")
    }

    return <form onSubmit={SubmitHandler}>
        <input type="text" placeholder="ADD NEW TODO" value={value} onChange={(e) => setValue(e.target.value)} />
        <input type="submit" value="ADD TODO" />
    </form>
}