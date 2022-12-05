import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    isDark:false
}

const slice = createSlice({
    name: 'darkmode',
    initialState,
    reducers: {
      change: (state, action) => {
        state.isDark = action.payload;
      },
    },
  })

export default slice;