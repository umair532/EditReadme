import React, { useState, useContext } from 'react';
import { searchPets } from '../services/api';
import { PetContext } from '../contexts/PetContext';
import { Container } from '@mui/material';


const SearchForm = () => {
  const { setPets } = useContext(PetContext);
  const [animal, setAnimal] = useState('');
  const [city, setCity] = useState('');  // Fixed variable name
  const [breed, setBreed] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const pets = await searchPets(animal, city, breed);  // Fixed variable name
      setPets(pets);  // Update pet context with the search results
    } catch (error) {
      console.error('Error searching pets:', error);
      setError('Failed to search pets. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const containerStyle = {
    maxWidth: '600px',
    margin: '2rem auto',
    padding: '0.5rem',
    backgroundColor: '#f9f9f9',
    borderRadius: '8px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)'
  };
  const inputStyle = {
    width: 'calc(33% - 16px)',
    marginBottom: '1rem',
    fontSize: '16px',
    padding: '0.3rem',
    marginRight: '0.3rem',
    border: '1px solid #ccc'
  };

  const buttonStyle = {
    width: '100%',
    marginTop: '1rem',
    fontSize: '16px',
    padding: '0.5rem',
    backgroundColor: '#007bff',
    color: 'white',
    borderRadius: '4px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease'
  };

  const buttonDisabledStyle = {
    ...buttonStyle,
    backgroundColor: '#cccccc'
  };
  

  return (

    <Container style={containerStyle}>
    <form className="p-4" onSubmit={handleSubmit}>
      <input 
        type="text"
        placeholder="Animal"
        value={animal}
        onChange={(e) => setAnimal(e.target.value)}
        className="border p-2 mr-2"
        style={inputStyle}

      />
      <input
        type="text"
        placeholder="Location"
        value={city}  // Fixed variable name
        onChange={(e) => setCity(e.target.value)}
        className="border p-2 mr-2"
        style={inputStyle}

      />
      <input
        type="text"
        placeholder="Breed"
        value={breed}
        onChange={(e) => setBreed(e.target.value)}
        className="border p-2 mr-2"
        style={inputStyle}

      />
      <button type="submit" style={loading ? buttonDisabledStyle : buttonStyle} disabled={loading}>
          {loading ? 'Searching...' : 'Search'}
        </button>
      {error && <p className="text-red-500 mt-2">{error}</p>}
    </form>

  </Container>
    
  );
};

export default SearchForm;
