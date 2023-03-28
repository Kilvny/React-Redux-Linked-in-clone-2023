import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../features/userSlice';

import storage from 'redux-persist/lib/storage';
import { combineReducers } from 'redux';
import {
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist';

const persistConfig = {
    key: 'user',
    storage,
    blacklist: ['logout']
};


export const store = configureStore({
    reducer: {
    user: userReducer,
  },
});

const reducers = combineReducers({ user: userReducer });
const persistedReducer = persistReducer(persistConfig, reducers);

export default configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
});

// redux helps us to manage the flow of data inside on an app 