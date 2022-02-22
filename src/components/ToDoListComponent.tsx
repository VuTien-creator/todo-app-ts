import React from 'react'
import { ITodoList } from '../App'

interface todoList {
    todoList: ITodoList['todoList']
    setTodoList: React.Dispatch<React.SetStateAction<ITodoList>>
}

const ToDoListComponent: React.FC<todoList> = ({ todoList, setTodoList }) => {

    const handleDeleteTodo = (id: number): void => {
        //remove todo in todoList
        const newTodoList = todoList.filter(todo => {
            return todo.id !== id
        })

        setTodoList({
            todoList: newTodoList
        })
    }

    const handleCheckbox = (id: number): void => {
        const newTodoList = [...todoList]
        const todo = newTodoList.find(todo => todo.id === id)

        if (!todo) {
            alert('something wrong')
            return
        }

        todo.completed = !todo.completed

        setTodoList({
            todoList: [
                ...newTodoList,
            ]
        })
        // console.log(todo.completed)
        // console.log(todoList)

    }

    const renderTodoList = (jobs: todoList['todoList']): JSX.Element[] => {
        return jobs.map(todo => {
            return (
                <li key={todo.id}>
                    <span
                        style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
                    >
                        {todo.title}
                    </span>
                    <input
                        type='checkbox'
                        checked={todo.completed}
                        onChange={() => handleCheckbox(todo.id)}
                    />
                    <button onClick={() => handleDeleteTodo(todo.id)}>X</button>
                </li>
            )
        })
    }


    return (
        <div className="section__todoList" >
            <h2>To Do List</h2>
            <ul>
                {renderTodoList(todoList)}
            </ul>
        </div >
    )
}

export default ToDoListComponent