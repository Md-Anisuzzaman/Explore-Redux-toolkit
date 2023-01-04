import { configureStore } from "@reduxjs/toolkit";
import authenticationSlice from "../Features/Auth/authenticationSlice";
import productSlice from "../Features/Auth/productSlice";
import userslice from "../Features/Auth/userslice";

export const store = configureStore({
    reducer: {
        auth: authenticationSlice,
        users: userslice,
        products: productSlice,
    },
});

export default store;