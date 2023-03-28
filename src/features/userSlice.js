import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import purgeStoredState from 'redux-persist/es/purgeStoredState';
import storage from 'redux-persist/lib/storage';

import {
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist';
import createPersistoid from 'redux-persist/es/createPersistoid';

const persistConfig = {
    key: 'user',
    storage,
    blacklist: ['logout']
};

const initialState = {
  user:null,
};



export const userSlice = createSlice({
  name: 'user',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    login: (state,action) => {
      state.user = action.payload;
      createPersistoid(persistConfig)
    },
    logout: (state) => {
      state.user = null;
      purgeStoredState(persistConfig)
    },
  },

});

export const { login, logout } = userSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors 
export const selectUser = (state) => state.user.user;


export default userSlice.reducer;
