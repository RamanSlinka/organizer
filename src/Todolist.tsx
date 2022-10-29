import React, {ChangeEvent, FC, KeyboardEvent, useState} from 'react'

import {FilterValuesType} from "./App";

type TasksPropsType = {
    id: string
    title: string
    isDone: boolean
}

type TodolistPropsType = {
    title: string
    tasks: Array<TasksPropsType>
    removeTask: (id: string) => void
    changeFilter: (value: FilterValuesType) => void
    addTasks: (title: string) => void
    changeTaskStatus: (id: string, isDone: boolean) => void
}

const Todolist: FC<TodolistPropsType> = ({
                                             title, tasks,
                                             removeTask, changeFilter,
                                             addTasks, changeTaskStatus
                                         }) => {
    let [newTitle, setNewTitle] = useState('')

    const addTaskHandler = () => {
        addTasks(newTitle)
        setNewTitle('')
    }

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setNewTitle(e.currentTarget.value)
    }

    const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            addTaskHandler()
        }
    }

    const onAddClickHandler = () => {
        changeFilter('all')
    }
    const onActiveClickHandler = () => {
        changeFilter('active')
    }
    const onCompletedClickHandler = () => {
        changeFilter('completed')
    }

    return (
        <div>
            <h3>{title}</h3>
            <div>
                <input value={newTitle}
                       onChange={onChangeHandler}
                       onKeyPress={onKeyPressHandler}

                />
                <button onClick={addTaskHandler}>+</button>
            </div>
            <ul>
                {tasks.map((task) => {
                        const onClickHandler = () => {
                            removeTask(task.id)
                        }
                        const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
                            let newIsDoneValue = e.currentTarget.checked
                            changeTaskStatus(task.id, newIsDoneValue)
                        }
                        return (
                            <li key={task.id}>
                                <input type="checkbox"
                                       checked={task.isDone}
                                       onChange={onChangeHandler}
                                />
                                <span>{task.title}</span>
                                <button onClick={onClickHandler}>✖</button>
                            </li>
                        )
                    }
                )}

            </ul>
            <div>
                <button onClick={onAddClickHandler}>All</button>
                <button onClick={onActiveClickHandler}>Active</button>
                <button onClick={onCompletedClickHandler}>Completed</button>
            </div>
        </div>
    );
};

export default Todolist;