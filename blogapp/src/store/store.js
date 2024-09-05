import { configureStoe } from "@reduxjs/toolkit";
import authSlice from "./authSlice";

const store = configureStoe({
  reducer: {
    auth: authSlice,
  },
});

export default store;
