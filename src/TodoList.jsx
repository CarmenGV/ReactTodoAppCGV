import deleteSVG from '../src/assets/trash.svg';
function TodoList ({todos, handleDelete, handleCompleted}) {
    const btnDelClick = (id) => {
       handleDelete(id)
    }
    const btnCompClick = (todo) => {
        handleCompleted(todo);
    }
    const categoryOrder = {
        high: 1,
        medium: 2,
        low: 3
    };
    const sortedTodos = [...todos].sort((a, b) =>{
        return categoryOrder[a.category] - categoryOrder[b.category];
    });
    return (
        <>
            <div className="todo-container">
                <h2>Todo List:</h2>
                {sortedTodos.map((todo) => {
                    if(!todo.completed){
                        let categoryClass = `todo-category ${todo.category}`;
                        let customCheckboxClass = `custom-checkbox ${todo.category}`
                        return (
                            <div key={todo.id} className="todo-card">
                                <div className={categoryClass}>
                                    <span>{todo.category}</span>
                                </div>
                                <div className="todo-checkbox">
                                    <label onClick={() => btnCompClick(todo)}>
                                        <input type="checkbox" name="category" value={todo.category} />
                                        <span className={customCheckboxClass}></span>
                                    </label>
                                </div>
                                <div className="todo-text-wrapper">
                                    <p className="todo-date">{todo.due}</p>
                                    <p className="todo-heading">{todo.title}</p>
                                    <p className="todo-description">{todo.description}</p>
                                </div>
                                <button className="todo-delete" onClick={() => btnDelClick(todo.id)}>
                                    <img src={deleteSVG} alt="Delete task"/>
                                </button>
                            </div>
                        );
                    }
                return null;
                })}
            </div>
        </>
    )
}

export default TodoList;