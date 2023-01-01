import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
    products: [],
    isLoading: false,
    isError: false,
    error: "",
    endPoint: "getproducts"
};

export const getproducts = createAsyncThunk("products/getproducts", async () => {
    const res = await fetch("http://localhost:8000/allproduct")
    const data = await res.json();
    // console.log("hello",data);

    return data;
});



const productSlice = createSlice({
    name: "products",
    initialState,
    extraReducers: (builder) => {

        builder.addCase(getproducts.pending, (state, Action) => {
            state.isLoading = true;
        })
        builder.addCase(getproducts.fulfilled, (state, action) => {
            // console.log(action.payload);
            state.products = action.payload
            state.isLoading = false
            state.error = ''
        })
        builder.addCase(getproducts.rejected, (state, action) => {
            state.products = [];
            state.isLoading = false
            state.isError = true
            state.error = action.error.message
        });
    },
});

export default productSlice.reducer;