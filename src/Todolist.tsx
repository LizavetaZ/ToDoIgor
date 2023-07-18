import React, {ChangeEvent, KeyboardEvent, useState} from 'react';
import {FilterValuesType} from './App';
import {Button} from "./components/Button";

type TaskType = {
    id: string
    title: string
    isDone: boolean
}

type PropsType = {
    title: string
    tasks: Array<TaskType>
    removeTask: (taskId: string) => void
    changeFilter: (value: FilterValuesType) => void
    addTask: (newTitle: string) => void
}

export function Todolist(props: PropsType) {

    let [title, setTitle] = useState<string>('')
    const onChangeInputHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value)
    }
    const addTaskHandler = () => {
        props.addTask(title)
        setTitle('')
    }

    const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            addTaskHandler()
        }
    }

    const changeFilterAll = () => {
        props.changeFilter("all")
    }
    const changeFilterActive = () => {
        props.changeFilter("active")
    }
    const changeFilterComplited = () => {
        props.changeFilter("completed")
    }
    const changeFilter = (value: FilterValuesType) => {
        props.changeFilter(value)
    }

    const removeTaskHandler = (tID: string) => {
        props.removeTask(tID)
    }

    const mappedTask = props.tasks.map(t => {

        // const removeTaskHandler = () => {
        //     props.removeTask(t.id)
        // }

        return (
            <li key={t.id}>
                <input type="checkbox" checked={t.isDone}/>
                <span>{t.title}</span>
                {/*<button onClick={removeTaskHandler}>x</button>*/}
                {/*<button onClick={() => removeTaskHandler(t.id)}>x</button>*/}
                <Button name={'x'} callBack={() => removeTaskHandler(t.id)} />
            </li>
        )
    })

    return <div>
        <h3>{props.title}</h3>
        <div>
            <input value={title} onChange={onChangeInputHandler} onKeyPress={onKeyPressHandler}/>
            <button onClick={addTaskHandler}>+</button>
        </div>
        <ul>
            {mappedTask}
        </ul>
        <div>
            {/*<button onClick={changeFilterAll}>All</button>*/}
            <Button name={'All'} callBack={() => changeFilter('all')} />
            {/*<button onClick={() => changeFilter('active')}>Active</button>*/}
            <Button name={'active'} callBack={() => changeFilter('active')} />
            {/*<button onClick={() => changeFilter('completed')}>Completed</button>*/}
            <Button name={'completed'} callBack={() => changeFilter('completed')} />
        </div>
    </div>
}
