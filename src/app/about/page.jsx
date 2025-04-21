"use client";
import React, { useCallback } from "react";
import { keyframes } from "@emotion/react";
import {
  Box,
  Typography,
  Grid,
  Paper,
  Container,
  CssBaseline,
  GlobalStyles,
} from "@mui/material";
import { motion } from "framer-motion";
import ParticleBackground from "../particles/page";

// Background animations
const gradientShift = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

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

export default function AboutMe() {
  const particlesInit = useCallback(async (main) => {
    const { loadFull } = await import("tsparticles");
    await loadFull(main);
  }, []);

  return (
    <Box
      id="about"
      sx={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        px: { xs: 2, sm: 4 },
        mb: { xs: 0.1, md: 0.1 },
        overflow: "hidden",
      }}
    >
      {/* Gradient Background Layer */}
      <Box
        sx={{
          position: "absolute",
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

      {/* Particle Background */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: -2,
        }}
      >
        <ParticleBackground init={particlesInit} />
      </Box>

      {/* Foggy Overlay */}
      <Box sx={{ ...darkAnimatedOverlay, zIndex: -1 }} />

      {/* About Section Content */}
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
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Typography
                variant="h3"
                sx={{
                  fontWeight: 700,
                  fontSize: { xs: "2rem", sm: "2.5rem", md: "3.5rem" },
                  color: "#fff",
                  mb: 2,
                  textAlign: { xs: "center", md: "left" },
                }}
              >
                About Me
              </Typography>
              <Typography
                variant="h5"
                sx={{
                  fontWeight: 600,
                  mb: 2,
                  color: "#e0e0e0",
                  textAlign: { xs: "center", md: "left" },
                }}
              >
                Hi, I'm Sahil Altaf 👋
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  lineHeight: 1.8,
                  color: "#cfcfcf",
                  fontSize: "1.1rem",
                  textAlign: { xs: "center", md: "left" },
                }}
              >
                I'm currently pursuing my BCA and love crafting exceptional
                digital experiences. My toolbox includes HTML, CSS, JavaScript,
                React, Node.js, Express, C#, .NET, and SQL Server. I thrive on
                building smooth user interfaces, scalable backends, and solving
                real-world tech problems. Let's build something awesome
                together.
              </Typography>
            </motion.div>
          </Grid>

          {/* Image Column */}
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, scale: 0.85 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  position: "relative",
                }}
              >
                {/* Glowing Blur Effect */}
                <Box
                  sx={{
                    position: "absolute",
                    width: "100%",
                    height: "100%",
                    maxWidth: "400px",
                    borderRadius: "20px",
                    filter: "blur(40px)",
                    background:
                      "linear-gradient(135deg, rgba(0,212,255,0.4), rgba(58,123,213,0.3))",
                    zIndex: 0,
                  }}
                />
                <Paper
                  elevation={8}
                  sx={{
                    borderRadius: "20px",
                    overflow: "hidden",
                    width: { xs: "80%", sm: "70%", md: "100%" },
                    maxWidth: "400px",
                    boxShadow: "0 10px 30px rgba(0,212,255,0.3)",
                    transform: "perspective(1000px) rotateX(5deg)",
                    position: "relative",
                    zIndex: 1,
                  }}
                >
                  <img
                    src="/image/myimg.jpg"
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
  );
}
