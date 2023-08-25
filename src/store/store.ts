import {configureStore, combineReducers} from "@reduxjs/toolkit";
import timerSlice from "./timer/timerSlice";
// import storage from 'redux-persist/lib/storage';
// import { persistReducer, persistStore,
//     FLUSH,
//     REHYDRATE,
//     PAUSE,
//     PERSIST,
//     PURGE,
//     REGISTER,
//  } from 'redux-persist';

const rootReduser = combineReducers({
    'timer': timerSlice,
})
// const persistConfig = {
//     key: 'root',
//     storage,
// }

// const persistedReducer = persistReducer(persistConfig, rootReduser)

const store = configureStore({
    reducer: rootReduser,
    // middleware: (getDefaultMiddleware) =>
    // getDefaultMiddleware({
    //   serializableCheck: {
    //     ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    //   },
    // }),
})

export default store;
// export const persistor = persistStore(store)
  
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
