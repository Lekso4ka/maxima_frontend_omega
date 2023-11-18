import { createSlice } from '@reduxjs/toolkit';


const initialState = {
   data: []
   
}

export const subjectsStore = createSlice({
    name: 'subjects',
    initialState,
    reducers: {
        getSubjects: (state, action) => {
            // Массив с БД
            state.data = action.payload
        },
        addSubjects: (state, action) => {
            // Объект м данными из БД после добавления
            state.data.push(action.payload)
        },
        dellSubjects: (state, action) => {
            // id удаляемого элемента
            state.data = state.data.filter(el => el.id !== action.payload)
        }
    },
})

export const { addSubjects, dellSubjects, getSubjects } = subjectsStore.actions

export default subjectsStore.reducer