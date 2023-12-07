import { createSlice } from "@reduxjs/toolkit";

const CategoriesReducers=createSlice({
    name:"Categories",
    initialState:{
        categoriesMap:[]
    },
    reducers:{
        setCategoriesMap:(state,action)=>{
            state.categoriesMap=action.payload
        }
    }

})
export const {setCategoriesMap}=CategoriesReducers.actions

export default CategoriesReducers.reducer