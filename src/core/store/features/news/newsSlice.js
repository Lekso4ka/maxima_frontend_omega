import { createSlice } from '@reduxjs/toolkit';


const initialState = {
   data: []
}

export const newsSlice = createSlice({
    name: 'news',
    initialState,
    reducers: {
        getNews: (state, action) => {
            state.data = action.payload
        },
        addNews: (state, action) => {
                
                state.data.push(action.payload)
        },
        dellNews: (state, action) => {
           state.data = state.data.filter(el => el.id !== action.payload)
        }
    },
})

export const { getNews, addNews, dellNews } = newsSlice.actions

export default newsSlice.reducer