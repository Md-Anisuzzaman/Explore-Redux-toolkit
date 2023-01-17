import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const login = createAsyncThunk("auth/login", async (formData) => {
    let res = await fetch("http://localhost:8000/login", {
        method: 'POST',
        headers: {
        },
        body: formData,
    })
    let status = res.status
    res = await res.json()
    if (status === 200) {
        // console.log(res.token);
        window.localStorage.setItem('token', res.token);
    }

    return { res, status };
});

export const register = createAsyncThunk("auth/register ", async (formData) => {
    let res = await fetch("http://localhost:8000/register", {
        method: 'POST',
        headers: {
        },
        body: formData,
    })
    let status = res.status
    res = await res.json()
    if (status === 200) {
        window.localStorage.setItem('token', res.token);
    }

    return { res, status };
});

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        loading: false,
        authenticated: false,
        token: null,
        error: null,
        checkloginLoading: false
    },
    reducers: {
        logout: (state) => {
            state.token = null;
            state.authenticated = false;
            state.error = null;
        },

        checkLogIn: (state) => {
            if (localStorage.token) {
                state.authenticated = true;
                state.token = localStorage.token;
            }
            state.checkloginLoading = true;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(login.pending, (state, action) => {
            state.loading = true;
            state.error = null;
        })
        builder.addCase(login.fulfilled, (state, action) => {
            if (action.payload.status === 200) {
                state.token = action.payload.res.token;
                state.authenticated = true;
            }
            state.loading = false;
            state.error = action.payload.res.message;
        })
        builder.addCase(login.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error;
        })
        builder.addCase(register.fulfilled, (state, action) => {
            if (action.payload.status === 200) {
                state.token = action.payload.res.token;
                state.authenticated = true;
            }
            state.loading = false;
            state.error = action.payload.res.message;
        })
    },
});

export const { logout, checkLogIn } = authSlice.actions;
export default authSlice.reducer;