function Todo({todo, completeTodo, deleteTodo }) {
    
    function deleteHandler() {
        deleteTodo(todo);
    }

    function completeHandler() {
        completeTodo(todo);
    }

    return (
        <li className="todo">
            <span className={`todo-item ${todo.completed ? 'completed' : ''}`}>{todo.text}</span>
            <button className="complete-btn" onClick={completeHandler}>Complete</button>
            <button className="trash-btn" onClick={deleteHandler}>Delete</button>
        </li>
    )
}

export default Todo;