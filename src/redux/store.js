import { configureStore } from "@reduxjs/toolkit";
import booksReducer from "./Slice/booksSlice";

export const store = configureStore({
  reducer: {
    books: booksReducer,
  }
})