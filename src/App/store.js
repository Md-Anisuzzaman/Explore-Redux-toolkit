import { configureStore } from "@reduxjs/toolkit";
import authSlice from "../Features/Auth/authSlice";
import productSlice from "../Features/Auth/productSlice";
import userslice from "../Features/Auth/userslice";

export const store = configureStore({
    reducer: {
        auth: authSlice,
        users:userslice,
        products:productSlice,
    },
});

export default store;