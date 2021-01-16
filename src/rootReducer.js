import { combineReducers } from "@reduxjs/toolkit";
import { todoReducer } from "./slice";

export const rootReducer = combineReducers({
    todo: todoReducer
})