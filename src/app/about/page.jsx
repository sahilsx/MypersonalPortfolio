import React from 'react';
import { Typography, Box, Container, Grid, Avatar } from '@mui/material';

export default function AboutMe() {
  return (
    <Box
      sx={{
        backgroundColor: '#1E1B2E',
        color: '#FFFFFF',
        padding: '50px 20px',
      }}
    >
      <Container maxWidth="lg">
        {/* Section Title */}
        <Box
          sx={{
            borderBottom: '2px solid #FFFFFF',
            paddingBottom: '20px',
            marginBottom: '40px',
            textAlign: 'center',
          }}
        >
          <Typography   className=" animate__animated animate__fadeInBottomLeft animate__infinite animate__slower animate__delay-2s " variant="h3" component="h3" sx={{ fontWeight: 'bold' }}>
            About Me
          </Typography>
        </Box>

        <Grid container spacing={4} alignItems="center">
          {/* Left Side - Text */}
          <Grid item xs={12} md={6}>
            <Typography
              variant="h4"
              component="h1"
              sx={{ fontWeight: 'bold', color: '#AA00FF' }}
              className=" animate__animated animate__rubberBand animate__infinite animate__slower animate__delay-2s " 
            >
              Hi, my name is Sahil Altaf
            </Typography>
            <Typography className=" animate__animated animate__flash animate__infinite animate__slower animate__delay-2s " variant="body1" sx={{ marginTop: 2, lineHeight: 1.8 }}>
              Welcome! I am currently pursuing a BCA. I am a passionate programmer with a diverse set of skills including HTML, CSS, JavaScript, React, Node.js, Express, C#, .NET, and SQL Server. With a strong foundation in both front-end and back-end technologies, I am committed to creating efficient and innovative software solutions. Whether it's building responsive web applications or developing robust server-side logic, I thrive on tackling challenging problems.
            </Typography>
          </Grid>

          {/* Right Side - Image */}
          <Grid item xs={12} md={6}>
            <Box sx={{ display: 'flex', justifyContent: 'center' }}
            className=" animate__animated animate__fadeInUp animate__infinite animate__slower animate__delay-2s "
            >
              <Avatar
                alt="Sahil Altaf"
                src="https://res.cloudinary.com/dfi2vbznv/image/upload/v1723732226/C360_20240623-203418-53_w8950a.jpg" // Replace with the actual image path
                sx={{
                  width: 250,
                  height: 250,
                  border: '5px solid #FFFFFF',
                }}
              />
            </Box>
          </Grid>
        </Grid>
        
        {/* Bottom Border */}
        <Box
          sx={{
            borderBottom: '2px solid #FFFFFF',
            marginTop: '40px',
          }}
        />
      </Container>
    </Box>
  );
}
