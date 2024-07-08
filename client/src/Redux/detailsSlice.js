import {createSlice} from '@reduxjs/toolkit'
import { data } from '../../data/db'

const initialState = {
    data
}



export const detailsSlice = createSlice({
    name:"details",
    initialState,
    reducers:{
        datafilter:{
            reducer(state,action){
                state.push(action.payload)
            }
        }
    }

})



export const {datafilter} = detailsSlice.actions
export const alldata = (state) =>state.details;
export default detailsSlice.reducer