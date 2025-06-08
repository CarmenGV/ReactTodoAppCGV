import { useState } from 'react'
import './App.css'
import TodoList from './TodoList'
import CompletedTodo from './CompletedTodo'
import AddTodo from './AddTodo'

function App() {
  //Set initial state of todos
  const initialData = [
    {
      id: 1,
      title: 'Draft Email Response',
      description: 'Reply to John Smith about presentation.',
      due: '05/14/2025',
      completed: false,
      category: 'high'
    },
    {
      id: 2, 
      title: 'Project Falcon',
      description: 'Prepare presentation',
      due: '05/12/2025',
      completed: false,
      category: 'high'
    },
    {
      id: 7,
      title: "Schedule Team Meeting",
      description: 'Tentatively schedule team meeting for Friday the 16th',
      due: '05/12/2025',
      completed: false,
      category: 'medium'
    },
    {
      id: 3,
      title: 'Schedule monthly payments',
      description: 'Schedule next months\' monthly payments',
      due: '05/19/2025',
      completed: false,
      category: 'low'
    },
    {
      id: 10,
      title: 'Buy Groceries',
      description: 'Buy groceries for the week.',
      due: '05/12/2025',
      completed: true,
      category: 'low'
    }
  ];
  const [idCount, setIdCount] = useState();
  const [todoData, setTodo] = useState(initialData);

  //Delete Function
  const deleteTodo = (id) => {
    let newTodo = todoData.filter((item) => item.id !== id);
    setTodo(newTodo);
  }

  //Toggle Completed Function
  const toggleCompleted = (todo) => {
    let newTodo = todoData.map((item) => {
      if(item.id === todo.id){
        return { ...item, completed: !item.completed}
      } else {
        return item;
      }
    });
    setTodo(newTodo);
  }

  const addTodo = (newTodo) => {
    setIdCount(idCount + 1)
    let createTodo = {
      id: idCount,
      title: newTodo[0],
      description: newTodo[1],
      due: newTodo[2],
      category: newTodo[3],
      completed: false
    }
    setTodo([...todoData, createTodo]);
  }

  return (
    <main>
      <AddTodo
        handleNewTodo={addTodo}
      />
      <div className="lists-container">
        <TodoList
          todos={todoData}
          handleCompleted={toggleCompleted}
          handleDelete={deleteTodo}
        />
        <CompletedTodo
          todos={todoData}
          handleCompleted={toggleCompleted}
        />
      </div>
    </main>
  )
}

export default App;
