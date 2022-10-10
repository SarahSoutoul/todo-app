function Form({setInputText, setTodos, todos, inputText}) {
    function handleInput(e) {
        setInputText(e.target.value)
    }

    function handleSubmit(e) {
        e.preventDefault(); 
        setTodos([
            ...todos,
            {text: inputText, completed: false}
        ])
        setInputText('')
    }

    return(
        <form>
            <input value={inputText} type="text" className="todo-input" onChange={handleInput}/>
            <button type="submit" className="todo-button" onClick={handleSubmit}>Add</button>
        </form>
    )
}

export default Form;
