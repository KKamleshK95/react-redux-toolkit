import { configureStore } from "@reduxjs/toolkit";
import todoReduer from "../features/todo/todoSlice"

export const store = configureStore({
    reducer: todoReduer  
})

