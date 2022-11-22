import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
  userId:null,
};



export const userSlice = createSlice({
  name: 'user',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    login: (state,action) => {

      state.value = action.payload;
    },
    logout: (state) => {
      state.userId = null;
    },
  },

});

export const { login, logout } = userSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors 
export const selectUser = (state) => state.user.userId;


export default userSlice.reducer;
