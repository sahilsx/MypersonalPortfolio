import React from 'react';
import { Box, Container, Typography, IconButton, Link } from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';

export default function MinimalistFooter() {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: '#16151e',
        color: '#FFFFFF',
        padding: '20px 0',
        position: 'relative',
        bottom: 0,
        width: '100%',
        textAlign: 'center',
      }}
    >
      <Container style={{ backgroundColor: '#16151e' }} maxWidth="lg">
        <Typography variant="body2" sx={{ color: '#AAAAAA' }}>
          &copy; {new Date().getFullYear()} Sahil. All Rights Reserved.
        </Typography>


       
      </Container>
    </Box>
  );
}
