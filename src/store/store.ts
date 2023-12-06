import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { articleAPI } from '../services/ArticleService.ts';
import articleReducer from './reducers/ArticleSlice.ts';
import userReducer from './reducers/UserSlice.ts';

const rootReducer = combineReducers({
  userReducer,
  articleReducer,
  [articleAPI.reducerPath]: articleAPI.reducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(articleAPI.middleware),
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
