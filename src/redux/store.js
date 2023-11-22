import { configureStore } from '@reduxjs/toolkit';

import { filterSlice } from './filterSlice';
import { contactsSlice } from './contactsSlice';

export const store = configureStore({
  reducer: {
    contacts: contactsSlice.reducer,
    filter: filterSlice.reducer,
  },
});

// import { configureStore } from '@reduxjs/toolkit';

// export const store = configureStore({
//   reducer: {
//     contacts: [],
//     filter: '',
//   },
// });

// import {
//   persistStore,
//   FLUSH,
//   REHYDRATE,
//   PAUSE,
//   PERSIST,
//   PURGE,
//   REGISTER,
// } from 'redux-persist';

// import { filterSlice } from './filterSlice';
// import { persistedContactsReducer } from './contactsSlice';

//     contacts: persistedContactsReducer,
//     contacts: [],
//     filter: filterSlice.reducer,
//   },
// middleware: getDefaultMiddleware =>
//   getDefaultMiddleware({
//     serializableCheck: {
//       ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//     },
//   }),
// });

// export const persistor = persistStore(store);
