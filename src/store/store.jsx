import { combineReducers, configureStore } from '@reduxjs/toolkit'
import counterReducer from '../store/slice/counterSlice'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' 

const persistConfig = {
  key: 'root',
  storage,
}
const rootReducer =  combineReducers({
  cart: counterReducer,
});

const rootReducerPresested = persistReducer(persistConfig, rootReducer);
export const store = configureStore({
    reducer: rootReducerPresested,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
});
export const persistor = persistStore(store);
