import React, {useState} from 'react';
import './App.css';
import Todolist from "./Todolist";

function App() {
    let [filter, setFilter] = useState<'all'| 'active' | 'completed' >('all')
    let [tasks, setTasks] = useState([
        {id: 1, title: "HTML&CSS", isDone: true},
        {id: 2, title: "JS", isDone: true},
        {id: 3, title: "ReactJS", isDone: false},
        {id: 4, title: "Graph QL", isDone: false},
        {id: 5, title: "React Native", isDone: false},
    ])


    const removeTask = (id: number) => {
        let filterTask = tasks.filter(task => task.id !== id)
        setTasks(filterTask)
    }

    let taskForTodolist = tasks

    if(filter ==='active') {
        taskForTodolist = tasks.filter(task => task.isDone === false )
    }
    if(filter ==='completed') {
        taskForTodolist = tasks.filter(task => task.isDone === true )
    }

    const changeFilter = (value: 'all' | 'active' | 'completed'  ) => {
      setFilter(value)
    }

    return (
        <div className="App">
            <Todolist title="What tp learn"
                      tasks={taskForTodolist}
                      removeTask={removeTask}
                      changeFilter={changeFilter}
            />
            {/*<Todolist title="Songs" tasks={tasks2}/>*/}

        </div>
    );
}

export default App;
