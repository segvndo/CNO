import React, { useState } from 'react';
import '../styles/Infographics.css'; 
import drft3 from '../assets/images/drft3.png';
import { Button, Box, CircularProgress } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';

const Infographic = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSummaryClick = () => {
    setLoading(true); // Set loading state to true
    setTimeout(() => {
      // Simulate a delay (for demonstration purposes)
      setLoading(false); // Reset loading state after 2 seconds
      navigate('/summary'); // Navigate to the Summary page
    }, 2000);
  };

  return (
    <>
      <div className="infographic-container">
        <img src={drft3} alt="Nursing Infographic" />
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '30px' }}>
        <Box display="flex" justifyContent="center" gap={2} marginTop="30px">
          <Button 
            variant="contained" 
            color="primary" 
            href="/unlock-reflection" 
            style={{ padding: '10px 20px', minWidth: '150px' }} 
            component={Link} to="/"
          >
            Back to Home
          </Button>
          <Button
            variant="contained" 
            color="primary" 
            onClick={handleSummaryClick} 
            style={{ padding: '10px 20px', minWidth: '150px' }}
          >
            {loading ? <CircularProgress size={24} style={{ color: 'white' }} /> : "My key takeaways"}
          </Button>
        </Box>
      </div>
    </>
  );
};

export default Infographic;
