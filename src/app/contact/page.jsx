


import React from 'react';
import { Box, Container, Grid, Typography, TextField, Button, Avatar, IconButton } from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';

export default function ContactMe() {
  return (
    <Box
      sx={{
        backgroundColor: '#1E1B2E',
        padding: '50px 20px',
        color: '#FFFFFF',
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            borderBottom: '2px solid #FFFFFF',
            paddingBottom: '20px',
            marginBottom: '40px',
            textAlign: 'center',
          }}
        >
          <Typography variant="h3" component="h3" sx={{ fontWeight: 'bold' }}>
            Contact Me
          </Typography>
        </Box>

        <Grid container spacing={5} alignItems="center">
          {/* Profile Picture and Social Media Icons */}
          <Grid item xs={12} md={6} sx={{ textAlign: 'center' }}>
            <Avatar
              src="https://res.cloudinary.com/dfi2vbznv/image/upload/v1723732226/C360_20240623-203418-53_w8950a.jpg" // Replace with the actual profile image path
              alt="Profile"
              sx={{
                width: 150,
                height: 150,
                margin: '0 auto 20px auto',
                boxShadow: '0 8px 16px rgba(0, 0, 0, 0.3)',
              }}
            />
            <Box>
              <IconButton
                aria-label="Instagram"
                href="https://instagram.com/_sahil.altaf?igshid=NzZlODBkYWE4Ng=="
                target="_blank"
                sx={{ color: '#E1306C', mr: 2 }} // Added space between icons
              >
                <InstagramIcon fontSize="large" />
              </IconButton>
              <IconButton
                aria-label="GitHub"
                href="https://github.com/sahilsx"
                target="_blank"
                sx={{ color: '#FFFFFF', mr: 2 }} // Added space between icons
              >
                <GitHubIcon fontSize="large" />
              </IconButton>
              <IconButton
                aria-label="LinkedIn"
                href="https://www.linkedin.com/public-profile/settings?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_self_edit_contact-info%3Bj5gjHcQzRdm9WSTJgS0lyw%3D%3D"
                target="_blank"
                sx={{ color: '#0A66C2', mr: 2 }} // Added space between icons
              >
                <LinkedInIcon fontSize="large" />
              </IconButton>
              <IconButton
                aria-label="Email"
                href="mailto:itxsaaho@gmail.com"
                sx={{ color: '#D44638' }} // No need for `mr` on the last icon
              >
                <EmailIcon fontSize="large" />
              </IconButton>
            </Box>
          </Grid>

          {/* Contact Form */}
          <Grid item xs={12} md={6}>
            <Box
              component="form"
              sx={{
                backgroundColor: 'rgba(255, 255, 255, 0.1)', // Semi-transparent background
                backdropFilter: 'blur(10px)', // Blur effect for glassmorphism
                borderRadius: '15px',
                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.37)', // Subtle shadow for depth
                padding: '30px',
                border: '1px solid rgba(255, 255, 255, 0.18)', // Optional: adds more glass effect
              }}
            >
              <Typography variant="h5" component="h5" sx={{ fontWeight: 'bold', marginBottom: 2, color: '#FFFFFF' }}>
                Contact Me
              </Typography>
              <TextField
                fullWidth
                label="Name"
                variant="outlined"
                margin="normal"
                InputLabelProps={{ style: { color: '#FFFFFF' } }}
                InputProps={{ style: { color: '#FFFFFF', borderColor: '#FFFFFF' } }}
                sx={{
                  '& .MuiOutlinedInput-root': {
                    '& fieldset': {
                      borderColor: '#FFFFFF',
                    },
                    '&:hover fieldset': {
                      borderColor: '#007BFF',
                    },
                  },
                }}
              />
              <TextField
                fullWidth
                label="Email"
                variant="outlined"
                margin="normal"
                InputLabelProps={{ style: { color: '#FFFFFF' } }}
                InputProps={{ style: { color: '#FFFFFF' } }}
                sx={{
                  '& .MuiOutlinedInput-root': {
                    '& fieldset': {
                      borderColor: '#FFFFFF',
                    },
                    '&:hover fieldset': {
                      borderColor: '#007BFF',
                    },
                  },
                }}
              />
              <TextField
                fullWidth
                label="Subject"
                variant="outlined"
                margin="normal"
                InputLabelProps={{ style: { color: '#FFFFFF' } }}
                InputProps={{ style: { color: '#FFFFFF' } }}
                sx={{
                  '& .MuiOutlinedInput-root': {
                    '& fieldset': {
                      borderColor: '#FFFFFF',
                    },
                    '&:hover fieldset': {
                      borderColor: '#007BFF',
                    },
                  },
                }}
              />
              <TextField
                fullWidth
                label="Message"
                variant="outlined"
                multiline
                rows={4}
                margin="normal"
                InputLabelProps={{ style: { color: '#FFFFFF' } }}
                InputProps={{ style: { color: '#FFFFFF' } }}
                sx={{
                  '& .MuiOutlinedInput-root': {
                    '& fieldset': {
                      borderColor: '#FFFFFF',
                    },
                    '&:hover fieldset': {
                      borderColor: '#007BFF',
                    },
                  },
                }}
              />
              <Button
                type="submit"
                variant="contained"
                sx={{
                  backgroundColor: '#007BFF',
                  color: '#FFFFFF',
                  fontWeight: 'bold',
                  marginTop: '20px',
                  '&:hover': {
                    backgroundColor: '#0056b3',
                  },
                }}
                fullWidth
              >
                Send Message
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

