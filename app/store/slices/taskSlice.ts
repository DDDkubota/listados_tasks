import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { TasksList } from '../../INTERFACES/TASK_INTERFACES'


const initialState: TasksList = {
    tasks: [],
}

export const taskSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
      addTask: (state, action) => {
          state.tasks.push(action.payload);
        },
        
      deleteTask: (state, action) => {
        const taskIdToDelete = action.payload;
        state.tasks = state.tasks.filter((task) => task.id !== taskIdToDelete);
        },
      editTask: (state, action) => {
        const { id, updatedTask } = action.payload;
        const taskIndex = state.tasks.findIndex((task) => task.id === id);
          if (taskIndex !== -1) {
          state.tasks[taskIndex] = { ...state.tasks[taskIndex], ...updatedTask };
          }
        },
  },
})

export const { addTask, deleteTask, editTask } = taskSlice.actions

export default taskSlice.reducer