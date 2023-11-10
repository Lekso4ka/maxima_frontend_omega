import { configureStore } from '@reduxjs/toolkit'
import userReducer from './features/user/userSlice'
import tagSlice from './features/tags/tagSlice'

export const store = configureStore({
    reducer: {
        user: userReducer,
        tags: tagSlice
    },
})