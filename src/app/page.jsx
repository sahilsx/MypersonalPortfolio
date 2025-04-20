"use client";
import React, { useCallback } from "react";
import { keyframes } from "@emotion/react";
import {
  Typography,
  Box,
  Button,
  Container,
  Grid,
  Paper,
  CssBaseline,
  GlobalStyles,
} from "@mui/material";
import { motion } from "framer-motion";
import ParticleBackground from "./particles/page";
import Skills from "./skills/page";
import AboutMe from "./about/page";
import Projects from "./project/page";
import ContactMe from "./contact/page";

// Gradient animation
const gradientShift = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

export default function Home() {
  const particlesInit = useCallback(async (main) => {
    const { loadFull } = await import("tsparticles");
    await loadFull(main);
  }, []);

  return (
    <>
      <CssBaseline />
      <GlobalStyles
        styles={{
          html: { margin: 0, padding: 0 },
          body: { margin: 0, padding: 0, overflowX: "hidden" },
        }}
      />

      {/* Particle Background */}
      <Box
        id="home"
        sx={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          zIndex: -2,
        }}
      >
        <ParticleBackground init={particlesInit} />
      </Box>

      {/* Hero Section */}
      <Box
        sx={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          position: "relative",
          backgroundImage: `linear-gradient(270deg, #AA00FF, #FF0080, #00D4FF, #AA00FF)`,
          backgroundSize: "600% 600%",
          animation: `${gradientShift} 20s ease infinite`,
          overflow: "hidden",
          px: { xs: 2, sm: 4 }, // Responsive horizontal padding
        }}
      >
        <Container
          maxWidth="lg"
          disableGutters
          sx={{ position: "relative", zIndex: 1 }}
        >
          <Grid container spacing={6} alignItems="center">
            {/* Text */}
            <Grid item xs={12} md={6}>
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
              >
                <Typography
                  variant="h2"
                  component="h1"
                  sx={{
                    fontWeight: 800,
                    fontSize: { xs: "2rem", sm: "2.5rem", md: "3.5rem" },
                    color: "#fff",
                    mb: 2,
                    textAlign: { xs: "center", md: "left" },
                  }}
                >
                  Hi, I’m{" "}
                  <Box component="span" sx={{ color: "#00D4FF" }}>
                    Sahil Altaf
                  </Box>
                </Typography>
                <Typography
                  variant="h6"
                  sx={{
                    color: "#CCCCCC",
                    fontWeight: 400,
                    fontSize: { xs: "1rem", sm: "1.1rem", md: "1.25rem" },
                    mb: 3,
                    textAlign: { xs: "center", md: "left" },
                  }}
                >
                  A passionate{" "}
                  <Box component="span" sx={{ color: "#00D4FF" }}>
                    Software Engineer
                  </Box>{" "}
                  building digital experiences with clean code and cutting-edge
                  design.
                </Typography>

                <Box
                  sx={{
                    display: "flex",
                    flexDirection: { xs: "column", sm: "row" },
                    gap: 2,
                    justifyContent: { xs: "center", md: "flex-start" },
                  }}
                >
                  <Button
                    variant="contained"
                    href="/SahilAltaf.pdf"
                    target="_blank"
                    sx={{
                      background: "linear-gradient(135deg, #00D4FF, #FF0080)",
                      color: "#fff",
                      px: 3,
                      py: 1.2,
                      fontSize: { xs: "0.9rem", sm: "1rem" },
                      fontWeight: "bold",
                      borderRadius: "12px",
                      textTransform: "none",
                      boxShadow: "0 4px 20px rgba(0,212,255,0.3)",
                      transition: "all 0.3s ease-in-out",
                      "&:hover": {
                        transform: "translateY(-2px)",
                        boxShadow: "0 6px 30px rgba(0,212,255,0.4)",
                      },
                    }}
                  >
                    View Resume
                  </Button>
                  <Button
                    variant="outlined"
                    href="https://github.com/sahilsx"
                    sx={{
                      borderColor: "#00D4FF",
                      color: "#00D4FF",
                      px: 3,
                      py: 1.2,
                      fontSize: { xs: "0.9rem", sm: "1rem" },
                      fontWeight: "bold",
                      borderRadius: "12px",
                      textTransform: "none",
                      transition: "all 0.3s ease-in-out",
                      "&:hover": {
                        backgroundColor: "#00D4FF",
                        color: "#fff",
                      },
                    }}
                  >
                    Visit GitHub
                  </Button>
                </Box>
              </motion.div>
            </Grid>

            {/* Image */}
            <Grid item xs={12} md={6}>
              <motion.div
                initial={{ opacity: 0, scale: 0.85 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.3 }}
              >
                <Box sx={{ display: "flex", justifyContent: "center" }}>
                  <Paper
                    elevation={8}
                    sx={{
                      borderRadius: "20px",
                      overflow: "hidden",
                      width: { xs: "80%", sm: "70%", md: "100%" },
                      maxWidth: "400px",
                      boxShadow: "0 10px 30px rgba(0,212,255,0.3)",
                      transform: "perspective(1000px) rotateX(5deg)",
                    }}
                  >
                    <img
                      src="https://media.licdn.com/dms/image/D5612AQEhKguQVjXr4g/article-cover_image-shrink_600_2000/0/1693971265825?e=2147483647&v=beta&t=vRAWRIEHIp6sKRbLxQ_QmHTgjmTRYhj8vOLwlhskjzg"
                      alt="Sahil's Portfolio"
                      style={{
                        width: "100%",
                        height: "auto",
                        display: "block",
                      }}
                    />
                  </Paper>
                </Box>
              </motion.div>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Other Sections */}
      {[Skills, AboutMe, Projects, ContactMe].map((Component, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: index * 0.2 }}
          viewport={{ once: true }}
        >
          <Component />
        </motion.div>
      ))}
    </>
  );
}
