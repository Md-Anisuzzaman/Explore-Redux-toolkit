import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
    products: [],
    product: {},
    isLoading: false,
    isError: false,
    error: "",
};

export const getproducts = createAsyncThunk("products/getproducts", async () => {
    const res = await fetch("http://localhost:8000/allproduct")
    const data = await res.json();
    return data;
});

export const addProduct = createAsyncThunk("products/addproduct", async (formData) => {
    const res = await fetch("http://localhost:8000/addproduct", {
        method: 'POST',
        headers: {
        },
        body: formData,
    })
    return await res.json();
});
export const editProduct = createAsyncThunk("products/editProduct", async (formData) => {
    const res = await fetch("http://localhost:8000/editProduct", {
        method: 'POST',
        headers: {
        },
        body: formData,
    })
    return await res.json();
});

export const getProduct = createAsyncThunk("products/getProduct", async (id) => {
    const res = await fetch(`http://localhost:8000/singleProduct/${id}`)
    return await res.json();
});

export const deleteProduct = createAsyncThunk("products/deleteProduct", async (id) => {
    const res = await fetch(`http://localhost:8000/product-delete/${id}`, {
        method: 'DELETE',
    })
    await res.json();
    // return 1;
});



const productSlice = createSlice({
    name: "products",
    initialState,
    extraReducers: (builder) => {
        builder.addCase(getproducts.pending, (state, Action) => {
            state.isLoading = true;
        })
        builder.addCase(getproducts.fulfilled, (state, action) => {
            state.products = action.payload;
            state.isLoading = false;
            state.isError = false;
        })
        builder.addCase(getproducts.rejected, (state, action) => {
            state.products = [];
            state.isLoading = false
            state.isError = true
            state.error = action.error.message
        });
        /* getproducts end*/
        builder.addCase(addProduct.pending, (state, Action) => {
            state.isLoading = true;
        })
        builder.addCase(addProduct.fulfilled, (state, action) => {
            // console.log(action.payload);
            state.isLoading = false;
            state.isError = false;
            state.products.push(action.payload);
        })
        builder.addCase(addProduct.rejected, (state, action) => {
            state.isLoading = false
            state.isError = true
            state.error = action.error.message
        });
        /* addProducts end*/
        builder.addCase(deleteProduct.pending, (state, Action) => {
            state.isLoading = true;
        })
        builder.addCase(deleteProduct.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isError = false;
        })
        builder.addCase(deleteProduct.rejected, (state, action) => {
            state.isLoading = false
            state.isError = true
            state.error = action.error?.message
        });
        builder.addCase(getProduct.fulfilled, (state, action) => {
            state.product = action.payload;
            state.isLoading = false;
            state.isError = false;
        });
    },
});


export default productSlice.reducer;