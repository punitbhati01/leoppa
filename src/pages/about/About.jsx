import React from 'react';
import { Container, Typography, Paper } from '@mui/material';

export default function About() {
  return (
    <Container maxWidth="md">
      <Paper elevation={3} sx={{ p: 2, my: 5 }}>
        <Typography variant="h3" sx={{ mb: 2 }}>
          About Our Store
        </Typography>
        <Typography variant="body1">
          Welcome to our online store! We are passionate about providing high-quality products to our customers.
        </Typography>
        <Typography variant="body1">
          Our mission is to make shopping convenient, enjoyable, and reliable. Whether you're looking for Product,
          quality, or taste, we've got you covered.
        </Typography>
        <Typography variant="body1">
          Feel free to explore our website, browse our catalog, and discover amazing deals. If you have any questions,
          don't hesitate to reach out to our friendly customer support team.
        </Typography>
        <Typography variant="body1">
          Thank you for choosing us!
        </Typography>
      </Paper>
    </Container>
  )
}
