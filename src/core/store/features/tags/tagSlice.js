import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    data: [
        {id:1, text: "html"},
        {id:2, text:"js"},
        {id:3, text:"react"}
]
}

export const tagSlice = createSlice({
    name: 'tags',
    initialState,
    reducers: {
        addTags: (state, action) => {
            state.data.push({
                 id: state.data.length[state.data.length - 1].id + 1,
                 tag: action.payload 
            })
           
        },
        dellTags: (state, action) => {

            state.data = state.data.filter(el => el.data !== action.payload)
        }
    }
})


export const { addTags, dellTags } = tagSlice.actions

export default tagSlice.reducer