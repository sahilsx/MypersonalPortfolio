
"use client"
import React, { useState } from 'react';
import { Box, Container, Grid, Typography, TextField, Button, Avatar, IconButton } from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export default function ContactMe() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [loading, setLoading] = React.useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    const { name, email, subject, message } = formData;
    const data = { name, email, subject, message, access_key: 'c7dec8ca-a213-40e5-a412-8c381ad61c3c' };

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        // Handle success
        toast('Message sent successfully!');
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: '',
        });
      } else {
        // Handle errors
        toast.error('Failed to send message. Please try again.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred. Please try again.');
    }finally {
      setLoading(false);
      
    }
  };









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
          <Typography  className=" animate__animated animate__rollIn animate__infinite animate__slower animate__delay-2s "  variant="h3" component="h3" sx={{ fontWeight: 'bold' }}>
            Contact Me
          </Typography>
        </Box>

        <Grid container spacing={5} alignItems="center">
          {/* Profile Picture and Social Media Icons */}
          <Grid item xs={12} md={6} sx={{ textAlign: 'center' }}>
            <Avatar
              src="/image/myimg.jpg" 
              alt="Profile"
              sx={{
                width: 250,
                height: 250,
                margin: '0 auto 20px auto',
                boxShadow: '0 8px 16px rgba(0, 0, 0, 0.3)',
              }}
              className=" animate__animated animate__slideInDown animate__infinite animate__slower animate__delay-2s "
            />
            <Box>
              <IconButton
                aria-label="Instagram"
                href="https://instagram.com/_sahil.altaf?igshid=NzZlODBkYWE4Ng=="
                target="_blank"
                sx={{ color: '#E1306C', mr: 2 }}
                 // Added space between icons
                 className=" animate__animated animate__rubberBand  animate__infinite animate__slower animate__delay-2s "
              >
                <InstagramIcon fontSize="large" />
              </IconButton>
              <IconButton
                aria-label="GitHub"
                href="https://github.com/sahilsx"
                target="_blank"
                sx={{ color: '#FFFFFF', mr: 2 }} // Added space between icons
                 className=" animate__animated animate__shakeY  animate__infinite animate__slower animate__delay-2s "
              >
                <GitHubIcon fontSize="large" />
              </IconButton>
              <IconButton
                aria-label="LinkedIn"
                href="https://www.linkedin.com/public-profile/settings?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_self_edit_contact-info%3Bj5gjHcQzRdm9WSTJgS0lyw%3D%3D"
                target="_blank"
                sx={{ color: '#0A66C2', mr: 2 }} // Added space between icons
                className=" animate__animated animate__wobble animate__infinite animate__slower animate__delay-2s "
              >
                <LinkedInIcon fontSize="large" />
              </IconButton>
              <IconButton
                aria-label="Email"
                href="mailto:itxsaaho@gmail.com"
                sx={{ color: '#D44638' }} // No need for `mr` on the last icon
                className=" animate__animated animate__jello  animate__infinite animate__slower animate__delay-2s "
              >
                <EmailIcon fontSize="large" />
              </IconButton>
            </Box>
          </Grid>

          {/* Contact Form */}
          <Grid item xs={12} md={6}>
          <ToastContainer />
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{
          backgroundColor: 'rgba(255, 255, 255, 0.1)', // Semi-transparent background
          backdropFilter: 'blur(10px)', // Blur effect for glassmorphism
          borderRadius: '15px',
          boxShadow: '0 8px 32px rgba(0, 0, 0, 0.37)', // Subtle shadow for depth
          padding: '30px',
          border: '1px solid rgba(255, 255, 255, 0.18)', // Optional: adds more glass effect
        }}
      >
        <Typography
          className="animate__animated animate__tada animate__infinite animate__slower animate__delay-2s"
          variant="h5"
          component="h5"
          align="center"
          sx={{ fontWeight: 'bold', marginBottom: 2, color: '#FFFFFF' }}
        >
          Contact Me
        </Typography>
        
        <TextField
          fullWidth
          label="Name"
          variant="outlined"
          margin="normal"
          name="name"
          required
          value={formData.name}
          onChange={handleChange}
          InputLabelProps={{ style: { color: '#FFFFFF' } }}
          sx={{
            '& .MuiOutlinedInput-root': {
              '& fieldset': {
                borderColor: '#FFFFFF',
              },
              '&:hover fieldset': {
                borderColor: '#007BFF',
              },
              '&.Mui-focused fieldset': {
                borderColor: '#007BFF',
              },
            },
            '& .MuiInputLabel-root': {
              color: '#FFFFFF',
            },
            '& .MuiInputBase-input': {
              color: '#FFFFFF',
            },
          }}
          className="animate__animated animate__flash animate__infinite animate__slower animate__delay-2s"
        />
        
        <TextField
          fullWidth
          label="Email"
          variant="outlined"
          margin="normal"
          required
          name="email"
          value={formData.email}
          onChange={handleChange}
          InputLabelProps={{ style: { color: '#FFFFFF' } }}
          sx={{
            '& .MuiOutlinedInput-root': {
              '& fieldset': {
                borderColor: '#FFFFFF',
              },
              '&:hover fieldset': {
                borderColor: '#007BFF',
              },
              '&.Mui-focused fieldset': {
                borderColor: '#007BFF',
              },
            },
            '& .MuiInputLabel-root': {
              color: '#FFFFFF',
            },
            '& .MuiInputBase-input': {
              color: '#FFFFFF',
            },
          }}
          className="animate__animated animate__flash animate__infinite animate__slower animate__delay-2s"
        />
        
        <TextField
          fullWidth
          label="Subject"
          variant="outlined"
          margin="normal"
          name="subject"
          required
          value={formData.subject}
          onChange={handleChange}
          InputLabelProps={{ style: { color: '#FFFFFF' } }}
          sx={{
            '& .MuiOutlinedInput-root': {
              '& fieldset': {
                borderColor: '#FFFFFF',
              },
              '&:hover fieldset': {
                borderColor: '#007BFF',
              },
              '&.Mui-focused fieldset': {
                borderColor: '#007BFF',
              },
            },
            '& .MuiInputLabel-root': {
              color: '#FFFFFF',
            },
            '& .MuiInputBase-input': {
              color: '#FFFFFF',
            },
          }}
          className="animate__animated animate__flash animate__infinite animate__slower animate__delay-2s"
        />
        
        <TextField
          fullWidth
          label="Message"
          required
          variant="outlined"
          multiline
          rows={4}
          margin="normal"
          name="message"
          value={formData.message}
          onChange={handleChange}
          InputLabelProps={{ style: { color: '#FFFFFF' } }}
          sx={{
            '& .MuiOutlinedInput-root': {
              '& fieldset': {
                borderColor: '#FFFFFF',
              },
              '&:hover fieldset': {
                borderColor: '#007BFF',
              },
              '&.Mui-focused fieldset': {
                borderColor: '#007BFF',
              },
            },
            '& .MuiInputLabel-root': {
              color: '#FFFFFF',
            },
            '& .MuiInputBase-input': {
              color: '#FFFFFF',
            },
          }}
          className="animate__animated animate__flash animate__infinite animate__slower animate__delay-2s"
        />
        
        <Button
          type="submit"
          variant="contained"
          disabled ={loading}
          sx={{
            backgroundColor: '#007BFF',
            color: '#FFFFFF',
            fontWeight: 'bold',
            marginTop: '20px',
            '&:hover': {
              backgroundColor: '#0056b3',
            },
          }}
          className="animate__animated animate__bounce animate__infinite animate__slower animate__delay-2s"
          fullWidth
        >
          {loading ? "Sending..." : "Send message"}
        </Button>
      </Box>
    </Grid>
        </Grid>
      </Container>
    </Box>
  );
}






















 