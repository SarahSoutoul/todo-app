function Todo({todo, todos, setTodos}) {
    function deleteHandler() {
        let filteredTodos = todos.filter(el => el !== todo)
        setTodos(filteredTodos)
    }

    function completeHandler() {
        setTodos(todos.map((item) => {
            if(item === todo) {
                return {
                    ...item,
                    completed: !item.completed
                }
            }
            return item;
        }))
    }

    return (
        <div className="todo">
            <li className={`todo-item ${todo.completed ? 'completed' : ''}`}>{todo.text}</li>
            <button className="complete-btn" onClick={completeHandler}>Complete</button>
            <button className="trash-btn" onClick={deleteHandler}>Delete</button>
        </div>
    )
}

export default Todo;