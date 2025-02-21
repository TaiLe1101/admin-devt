import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice";

export const store = configureStore({
  reducer: { auth: authReducer },
});

// Lấy RootState
export type RootState = ReturnType<typeof store.getState>;
// Lấy Dispatch
export type AppDispatch = typeof store.dispatch;
