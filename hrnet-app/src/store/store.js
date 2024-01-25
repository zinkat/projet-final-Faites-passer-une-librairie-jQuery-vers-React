import { configureStore } from '@reduxjs/toolkit'
import formReducer from './formSlices.js'

export const store = configureStore({
  reducer: {
    form: formReducer,
  },
})
