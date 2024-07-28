// src/components/PetDetails.jsx
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Container, CircularProgress, Typography, Card, CardContent, CardMedia } from '@mui/material';
import { fetchPetById } from '../services/api';

const PetDetails = () => {
  const { id } = useParams();
  const [pet, setPet] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadPetDetails = async () => {
      setLoading(true);
      try {
        const data = await fetchPetById(id);
        setPet(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    loadPetDetails();
  }, [id]);

  if (loading) return <CircularProgress />;
  if (error) return <Typography color="error">Error: {error}</Typography>;

  return (
    <Container>
      {pet && (
        <Card>
          
          <CardContent>
            <Typography variant="h4" component="div">
              {pet.name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Breed: {pet.breed}
            </Typography>
            <Typography variant="body2" color="text.secondary">
               Location: {pet.city}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Description: {pet.description}
            </Typography>
          </CardContent>
          {pet.images && pet.images.map((image, index) => (
            <CardMedia
              key={index}
              component="img"
              alt={pet.name}
              height="300"
              image={image}
              title={pet.name}
            />
          ))}
        </Card>
      )}
    </Container>
  );
};

export default PetDetails;
