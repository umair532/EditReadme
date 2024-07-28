// src/services/api.js

import axios from 'axios';

// Access the API base URL from the environment variable
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;


export const fetchPets = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/pets`);
    return response.data.pets;
  } catch (error) {
    console.error('Error fetching pets:', error);
    throw error;
  }
};

export const fetchPetById = async (id) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/pets`, {
      params: { id }
    });
    return response.data.pets[0];
  } catch (error) {
    console.error('Error fetching pet by ID:', error);
    throw error;
  }
};

export const fetchBreedsByAnimal = async (animal) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/breeds`, {
      params: { animal }
    });
    return response.data.breeds;
  } catch (error) {
    console.error('Error fetching breeds:', error);
    throw error;
  }
};

export const searchPets = async (animal, city, breed) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/pets`, {
      params: { animal, city, breed }
    });
    return response.data.pets;
  } catch (error) {
    console.error('Error searching for pets:', error);
    throw error;
  }
};
