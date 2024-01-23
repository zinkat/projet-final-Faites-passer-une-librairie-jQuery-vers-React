
import { createSlice } from '@reduxjs/toolkit';

// état initial
const initialState = {
  employeeData: null,
};

const sliceData = createSlice({
  name: 'sliceData',
  initialState,
  reducers: {
    setEmployeeDataStore: (state, action) => {
      state.employeeData = action.payload;
    },
  
  },
});

// Exporter les actions
export const { setEmployeeDataStore } = sliceData.actions;

// Exporter le réducteur (reducer)
export default sliceData.reducer;
