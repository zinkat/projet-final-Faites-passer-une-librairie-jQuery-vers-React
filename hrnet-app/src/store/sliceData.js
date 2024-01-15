
import { createSlice } from '@reduxjs/toolkit';

// Définissez l'état initial
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

// Exportez les actions
export const { setEmployeeDataStore } = sliceData.actions;

// Exportez le réducteur (reducer)
export default sliceData.reducer;
