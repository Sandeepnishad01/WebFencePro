import React from 'react';
import { Typography, Box } from '@mui/material';

const Footer = () => {
  return (
    <Box
      sx={{
        textAlign: 'center',
        padding: '20px',
        backgroundColor: '#007BFF',
        color: '#fff',
        marginTop: 'auto',
      }}
    >
      <Typography variant="body2">
        &copy; 2024 WebFencePro | All Rights Reserved
      </Typography>
    </Box>
  );
};

export default Footer;
