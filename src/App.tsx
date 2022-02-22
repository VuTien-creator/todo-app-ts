import React, { useState } from 'react';
import './App.css';

import AddToDoComponent from './components/AddToDoComponent'
import ToDoListComponent from './components/ToDoListComponent'

interface ITodo {
  id: number
  title: string
  completed: boolean
}

export interface ITodoList {
  todoList: ITodo[]
}

function App() {

  const [todoList, setTodoList] = useState<ITodoList>({
    todoList: [
      {
        id: 1,
        title: 'asd',
        completed: false,
      }
    ]
  })

  return (
    <div className="App">
      <h2>react To Do app</h2>
      <ToDoListComponent
        // todoList={todoList}
        todoList={todoList.todoList} setTodoList={setTodoList}
      />
      <AddToDoComponent todoList={todoList.todoList} setTodoList={setTodoList} />
    </div>
  );
}

export default App;
