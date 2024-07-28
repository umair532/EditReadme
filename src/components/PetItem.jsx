// src/components/PetItem.jsx
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { ListItem, ListItemText, Typography } from '@mui/material';

const PetItem = ({ pet }) => {
  return (
    <ListItem alignItems="flex-start">
      
      <ListItemText
        primary={
          <Typography variant="h6" component={Link} to={`/pet/${pet.id}`}>
            {pet.name}
          </Typography>
        }
        
      />
    </ListItem>
  );
};

PetItem.propTypes = {
  pet: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    breed: PropTypes.string.isRequired,
    description: PropTypes.string,
    photo: PropTypes.string,
  }).isRequired,
};

export default PetItem;
