import React, { useEffect } from 'react';
import { Container, Typography, Button, Box } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import rflct from '../assets/images/rflct.png';

function Principle4() {
  const navigate = useNavigate();

  useEffect(() => {
    // Check local storage to see if the user has accessed the UnlockReflection
    const accessedUnlockReflection = localStorage.getItem('accessedPrinciple4');

    if (!accessedUnlockReflection) {
      alert("You need to complete the quiz first!");
      navigate('/unlockreflection'); // Redirect to UnlockReflection if not accessed
    }
  }, [navigate]);

  return (
    <Container 
      maxWidth="sm" 
      style={{ 
        display: 'flex', 
        flexDirection: 'column', 
        justifyContent: 'center', 
        alignItems: 'center', 
        minHeight: '100vh'
      }} 
    >
      <Typography variant="h3" gutterBottom align="center">
        Reflecting on Principle 4.1
      </Typography>
      
      <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" mt={4}>
        <img src={rflct} alt="reflection" style={{ maxWidth: '100%', height: 'auto', borderRadius: '15px' }} />
        
        <Box mt={4}>
          <Button variant="contained" color="primary" component={Link} to="/infographic">
            View Infograph
          </Button>
        </Box>
      </Box>
    </Container>
  );
}

export default Principle4;
