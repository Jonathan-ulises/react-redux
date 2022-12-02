import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Task } from '../../model/task.model';

const initialState: Task[] = [
    {
        id: "1",
        title: "Task 1",
        description: "Task 1 description",
        completed: false
    },
    {
        id: "2",
        title: "Task 2",
        description: "Task 2 description",
        completed: false
    },
]

export const taskSlice = createSlice({
    name: 'tasks',
    initialState,
    reducers: {
        addTask: (state, action: PayloadAction<Task>) => {
            state.push(action.payload)
        },
        deleteTask: (state, action: PayloadAction<string>) => {
            const taskFound = state.find(task => task.id === action.payload)
            if (taskFound) {
                state.splice(state.indexOf(taskFound), 1)
            }
        },
        editTask: (state, action: PayloadAction<Task>) => {
            const { id, title, description } = action.payload;

            const foundTask = state.find(task => task.id == id);
            if (foundTask) {
                foundTask.title = title;
                foundTask.description = description
            }
        }
    }

})

export const { addTask } = taskSlice.actions;
export const { deleteTask } = taskSlice.actions;
export const { editTask } = taskSlice.actions;
export default taskSlice.reducer;