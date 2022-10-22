import React, {FC} from 'react';

type TasksPropsType = {
    id: number
    title: string
    isDone: boolean
}

type TodolistPropsType = {
    title: string
    tasks: Array<TasksPropsType>
    removeTask: (id: number)=> void
    changeFilter: (value: 'all' | 'active' | 'completed') => void
}

const Todolist: FC<TodolistPropsType> = ({title, tasks, removeTask, changeFilter}) => {



    return (
        <div>
            <h3>{title}</h3>
            <div>
                <input/>
                <button>+</button>
            </div>
            <ul>
                {tasks.map((task) => {

                        return (
                            <li key={task.id}>
                                <input type="checkbox" checked={task.isDone}/>
                                <span>{task.title}</span>
                                <button onClick={() => removeTask(task.id)}>✖</button>
                            </li>
                        )}
                )}


            </ul>
            <div>
                <button onClick={()=>changeFilter('all')}>All</button>
                <button onClick={() =>changeFilter('active')}>Active</button>
                <button onClick={() =>changeFilter('completed')}>Completed</button>
            </div>
        </div>
    );
};

export default Todolist;