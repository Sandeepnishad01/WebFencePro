import React from 'react';
import { Button, Typography, Container, Box } from '@mui/material';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <Box
      sx={{
        backgroundImage: 'url(/path-to-your-background-image.jpg)', // Add a professional background image here
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#fff',
      }}
    >
      <Container maxWidth="md" sx={{ textAlign: 'center' }}>
        <Typography variant="h2" component="h1" gutterBottom sx={{ fontWeight: 'bold' }}>
          Protect Your Website with WebFencePro
        </Typography>
        <Typography variant="h6" component="p" gutterBottom>
          Advanced Web Application Firewall to safeguard your business from online threats.
        </Typography>
        <Link to="/signup" style={{ textDecoration: 'none' }}>
          <Button
            variant="contained"
            size="large"
            sx={{
              backgroundColor: '#007BFF',
              '&:hover': {
                backgroundColor: '#0056b3',
              },
              mt: 4,
              padding: '10px 20px',
            }}
          >
            Get Started
          </Button>
        </Link>
      </Container>
    </Box>
  );
};

export default HeroSection;
