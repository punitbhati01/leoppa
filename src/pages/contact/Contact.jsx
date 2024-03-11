import React from 'react';
import { Container, Typography, Paper, TextField, Button } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(3),
    boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
    borderRadius: '8px',
    marginTop: '50px'
  },
  heading: {
    fontSize: '32px',
    fontWeight: 'bold',
    marginBottom: theme.spacing(2),
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: theme.spacing(2),
  },
  submitButton: {
    alignSelf: 'flex-end',
  },
}));

export default function Contact() {
  const classes = useStyles();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic (e.g., send data to server)
  };

  return (
    <Container maxWidth="md">
      <Paper elevation={3} className={classes.paper}>
        <Typography variant="h3" className={classes.heading}>
          Contact Us
        </Typography>
        <Typography variant="body1" sx={{ my: 2 }}>
          Have questions or feedback? Reach out to us!
        </Typography>
        <form className={classes.form} onSubmit={handleSubmit}>
          <TextField label="Full Name" variant="outlined" required />
          <TextField label="Email" variant="outlined" type="email" required />
          <TextField
            label="Message"
            variant="outlined"
            multiline
            rows={4}
            required
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            className={classes.submitButton}
          >
            Send
          </Button>
        </form>
      </Paper>
    </Container>
  );
}
