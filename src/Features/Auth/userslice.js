import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
    users: [],
    isLoading: false,
    isError: false,
    error: "",
};

export const getUsers = createAsyncThunk("users/getUsers", async () => {
    const res = await fetch("http://localhost:8000/allusers")
    const data = await res.json();
    return data;
});

const userSlice = createSlice({
    name: "users",
    initialState,
    reducers: {
        removeUser: (state, action) => {
            state.users = state.users.filter((user) => user.id !== action.payload);
        },
    },
    extraReducers: (builder) => {

        builder.addCase(getUsers.pending, (state, Action) => {
            state.isLoading = true;
        })
        builder.addCase(getUsers.fulfilled, (state, action) => {
            // console.log(action.payload);
            state.users = action.payload
            state.isLoading = false
            state.error = ''
        })
        builder.addCase(getUsers.rejected, (state, action) => {
            state.users = [];
            state.isLoading = false
            state.isError = true
            state.error = action.error.message
        });
    },
});
export const { removeUser} = userSlice.actions
export default userSlice.reducer;