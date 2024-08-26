import React from 'react';
import { Box, Container, Grid, Typography, Card, CardMedia, CardContent, Button } from '@mui/material';

export default function Projects() {
  const projects = [
    {
      title: "Currency Converter",
      description: "The Currency Converter app simplifies global finance by providing instant, accurate currency exchange rates at your fingertips. Whether you're traveling, shopping internationally, or managing investments, this app ensures you're always aware of the latest conversion rates.",
      image: "/images/currency_converter.png", // Replace with actual image path
      link: "#",
    },
    {
      title: "GoFood",
      description: "GoFood is your ultimate companion for exploring a world of culinary delights at your fingertips. Whether you're craving local favorites or adventurous global cuisines, GoFood connects you with a diverse array of food options.",
      image: "/images/gofood.png", // Replace with actual image path
      link: "#",
    },
    {
      title: "Text Utils",
      description: "Text Utils is a versatile web application designed to streamline text manipulation and analysis. It offers a suite of tools for transforming and managing text, including features such as text formatting, case conversion, and word count.",
      image: "/images/text_utils.png", // Replace with actual image path
      link: "#",
    },
  ];

  return (
    <Box
      sx={{
        backgroundColor: '#1E1B2E',
        padding: '50px 20px',
        color: '#FFFFFF',
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
          <Typography variant="h3" component="h3" sx={{ fontWeight: 'bold' }}>
            Projects
          </Typography>
        </Box>

        <Grid container spacing={4}>
          {projects.map((project, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card
                sx={{
                  backgroundColor: '#2E294E',
                  borderRadius: '15px',
                  boxShadow: '0 8px 16px rgba(0, 0, 0, 0.3)',
                  transition: 'transform 0.3s ease',
                  '&:hover': {
                    transform: 'scale(1.05)',
                  },
                }}
              >
                <CardMedia
                  component="img"
                  height="200"
                  image={project.image}
                  alt={project.title}
                  sx={{ borderTopLeftRadius: '15px', borderTopRightRadius: '15px' }}
                />
                <CardContent>
                  <Typography
                    variant="h5"
                    component="h2"
                    sx={{ fontWeight: 'bold', marginBottom: 2 }}
                  >
                    {project.title}
                  </Typography>
                  <Typography variant="body2" sx={{ marginBottom: 2 }}>
                    {project.description}
                  </Typography>
                  <Button
                    variant="contained"
                    href={project.link}
                    sx={{
                      backgroundColor: '#007BFF',
                      color: '#FFFFFF',
                      fontWeight: 'bold',
                      '&:hover': {
                        backgroundColor: '#0056b3',
                      },
                    }}
                    fullWidth
                  >
                    View Project
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
