import { contactsReducer } from './contactsSlice';
import { formReducer } from './formSlice';
// import { reducer } from './reducer';
import { configureStore } from '@reduxjs/toolkit';
// import { reducer } from './reducer';

// export const store = configureStore({ reducer });
export const store = configureStore({
  reducer: {
    contact: contactsReducer,
    form: formReducer,
  },
});
