import React from 'react';
import { Container, Typography, Box, Button } from '@mui/material';
import { Link } from 'react-router-dom';

function Summary() {
  const handleClose = () => {
    // Redirect to the external URL
    window.location.href = 'https://www.google.ca';
  };

  return (
    <Container 
      maxWidth="sm" 
      style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh' }} 
    >
      <Box textAlign="center">
        <Typography variant="h3" gutterBottom>
          Nursing Reflection Summary
        </Typography>
        <Typography paragraph>
          Principle 4.1 of the CNO Code of Conduct, thus far, has been a compass in my development as a nursing student. The principle emphasizes the need to reflect on my past and current belief systems, and to consider how they may influence my professional conduct and interactions with others within the healthcare setting and in the community as a whole. For in recognizing my own biases and privileges, actively listening, engaging in both introspection and retrospection, and being mindful of inevitable cultural differences, I can adjust my approach and better understand others' perspectives, fostering a more inclusive and respectful environment.
        </Typography>
        <Typography>
          As I continue to learn and grow within the nursing field, I will carry this principle with me, ensuring that the guiding force of my actions and decisions are respect, equity, and self-awareness.
        </Typography>
        
        <Box marginTop={3}>
  <Button 
    variant="contained" 
    color="primary" 
    href="/unlock-reflection" 
    style={{ padding: '10px 20px', minWidth: '150px', marginRight: '10px' }} 
    component={Link} to="/"
  >
    Back to Home
  </Button>
  <Button 
    variant="contained" 
    color="secondary" 
    onClick={handleClose} 
    style={{ padding: '10px 20px', minWidth: '150px' }}
  >
    Close
  </Button>
</Box>

      </Box>
    </Container>
  );
}

export default Summary;
