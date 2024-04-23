import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    status : false,
    userData: null,
    username: null
}

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        login: (state, action) => {
            state.status = true;
            state.userData = action.payload.password;
            state.username = action.payload.username;
        },
        
     }
})

export const {login} = authSlice.actions;

export default authSlice.reducer;