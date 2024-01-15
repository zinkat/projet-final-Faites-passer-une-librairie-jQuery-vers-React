import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  form: {
  firstName: '',
  lastName: '',
  birthDate: '',
  startDate: '',
  street: '',
  city: '',
  zipCode: '',
  selectedState: '',
  selectedDepartment: '',
}};

const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    setFirstName: (state, action) => {
      state.form.firstName = action.payload;
    },
    setLastName: (state, action) => {
      state.form.lastName = action.payload;
    },
    setBirthDate: (state, action) => {
      state.form = { ...state.form, birthDate: action.payload };
    },
    setStartDate: (state, action) => {
      state.form ={...state.form, startDate:action.payload} ;
    },
    setStreet: (state, action) => {
      state.form.street = action.payload;
    },
    setCity: (state, action) => {
      state.form.city = action.payload;
    },
    setZipCode: (state, action) => {
      state.form.zipCode = action.payload;
    },
    setSelectedState: (state, action) => {
      state.form.selectedState = action.payload;
    },
    setSelectedDepartment: (state, action) => {
      state.form.selectedDepartment = action.payload;
    },
    resetForm: (state) => {
      return initialState;
    },
  },
});

export const {
  setFirstName,
  setLastName,
  setBirthDate,
  setStartDate,
  setStreet,
  setCity,
  setZipCode,
  setSelectedState,
  setSelectedDepartment,
  resetForm,
} = formSlice.actions;

export default formSlice.reducer;
