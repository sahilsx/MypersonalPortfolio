


import React from 'react';
import { Typography, Box, Button, Container, Grid } from '@mui/material';
import Skills from '@/app/skills/page';
import AboutMe from '@/app/about/page';
import Projects from './project/page';
import ContactMe from './contact/page';
export default function Home() {
  return (
    <>
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        backgroundColor: '#1E1B2E',
        color: '#FFFFFF',
        padding: '0 20px',
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4} alignItems="center">
          {/* Left Side - Image */}
        
          {/* Right Side - Text */}
          <Grid item xs={12} md={6}>
            <Typography variant="h3" component="h1" sx={{ fontWeight: 'bold' }}>
              Hi, my name is <span style={{ color: '#AA00FF' }}>Sahil Altaf</span>
            </Typography>
            <Typography variant="h4" component="h2" sx={{ marginTop: 2, fontWeight: '300' }}>
              And I am a passionate <span style={{ color: '#AA00FF' }}>Software Engineer</span>
            </Typography>
            <Box mt={4}>
              <Button
                variant="contained"
                color="primary"
                sx={{ marginRight: 2, backgroundColor: '#3f51b5' }}
              >
                Download Resume
              </Button>
              <Button
              href='https://github.com/sahilsx'
                variant="contained"
                color="secondary"
                sx={{ backgroundColor: '#f50057' }}
              >
                Visit Github
              </Button>
            </Box>
          </Grid>
           
          <Grid item xs={12} md={6}>
            <img
              src="https://media.licdn.com/dms/image/D5612AQEhKguQVjXr4g/article-cover_image-shrink_600_2000/0/1693971265825?e=2147483647&v=beta&t=vRAWRIEHIp6sKRbLxQ_QmHTgjmTRYhj8vOLwlhskjzg"
              alt="Hero"
              style={{ width: '100%', maxWidth: '400px', margin: '0 auto', display: 'block' }}
            />
          </Grid>
          
        </Grid>
      </Container>
    </Box>
    <Skills/>
    <AboutMe/>
    <Projects/>
    <ContactMe/>
    </>
  );
}
