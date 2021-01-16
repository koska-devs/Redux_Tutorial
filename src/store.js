import { configureStore, applyMiddleware } from "@reduxjs/toolkit";
import { rootReducer } from "./rootReducer";
import logger from "redux-logger";

export const store = configureStore({
    reducer: rootReducer,
    enhancers: [applyMiddleware(logger)]
})