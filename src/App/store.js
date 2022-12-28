import { configureStore } from "@reduxjs/toolkit";
import authSlice from "../Features/Auth/authSlice";
// import authSlice from "../Features/Auth/authSlice";


export const store = configureStore({
    reducer: {
        auth: authSlice,
    },
});

export default store;