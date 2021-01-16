import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const name = "todoReducer";

const initialState = {
    todoList: []
    // title,
    // deadline,
    // isCompleted,
}

const reducer = createSlice({
    name,
    initialState,
    reducers: {
        addTodo: (state, action) => ({
            ...state,
            todoList: state.todoList.concat(action.payload)
        })
    }
})

export const todoActions = reducer.actions

export const todoReducer = reducer.reducer