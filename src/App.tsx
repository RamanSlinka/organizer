import React, {useState} from 'react';
import './App.css';
import Todolist from "./Todolist";
import {v1} from "uuid";

export type FilterValuesType = 'all' | 'active' | 'completed'

function App() {
    let [filter, setFilter] = useState<FilterValuesType>('all')

    let [tasks, setTasks] = useState([
        {id: v1(), title: "HTML&CSS", isDone: true},
        {id: v1(), title: "JS", isDone: true},
        {id: v1(), title: "ReactJS", isDone: false},
        {id: v1(), title: "Graph QL", isDone: false},
        {id: v1(), title: "React Native", isDone: false},
    ])

    let addTasks = (title: string) => {
        let task = {id: v1(), title: title, isDone: false};
        let newTask = [task, ...tasks]
        setTasks(newTask)
    }

    const removeTask = (id: string) => {
        let filterTask = tasks.filter(task => task.id !== id)
        setTasks(filterTask)
    }

    let taskForTodolist = tasks

    if (filter === 'active') {
        taskForTodolist = tasks.filter(task => task.isDone === false)
    }
    if (filter === 'completed') {
        taskForTodolist = tasks.filter(task => task.isDone === true)
    }

    const changeFilter = (value: FilterValuesType) => {
        setFilter(value)
    }

    return (
        <div className="App">
            <Todolist title="What tp learn"
                      tasks={taskForTodolist}
                      removeTask={removeTask}
                      changeFilter={changeFilter}
                      addTasks={addTasks}

            />


        </div>
    );
}

export default App;
