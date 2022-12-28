import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

const initialState = {
  users: [],
  isLogin: "",
  email: "",
  role: [],
  isLoading: true,
  isError: "",
  error: "",
};

// First, create the the
const temp_login = () => new Promise((resolve, reject) => {
  setTimeout(() => {
    return resolve(true)
  }, 400);
})

const temp_users = () => new Promise((resolve, reject) => {
  setTimeout(() => {
    return [
      {
        id:  1,
        name: 'aaa',
      },
      {
        id:  2,
        name: 'aaa',
      },
      {
        id:  3,
        name: 'aaa',
      },
    ]
  }, 400);
})

export const loginAsync = createAsyncThunk(
  'users/login',
  async () => {
    let res = await temp_login();
    return res;
  }
)
export const usersAsync = createAsyncThunk(
  'users/login',
  async () => {
    let res = await temp_users();
    return res;
  }
)

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action) => {
      state.isLogin = action.payload;
    },
    logOut: (state, action) => {
      state.isLogin = action.payload;
    },
  },
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(loginAsync.fulfilled, (state, action) => {
      // Add user to the state array
      state.isLogin = action.payload;
    })
    // .addCase(usersAsync.fulfilled, (state, action) => {
    //   // Add user to the state array
    //   state.users = action.payload;
    //   console.log(action.payload);
    // })
  },
});


export const { login, logOut } = authSlice.actions;

export default authSlice.reducer