import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Container, Typography, Button } from '@mui/material';
import Box from '@mui/material/Box';

function Home() {
  const [exitClicks, setExitClicks] = useState(0);
  const [beginLabel, setBeginLabel] = useState("Begin My Reflection");
  const [exitLabel, setExitLabel] = useState("Exit");

  const handleExitClick = () => {
    setExitClicks(prev => prev + 1);
    if (exitClicks === 0) {
      setExitLabel("Press the other one");
    } else if (exitClicks === 1) {
      setExitLabel("THE OTHER ONE");
    } else if (exitClicks === 2) {
      setBeginLabel("THIS ONE");
    }
  };

  const exitButtonStyle = {
    transform: exitClicks > 0 ? `scale(${1 - exitClicks * 0.1})` : 'scale(1)',
    transition: 'transform 0.3s ease',
  };

  return (
    <Container 
      style={{
        display: 'flex', 
        flexDirection: 'column', 
        justifyContent: 'center', 
        alignItems: 'center', 
        height: '100vh',
      }}
    >
      <Typography variant="h3" gutterBottom align="center">
        Hi, it's Bea 🐝
      </Typography>
      {/* <Typography variant="h4" gutterBottom align="center">
        This is My Reflection on CNO Principle 4.1
      </Typography> */}
      <Typography paragraph align="center">
        Welcome to my <b>reflection on Principle 4.1 of the College of Nurses of Ontario (CNO) Code of Conduct</b>. As a student nurse, I've been learning the importance of self-reflection, especially in terms of my interactions with my peers, professors, and individuals outside of class.
      </Typography>
      
      <Box display="flex" flexDirection="row" gap={2} justifyContent="center" mt={2}>
        <Button 
          variant="contained" 
          color="primary" 
          component={Link} 
          to="/unlock-reflection"  // Navigate to UnlockReflection instead
        >
          {beginLabel}
        </Button>
        <Button 
          variant="contained" 
          color="secondary" 
          onClick={handleExitClick} 
          style={exitButtonStyle}
        >
          {exitLabel}
        </Button>
      </Box>
    </Container>
  );
}

export default Home;
