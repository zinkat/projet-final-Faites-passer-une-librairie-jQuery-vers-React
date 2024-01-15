import { configureStore } from '@reduxjs/toolkit'
import formReducer from './formSlices.js'
import employeeReducer from './employeeSlice .js'
import dataList from './sliceData.js'

export const store = configureStore({
  reducer: {
    form: formReducer,
    employee: employeeReducer,
    sliceData: dataList,
  },
})
