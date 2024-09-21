
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


export const fetchUsers = createAsyncThunk('users/fetchUsers', async () => {
  const response = await axios.get('https://reqres.in/api/users?page=2');
  return response.data.data;
});


export const fetchSingleUser = createAsyncThunk('users/fetchSingleUser', async (userId) => {
  const response = await axios.get(`https://reqres.in/api/users/${userId}`);
  return response.data.data; 
});


export const registerUser = createAsyncThunk('users/registerUser', async (userData) => {
  const response = await axios.post('https://reqres.in/api/register', userData);
  return response.data;
});


export const loginUser = createAsyncThunk('users/loginUser', async (userData) => {
  const response = await axios.post('https://reqres.in/api/login', userData);
  return response.data; 
});

export const deleteUser = createAsyncThunk('users/deleteUser', async (userId) => {
  await axios.delete(`https://reqres.in/api/users/${userId}`);
  return userId;
});

export const createUser = createAsyncThunk('users/createUser', async (userData) => {
  const response = await axios.post('https://reqres.in/api/users', userData);
  return response.data; 
});

const usersSlice = createSlice({
  name: 'users',
  initialState: {
    users: [],
    singleUser: null,
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.users = action.payload;
      })
      .addCase(fetchSingleUser.fulfilled, (state, action) => {
        state.singleUser = action.payload;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.users.push(action.payload); 
      })
      .addCase(loginUser.fulfilled, (state, action) => {
      
      })
      .addCase(deleteUser.fulfilled, (state, action) => {
        state.users = state.users.filter(user => user.id !== action.payload);
      })
      .addCase(createUser.fulfilled, (state, action) => {
        state.users.push(action.payload); 
      });
  },
});

export default usersSlice.reducer;
