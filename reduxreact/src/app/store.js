import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../features/todo/todoSlice";

// Create a Redux store instance
export const store = configureStore({
  reducer: todoReducer,
});
