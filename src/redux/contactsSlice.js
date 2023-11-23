import { createSlice } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
// import { contactsSlice } from './contactsSlice';
import persistReducer from 'redux-persist/es/persistReducer';



export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: { items: [] },
  reducers: {
    addContact: (state, action) => {
      state.items.push(action.payload);
    },
    deleteContact: (state, action) => {
      state.items = state.items.filter(
        contact => contact.id !== action.payload
      );
    },
  },
});


export const getContacts = state => state.contacts.items;

export const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['items'],
};
export const persistedContactsReducer = persistReducer(
  persistConfig,
  contactsSlice.reducer
);

export const { addContact, deleteContact } = contactsSlice.actions;
