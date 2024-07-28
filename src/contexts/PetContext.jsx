// src/contexts/PetContext.jsx
import React, { createContext, useState, useEffect } from 'react';
import { fetchPets } from '../services/api';

export const PetContext = createContext();

export const PetProvider = ({ children }) => {
  const [pets, setPets] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const loadPets = async () => {
      try {
        const fetchedPets = await fetchPets(page);
        setPets(fetchedPets);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };
    loadPets();
  }, [page]);

  return (
    <PetContext.Provider value={{ pets, setPets, loading, error, page, setPage }}>
      {children}
    </PetContext.Provider>
  );
};
