
function AddTodo ({handleNewTodo}) {
    //Set minimum date to current date
    let today = new Date();
    let month = today.getMonth() + 1;
    let todaysDate = today.getFullYear() + "-" + month + "-" + today.getDate();

    //Error Messages if inputs are invalid
    const errorMessage = (id, message) => {
        let input = document.getElementById(id);
        let error = document.getElementById(id+'-error');
        input.className = 'error-border';
        error.innerHTML = message;
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        //Collect Input Values
        let form = document.getElementById("add-todo-form");
        let title = document.getElementById('title').value.trim();
        let titleInput = document.getElementById('title');
        let desc = document.getElementById('description').value.trim();
        let descInput = document.getElementById('description');
        let dueDate = document.getElementById('due-date').value;
        let dueDateInput = document.getElementById('due-date');
        let dateArr = dueDate.split("-");
        let date = dateArr[1] + "/" + dateArr[2] + "/" + dateArr[0];
        let categorySelect = document.getElementById('category');
        let category = document.getElementById('category').value;

        if(
            (title !== '' || title.length > 5) && 
            (desc !== '' && desc.length > 25) && 
            (dueDate !== '') &&
            (category !== '')){
            //Reset error messages and styles
            let titleError = document.getElementById("title-error");
            titleError.innerHTML = "";
            titleInput.className="";
            let descError = document.getElementById("description-error");
            descError.innerHTML = "";
            descInput.className="";
            let dueError = document.getElementById('due-date-error');
            dueError.innerHTML = "";
            dueDateInput.className = "";
            let categoryError = document.getElementById('category-error');
            categoryError.innerHTML = "";
            categorySelect.className = "";


            //Create object
            let todo = [title, desc, date, category];

            //Pass todo items into addTodo function in App
            handleNewTodo(todo);

            form.reset();
        } else {
            if(title === '' || title.length < 5){
                errorMessage('title', "Title cannot be an empty string or shorter than five characters.");
            }
            if(desc === ''){
                errorMessage('description', 'Description cannot be an empty string.');
            }
            if(dueDate === ''){
                errorMessage('due-date', 'A date must be selected');
            }
            if(category === ''){
                errorMessage('category', 'A level of importance must be selected.');
            }
        }
    }

    return (
        <div>
            <form id='add-todo-form' onSubmit={handleSubmit}>
                <h1 className='add-h1'>Add Todo</h1>
                <label>
                    <span>Title:</span>
                    <input
                        id='title'
                        name='title'
                        type='text'
                    />
                </label>
                <span id='title-error' className="error-message"></span>
                <label>
                    <span>Description:</span>
                    <textarea
                        id='description'
                        name='description'
                        rows='2'
                    ></textarea>
                </label>
                <span id="description-error" className="error-message"></span>
                <label>
                    <span>Due:</span>
                    <input
                        id='due-date'
                        name='due-date'
                        type='date'
                        min={todaysDate}
                    />
                </label>
                <span id="due-date-error" className="error-message"></span>
                <label>
                    <span>Level of importance:</span>
                    <select id="category" name="category">
                        <option value=''>Select level</option>
                        <option value="high">High</option>
                        <option value="medium">Medium</option>
                        <option value="low">Low</option>
                    </select>
                </label>
                <span id="category-error" className="error-message"></span>

                <input type='submit' value='Submit' onClick={handleSubmit}/>
            </form>
        </div>
    );
}

export default AddTodo;