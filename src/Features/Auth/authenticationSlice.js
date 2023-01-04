import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const login = createAsyncThunk("auth/login", async (formData) => {
    const res = await fetch("http://localhost:8000/login", {
        method: 'POST',
        headers: {
        },
        body: formData,
    })
    return await res.json();
});

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        loading: false,
        authenticated: false,
        error: null,
    },
    reducers: {
        logout: (state) => {
            state.authenticated = false;
            state.error = null;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(login.pending, (state, action) => {
            state.loading = true;
            state.error = null;
        })
        builder.addCase(login.fulfilled, (state, action) => {
            console.log(action.payload);
            // state.authenticated = true;
            state.loading = false;
            state.error = null;
        })
        builder.addCase(login.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error;
        })
    },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;