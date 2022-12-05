import { configureStore } from '@reduxjs/toolkit'
import darkSlice from '../features/dark/darkSlice'
import {topicApi} from './api';
export const store = configureStore({
  reducer: {
    [darkSlice.name]:darkSlice.reducer,
    [topicApi.reducerPath]:topicApi.reducer
  },
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware().concat(topicApi.middleware),
})