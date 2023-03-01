import { configureStore } from '@reduxjs/toolkit';
import walletReducer from './wallet';
import languageReducer from './language';

export default configureStore({
  reducer: {
    wallet: walletReducer,
    language: languageReducer,
  }
})