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

// Fog overlay style
const darkAnimatedOverlay = {
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  backgroundImage: `radial-gradient(ellipse at center, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.8) 100%)`,
  backgroundSize: "400% 400%",
  animation: `${fogShift} 60s ease-in-out infinite`,
  zIndex: 0,
};

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
          html: { margin: 0, padding: 0, scrollBehavior: "smooth" },
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

      {/* Foggy Gradient Layer */}
      <Box
        sx={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundImage: `linear-gradient(270deg, #0f2027, #203a43, #2c5364)`,
          backgroundSize: "500% 500%",
          animation: `${gradientShift} 30s ease infinite`,
          zIndex: -3,
        }}
      />
      <Box sx={{ ...darkAnimatedOverlay, zIndex: -1 }} />

      {/* Hero Section */}
      <Box
        sx={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          position: "relative",
          px: { xs: 2, sm: 4 },
        }}
      >
        <Container
          maxWidth="lg"
          disableGutters
          sx={{ position: "relative", zIndex: 1 }}
        >
          <Grid container spacing={6} alignItems="center">
            {/* Text Column */}
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

            {/* Image Column */}
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
                      src="https://res.cloudinary.com/teepublic/image/private/s--UMnvreyd--/t_Preview/b_rgb:191919,c_limit,f_auto,h_630,q_90,w_630/v1607967119/production/designs/17360049_0.jpg"
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

      {/* Sections */}
      <Box id="skills" sx={{}}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Skills />
        </motion.div>
      </Box>

      <Box id="about" sx={{}}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <AboutMe />
        </motion.div>
      </Box>

      <Box id="projects" sx={{}}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Projects />
        </motion.div>
      </Box>

      <Box id="contact" sx={{}}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <ContactMe />
        </motion.div>
      </Box>
    </>
  );
}
