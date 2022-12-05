import { configureStore } from '@reduxjs/toolkit'
import darkSlice from '../features/dark/darkSlice'
export const store = configureStore({
  reducer: {
    [darkSlice.name]:darkSlice.reducer
  },
})