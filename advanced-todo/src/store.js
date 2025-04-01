import { configureStore } from "@reduxjs/toolkit";
import tasksReducer from "../src/features/tasksSlice";
import authReducer from "../src/features/authSlice";
import weatherReducer from "../src/features/weatherSlice";

export const store = configureStore({
  reducer: {
    tasks: tasksReducer,
    auth: authReducer,
    weather: weatherReducer,
  },
});

export default store;