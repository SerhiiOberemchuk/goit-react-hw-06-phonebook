import { createSlice } from '@reduxjs/toolkit';
import { initialState } from './initialState';

export const formSlice = createSlice({
  name: 'form',
  initialState: initialState.form,
  reducers: {
    addName: (state, action) => {
      state.name = action.payload;
    },
    addNumber: (state, action) => {
      state.number = action.payload;
    },
    cleanForm: () => initialState.form,
  },
});
export const formReducer = formSlice.reducer;
export const { addName, addNumber, cleanForm } = formSlice.actions;
