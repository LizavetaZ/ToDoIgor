import type {Meta, StoryObj} from '@storybook/react';
import {AddItemForm, AddItemFormPropsType} from "../AddItemForm";
import {ChangeEvent, KeyboardEvent, useState} from "react";
import {IconButton, TextField} from "@mui/material";
import {AddBox} from "@mui/icons-material";
import {action} from '@storybook/addon-actions'
import {Task} from "../Task";
import {TaskType} from "../Todolist";
import {TaskWithRedux} from "../TaskWithRedux";
import {initialGlobalState, ReduxStoreProviderDecorator} from "../state/ReduxStoreProviderDecorator";
import {useSelector} from "react-redux";
import {AppRootStateType} from "../state/store";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta: Meta<typeof TaskWithRedux> = {
    title: 'ToDoLists/TaskWithRedux',
    component: TaskWithRedux,
    parameters: {
        // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
        layout: 'centered',
    },
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
    tags: ['autodocs'],
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    decorators:[ReduxStoreProviderDecorator],


};

export default meta;
type Story = StoryObj<typeof TaskWithRedux>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args

const TaskWithReduxPresent = () => {
    let task = useSelector<AppRootStateType, TaskType>(state => state.tasks['todolistId1'][0])
    if(!task){
        task = {id:'hjk', title:'Default task', isDone: false}
    }
    return <TaskWithRedux task={task} todolistId={'todolistId1'}/>
}

export const TaskWithReduxStory: Story = {
    render:() => <TaskWithReduxPresent/>
};

