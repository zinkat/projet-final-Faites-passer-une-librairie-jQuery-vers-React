import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  submittedData: [],
};

const employeeSlice = createSlice({
  name: 'employee',
  initialState,
  reducers: {
    addEmployee: (state, action) => {
      state.submittedData.push(action.payload);
    },
  },
});

export const { addEmployee } = employeeSlice.actions;
export default employeeSlice.reducer;
