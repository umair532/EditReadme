import React, { useContext } from 'react';
import { PetContext } from '../contexts/PetContext.jsx';
import PetItem from './PetItem.jsx';
import { Container } from '@mui/material';

const PetList = () => {
  const { pets, loading, error, page, setPage } = useContext(PetContext);

  if (loading) return <p className="text-center">Loading...</p>;
  if (error) return <p className="text-center text-red-500">Error: {error}</p>;

  const containerStyle = {
    maxWidth: '600px',
    padding: '1rem',
    backgroundColor: '#f9f9f9',
    borderRadius: '8px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)'
  };

  return (
    <Container style={containerStyle}>
      <div className="container mx-auto p-4">
        {pets.length === 0 ? (
          <p className="text-center">No pets found.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {pets.map((pet) => (
              <PetItem key={pet.id} pet={pet} />
            ))}
          </div>
        )}
      </div>
    </Container>
  );
};

export default PetList;
