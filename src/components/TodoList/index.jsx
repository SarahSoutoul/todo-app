import Todo from '../Todo';

function TodoList({todos, setTodos}) {

    const deleteTodo = (todo) => {
        let filteredTodos = todos.filter(el => el !== todo)
        setTodos(filteredTodos)
    }

    const completeTodo = (todo) => {
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
        <div className="todo-container">
            <ul className="todo-list">
                {todos.map((todo, i) => <Todo todo={todo} completeTodo={completeTodo} deleteTodo={deleteTodo} key={i} />)}
            </ul>
        </div>
    )
}

export default TodoList;