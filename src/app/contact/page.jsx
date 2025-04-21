"use client";

import React, { useState } from "react";
import {
  Box,
  Container,
  Grid,
  Typography,
  TextField,
  Button,
  Avatar,
  IconButton,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { keyframes } from "@emotion/react";

// Gradient background animation
const gradientShift = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

// Fog effect animation
const fogShift = keyframes`
  0% { background-position: 0% 0%; }
  50% { background-position: 100% 100%; }
  100% { background-position: 0% 0%; }
`;

export default function ContactMe() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((f) => ({ ...f, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const { name, email, subject, message } = formData;
    const data = {
      name,
      email,
      subject,
      message,
      access_key: "c7dec8ca-a213-40e5-a412-8c381ad61c3c",
    };

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (response.ok) {
        toast.success("✅ Message sent successfully!");
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        toast.error("❌ Failed to send message. Please try again.");
      }
    } catch {
      toast.error("❌ An unexpected error occurred.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box
      id="contact"
      sx={{
        position: "relative",
        minHeight: "100vh",
        py: { xs: 6, md: 10 },
        overflow: "hidden",
        background:
          "linear-gradient(135deg,#0f2027 0%,#203a43 50%,#2c5364 100%)",
        mb: { xs: 0.2, md: 0.2 },
        mt: { xs: 0.2, md: 0.2 },
      }}
    >
      {/* Animated gradient layer */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(270deg,#0f2027,#203a43,#2c5364)",
          backgroundSize: "500% 500%",
          animation: `${gradientShift} 30s ease infinite`,
          zIndex: -2,
        }}
      />

      {/* Fog overlay */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "radial-gradient(ellipse at center, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.8) 100%)",
          backgroundSize: "400% 400%",
          animation: `${fogShift} 60s ease-in-out infinite`,
          zIndex: -1,
        }}
      />

      <ToastContainer />
      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
        <Box sx={{ textAlign: "center", mb: { xs: 4, md: 6 } }}>
          <Typography
            variant="h3"
            sx={{
              fontWeight: "bold",
              color: "#fff",
              display: "inline-block",
              position: "relative",
              "::after": {
                content: '""',
                position: "absolute",
                width: "60%",
                height: "4px",
                background: "linear-gradient(90deg,#00D4FF,#7500F8)",
                bottom: -8,
                left: "20%",
                borderRadius: "2px",
              },
            }}
          >
            Contact Me
          </Typography>
        </Box>

        <Grid container spacing={5} alignItems="center">
          {/* Profile & Socials */}
          <Grid item xs={12} md={6} sx={{ textAlign: "center" }}>
            <Avatar
              src="/image/myimg.jpg"
              alt="Profile"
              sx={{
                width: isMobile ? 140 : 200,
                height: isMobile ? 140 : 200,
                mx: "auto",
                mb: 2,
                boxShadow: "0 8px 16px rgba(0,0,0,0.3)",
              }}
            />
            <Box>
              <IconButton
                aria-label="Instagram"
                href="#"
                sx={{ color: "#E1306C", mr: 2 }}
              >
                <InstagramIcon fontSize="large" />
              </IconButton>
              <IconButton
                aria-label="GitHub"
                href="#"
                sx={{ color: "#fff", mr: 2 }}
              >
                <GitHubIcon fontSize="large" />
              </IconButton>
              <IconButton
                aria-label="LinkedIn"
                href="#"
                sx={{ color: "#0A66C2", mr: 2 }}
              >
                <LinkedInIcon fontSize="large" />
              </IconButton>
              <IconButton
                aria-label="Email"
                href="mailto:itxsaaho@gmail.com"
                sx={{ color: "#D44638" }}
              >
                <EmailIcon fontSize="large" />
              </IconButton>
            </Box>
          </Grid>

          {/* Contact Form */}
          <Grid item xs={12} md={6}>
            <Box
              component="form"
              onSubmit={handleSubmit}
              sx={{
                backgroundColor: "rgba(18,30,38,0.65)",
                backdropFilter: "blur(16px)",
                borderRadius: 3,
                boxShadow: "0 8px 32px rgba(0,0,0,0.37)",
                p: { xs: 2, md: 4 },
                border: "1px solid rgba(255,255,255,0.05)",
              }}
            >
              <Typography
                variant="h5"
                align="center"
                sx={{ fontWeight: "bold", mb: 2, color: "#fff" }}
              >
                Get In Touch
              </Typography>

              {["name", "email", "subject", "message"].map((field) => (
                <TextField
                  key={field}
                  fullWidth
                  label={field.charAt(0).toUpperCase() + field.slice(1)}
                  variant="outlined"
                  margin="normal"
                  name={field}
                  value={formData[field]}
                  onChange={handleChange}
                  required
                  multiline={field === "message"}
                  rows={field === "message" ? 4 : 1}
                  InputLabelProps={{ style: { color: "#fff" } }}
                  sx={{
                    "& .MuiOutlinedInput-root fieldset": {
                      borderColor: "#fff",
                    },
                    "& .MuiOutlinedInput-root:hover fieldset": {
                      borderColor: "#00D4FF",
                    },
                    "& .MuiOutlinedInput-root.Mui-focused fieldset": {
                      borderColor: "#00D4FF",
                    },
                    "& .MuiInputBase-input": { color: "#fff" },
                  }}
                />
              ))}

              <Button
                type="submit"
                variant="contained"
                fullWidth
                disabled={loading}
                sx={{
                  mt: 2,
                  background: "linear-gradient(90deg,#00D4FF,#7500F8)",
                  "&:hover": {
                    background: "linear-gradient(90deg,#00B4DF,#6400D8)",
                  },
                }}
              >
                {loading ? "Sending..." : "Send Message"}
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
