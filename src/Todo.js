

export function Todo({ todos, removeTodo, doneTodo }) {

    return <div className="Todos">
        {
            todos.map(el => <div key={el.id} className={el.done ? "Todo done" : "Todo"} >
                <span>{el.model}</span>
                <span>
                    <i className="fa-solid fa-check" onClick={() => doneTodo(el.id)}></i>
                </span>
                <span>
                    <i className="fa-solid fa-trash-can" onClick={() => removeTodo(el.id)}></i>
                </span>

            </div>)
        }
    </div>
}