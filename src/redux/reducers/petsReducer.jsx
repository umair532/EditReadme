// src/redux/reducers/petsReducer.jsx

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchPets } from '../../services/api.js';

export const fetchPetsThunk = createAsyncThunk('pets/fetchPets', async () => {
  const pets = await fetchPets();
  return pets;
});

const petsSlice = createSlice({
  name: 'pets',
  initialState: {
    pets: [],
    loading: false,
    error: null
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPetsThunk.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchPetsThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.pets = action.payload;
      })
      .addCase(fetchPetsThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  }
});

export default petsSlice.reducer;
