import { configureStore } from "@reduxjs/toolkit";
import UserReducer from "./reducer/reducer";
// Create the Redux store
const store = configureStore({
  reducer: {
    user: UserReducer,
  },
});

export default store;
