import { configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import { tweetsReducer } from './tweets/tweets.slice';
import storage from 'redux-persist/lib/storage';

const userPersistConfig = {
  key: 'tweets',
  storage,
};

export const store = configureStore({
  reducer: {
    tweets: persistReducer(userPersistConfig, tweetsReducer),
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
  devTools: process.env.NODE_ENV === 'development',
});

export const persistor = persistStore(store);
