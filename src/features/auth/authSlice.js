import { createSlice } from "@reduxjs/toolkit";

// create auth slice
const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
    isLoading: false,
    isSuccess: false,
    isError: false,
    message: ""
  },
  reducers: {},
  extraReducers: builder => {}
});

// selectors

// actions

// export
export default authSlice.reducer;
