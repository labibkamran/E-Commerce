import {createSlice} from '@reduxjs/toolkit';
import { use } from 'react';


const authSlice = createSlice({
    name: 'auth',
    initialState: {
        isAuthenticated: false,
        isLoading: false,
        user: null
    },
    reducers: {
        setUser: (state, action) => {
            state.user = action.payload;
        }   
    }
});

export const { setUser } = authSlice.actions;
export default authSlice.reducer;