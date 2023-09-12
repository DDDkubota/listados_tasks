import { configureStore } from '@reduxjs/toolkit'
import taskReducer from './slices/taskSlice'; 
import controlReducer from './slices/controlSlice'; 

export const store = configureStore({
  reducer: {
    tasks: taskReducer,
    loading: controlReducer,

  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch