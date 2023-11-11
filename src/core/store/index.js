import { configureStore } from '@reduxjs/toolkit'
import userReducer from './features/user/userSlice'
import tagSlice from './features/tags/tagSlice'
import subjectsStore from './features/subjects/subjectsStore'

export const store = configureStore({
    reducer: {
        user: userReducer,
        tags: tagSlice,
        subjects: subjectsStore
    },
})

