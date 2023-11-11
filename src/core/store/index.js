import { configureStore } from '@reduxjs/toolkit'
import userReducer from './features/user/userSlice'
import subjectsStore from './features/subjects/subjectsStore'

export const store = configureStore({
    reducer: {
        user: userReducer,
        subjects: subjectsStore 
    },
})

