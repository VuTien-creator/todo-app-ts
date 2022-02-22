import React, { useState } from 'react'
import { ITodoList } from '../App'

interface todoList {
    todoList: ITodoList['todoList']
    setTodoList: React.Dispatch<React.SetStateAction<ITodoList>>
}

const AddToDoComponent: React.FC<todoList> = ({ todoList, setTodoList }) => {

    const [input, setInput] = useState('')

    const hanldeChangeInput = (e: React.ChangeEvent<HTMLInputElement>): void => {
        setInput(e.target.value)
    }

    const handleSubmitForm = (e: React.FormEvent<HTMLFormElement>): void => {
        e.preventDefault()

        setTodoList({
            todoList: [
                ...todoList,
                {
                    id: todoList.length + 1,
                    title: input,
                    completed: false
                }
            ]
        })
        setInput('')
    }

    return (
        <div className="AddToDo">
            <form onSubmit={handleSubmitForm}>
                <input
                    value={input}
                    onChange={hanldeChangeInput}
                    name='title'
                />
                <button>Add</button>
            </form>
        </div>
    )
}

export default AddToDoComponent