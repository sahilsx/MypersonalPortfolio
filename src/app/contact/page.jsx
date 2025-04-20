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
} from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { keyframes } from "@emotion/react";
const gradientShift = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;
export default function ContactMe() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
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
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        toast.success("✅ Message sent successfully!");
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
      } else {
        toast.error("❌ Failed to send message. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      toast.error("❌ An unexpected error occurred.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box
      id="contact"
      sx={{
        background:
          "linear-gradient(270deg, #AA00FF, #FF0080, #00D4FF, #AA00FF)",
        backgroundSize: "600% 600%",
        animation: `${gradientShift} 20s ease infinite`,
        py: { xs: 6, md: 10 },
      }}
    >
      <ToastContainer />
      <Container maxWidth="lg">
        <Box
          sx={{
            paddingBottom: "20px",
            marginBottom: "40px",
            textAlign: "center",
          }}
        >
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
                backgroundColor: "#00D4FF",
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
          <Grid item xs={12} md={6} sx={{ textAlign: "center" }}>
            <Avatar
              src="/image/myimg.jpg"
              alt="Profile"
              sx={{
                width: { xs: 180, md: 250 },
                height: { xs: 180, md: 250 },
                margin: "0 auto 20px",
                boxShadow: "0 8px 16px rgba(0, 0, 0, 0.3)",
              }}
              className="animate__animated animate__zoomIn"
            />
            <Box>
              <IconButton
                aria-label="Instagram"
                href="https://instagram.com/_sahil.altaf"
                target="_blank"
                sx={{ color: "#E1306C", mr: 2 }}
              >
                <InstagramIcon fontSize="large" />
              </IconButton>
              <IconButton
                aria-label="GitHub"
                href="https://github.com/sahilsx"
                target="_blank"
                sx={{ color: "#fff", mr: 2 }}
              >
                <GitHubIcon fontSize="large" />
              </IconButton>
              <IconButton
                aria-label="LinkedIn"
                href="https://www.linkedin.com/in/sahil-altaf"
                target="_blank"
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
                backgroundColor: "rgba(255, 255, 255, 0.1)",
                backdropFilter: "blur(10px)",
                borderRadius: "15px",
                boxShadow: "0 8px 32px rgba(0, 0, 0, 0.37)",
                padding: "30px",
                border: "1px solid rgba(255, 255, 255, 0.18)",
              }}
            >
              <Typography
                className="animate__animated animate__fadeInUp"
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
                    "& .MuiOutlinedInput-root": {
                      "& fieldset": { borderColor: "#fff" },
                      "&:hover fieldset": { borderColor: "#007BFF" },
                      "&.Mui-focused fieldset": { borderColor: "#007BFF" },
                    },
                    "& .MuiInputLabel-root": { color: "#fff" },
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
                  backgroundColor: "#007BFF",
                  color: "#fff",
                  "&:hover": { backgroundColor: "#0056b3" },
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
