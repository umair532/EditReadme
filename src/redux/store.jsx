import { configureStore } from '@reduxjs/toolkit';
import petsReducer from './reducers/petsReducer.jsx';

const store = configureStore({
  reducer: {
    pets: petsReducer
  }
});

export default store;
