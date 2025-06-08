
function CompletedTodo ({ todos, handleCompleted}) {

    const btnCompClick = (todo) => {
        handleCompleted(todo);
    }
    return (
        <>
            <div className="todo-container completed">
                <h2>Completed List:</h2>
                {todos.map((todo) => {
                    if(todo.completed){
                        let categoryClass = `todo-category ${todo.category}`;
                        let customCheckboxClass = `custom-checkbox ${todo.category}`;
                        return (
                            <div key={todo.id} className="todo-card completed">
                                <div className={categoryClass}>
                                    <span>{todo.category}</span>
                                </div>
                                <div className="todo-checkbox">
                                    <label>
                                        <input type="checkbox" name="category" value={todo.category} />
                                        <span className={customCheckboxClass}></span>
                                    </label>
                                </div>
                                <div className="todo-text-wrapper">
                                    <p className="todo-date">{todo.due}</p>
                                    <p className="todo-heading">{todo.title}</p>
                                    <p className="todo-description">{todo.description}</p>
                                </div>
                                <button onClick={() => btnCompClick(todo)} className="completed-button">Undo</button>
                            </div>
                        )
                    }
                    return null;
                })}
            </div>
        </>
    );
}

export default CompletedTodo;