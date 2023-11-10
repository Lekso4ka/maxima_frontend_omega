import { createSlice } from '@reduxjs/toolkit';


const initialState = {
   data: [
    {id:1, text: "html"},
    {id:2,text: "javascript"},
    {id:3, text: "python"}
   ]
   
}

export const subjectsStore = createSlice({
    name: 'subjects',
    initialState,
    reducers: {
       addSubjects: (state, action) => {
            
            state.data.push({
                id:state.data[state.date.length -1].id +1,
                text: action.payload
            })
       },
        dellsubjects: (state, action) => {
           state.data = state.data.filter(el => el.id !== action.payload)
        }
    },
})

export const { addSubjects, dellSubjects } = subjectsStore.actions

export default subjectsStore.reducer