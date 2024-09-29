import React, { useState } from 'react';
import { Container, Typography, Box, Checkbox, FormControlLabel, Button, Grid, CircularProgress } from '@mui/material';
import { useNavigate } from 'react-router-dom';

function UnlockReflection() {
  const [questionStage, setQuestionStage] = useState(1);
  const [selectedAnswers, setSelectedAnswers] = useState({
    assessment: false,
    diagnosis: false,
    planning: false,
    implementation: false,
    evaluation: false,
    who: false,
    indigenous: false,
    cno: false,
    rpnao: false,
  });
  const [loading, setLoading] = useState(false); // Loading state
  const navigate = useNavigate(); 
  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    setSelectedAnswers((prev) => ({
      ...prev,
      [name]: checked,
    }));
  };

  const handleFirstAnswer = () => {
    const { assessment, diagnosis, implementation, evaluation, planning } = selectedAnswers;
    const allRequiredSelected = assessment && diagnosis && implementation && evaluation && planning;
    const anyIncorrectSelected = selectedAnswers.who || selectedAnswers.indigenous || selectedAnswers.cno || selectedAnswers.rpnao;

    if (allRequiredSelected && !anyIncorrectSelected) {
      setQuestionStage(2);
    } else {
      alert("Incorrect answer. Please try again.");
      setSelectedAnswers({
        assessment: false,
        diagnosis: false,
        planning: false,
        implementation: false,
        evaluation: false,
        who: false,
        indigenous: false,
        cno: false,
        rpnao: false,
      });
    }
  };

  const handleSecondAnswer = (isCorrectAnswer) => {
    if (isCorrectAnswer) {
      setLoading(true); // Start loading
      setTimeout(() => {
        localStorage.setItem('accessedPrinciple4', 'true'); // Set local storage item
        navigate('/principle4'); // Navigate to Principle4 after delay
      }, 2000); // 2-second delay
    } else {
      alert("Incorrect answer. Please try again.");
    }
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
      {questionStage === 1 && (
        <>
          <Typography variant="h1" style={{ color: 'green', marginBottom: '60px' }}>
            Unlock the Reflection!
          </Typography>
          <Typography variant="h4" gutterBottom style={{ marginBottom: '30px' }}>
            What constitutes the nursing process?
          </Typography>
          <Typography paragraph style={{ marginBottom: '20px' }}>
            Please select all that apply:
          </Typography>
          <Grid container spacing={2} justifyContent="center">
            <Grid item xs={4}>
              <FormControlLabel
                control={<Checkbox checked={selectedAnswers.assessment} onChange={handleCheckboxChange} name="assessment" />}
                label="A. Assessment"
              />
            </Grid>
            <Grid item xs={4}>
              <FormControlLabel
                control={<Checkbox checked={selectedAnswers.evaluation} onChange={handleCheckboxChange} name="evaluation" />}
                label="B. Evaluation"
              />
            </Grid>
            <Grid item xs={4}>
              <FormControlLabel
                control={<Checkbox checked={selectedAnswers.diagnosis} onChange={handleCheckboxChange} name="diagnosis" />}
                label="C. Diagnosis"
              />
            </Grid>
            <Grid item xs={4}>
              <FormControlLabel
                control={<Checkbox checked={selectedAnswers.implementation} onChange={handleCheckboxChange} name="implementation" />}
                label="D. Implementation"
              />
            </Grid>
            <Grid item xs={4}>
              <FormControlLabel
                control={<Checkbox checked={selectedAnswers.planning} onChange={handleCheckboxChange} name="planning" />}
                label="E. Planning"
              />
            </Grid>
            <Grid item xs={4}>
              <FormControlLabel
                control={<Checkbox checked={selectedAnswers.who} onChange={handleCheckboxChange} name="who" />}
                label="F. The WHO"
              />
            </Grid>
            <Grid item xs={4}>
              <FormControlLabel
                control={<Checkbox checked={selectedAnswers.indigenous} onChange={handleCheckboxChange} name="indigenous" />}
                label="G. Indigenous People"
              />
            </Grid>
            <Grid item xs={4}>
              <FormControlLabel
                control={<Checkbox checked={selectedAnswers.cno} onChange={handleCheckboxChange} name="cno" />}
                label="H. CNO"
              />
            </Grid>
            <Grid item xs={4}>
              <FormControlLabel
                control={<Checkbox checked={selectedAnswers.rpnao} onChange={handleCheckboxChange} name="rpnao" />}
                label="I. RPNAO"
              />
            </Grid>
          </Grid>
          <Button variant="outlined" onClick={handleFirstAnswer} style={{ marginTop: '40px' }}>
            Submit Answers
          </Button>
        </>
      )}

      {questionStage === 2 && (
        <>
          <Typography variant="h2" style={{ color: 'green', marginBottom: '60px' }}>
            Okay, one more for kicks.
          </Typography>
          <Typography variant="h4" gutterBottom style={{ marginBottom: '30px' }}>
            In "Harry Potter and the Order of the Phoenix," what is the name of the ancient prophecy regarding Harry and Voldemort, and what is the specific line that reveals the nature of their connection?
          </Typography>
          <Typography paragraph>
            Please select the correct option:
          </Typography>
          {loading ? (
            <CircularProgress />
          ) : (
            <Box display="flex" flexDirection="column" gap={2}>
              <Button variant="outlined" onClick={() => handleSecondAnswer(false)}>
                A. The Prophecy of the Half-Blood Prince: "He is destined to be defeated by his own."
              </Button>
              <Button variant="outlined" onClick={() => handleSecondAnswer(false)}>
                B. The Prophecy of the Dark Lord: "A child born at the end of July will bring about his downfall."
              </Button>
              <Button variant="outlined" onClick={() => handleSecondAnswer(false)}>
                C. The Prophecy of the Elder Wand: "The one who wields it shall be the master of death."
              </Button>
              <Button variant="outlined" onClick={() => handleSecondAnswer(true)}>
                D. The Prophecy of the Chosen One: "Neither can live while the other survives."
              </Button>
            </Box>
          )}
        </>
      )}
    </Container>
  );
}

export default UnlockReflection;
