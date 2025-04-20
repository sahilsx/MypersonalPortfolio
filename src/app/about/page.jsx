"use client";
import React from "react";
import {
  Box,
  Typography,
  Grid,
  Avatar,
  Container,
  CssBaseline,
  GlobalStyles,
} from "@mui/material";
import { motion } from "framer-motion";

import { keyframes } from "@emotion/react";

// Gradient animation
const animatedGradient = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;
export default function AboutMe() {
  return (
    <>
      <CssBaseline />
      <GlobalStyles
        styles={{
          body: {
            margin: 0,
            padding: 0,
            background: "#0e0e0e",
            color: "#ffffff",
            fontFamily: "'Inter', sans-serif",
          },
        }}
      />

      <Box
        id="about"
        sx={{
          py: { xs: 8, md: 10 },
          px: 2,
          textAlign: "center",
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background:
            "linear-gradient(270deg, #AA00FF, #FF0080, #00D4FF, #AA00FF)",
          backgroundSize: "600% 600%",
          animation: `${animatedGradient} 20s ease infinite`,
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={6} alignItems="center">
            {/* Image on the left */}
            <Grid item xs={12} md={5}>
              <Box display="flex" justifyContent="center">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1 }}
                >
                  <Avatar
                    alt="Sahil Altaf"
                    src="/image/myimg.jpg"
                    sx={{
                      width: { xs: 180, sm: 180, md: 260 },
                      height: { xs: 180, sm: 180, md: 260 },
                      borderRadius: "50%",
                      boxShadow: "0 20px 40px rgba(0,0,0,0.5)",
                      border: "4px solid #fff",
                    }}
                  />
                </motion.div>
              </Box>
            </Grid>

            {/* Text on the right */}
            <Grid item xs={12} md={7}>
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
              >
                <Typography
                  variant="h3"
                  sx={{
                    fontWeight: 700,
                    color: "#FFF",
                    fontSize: { xs: "2rem", md: "3rem" },
                    mb: 2,
                  }}
                >
                  About Me
                </Typography>

                <Box
                  sx={{
                    backdropFilter: "blur(10px)",
                    backgroundColor: "rgba(255, 255, 255, 0.05)",
                    border: "1px solid rgba(255,255,255,0.1)",
                    borderRadius: "16px",
                    padding: "24px",
                    boxShadow: "0 8px 32px rgba(0,0,0,0.2)",
                  }}
                >
                  <Typography
                    variant="h5"
                    sx={{ fontWeight: 600, mb: 2, color: "#e0e0e0" }}
                  >
                    Hi, I’m Sahil Altaf 👋
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{
                      lineHeight: 1.8,
                      color: "#cfcfcf",
                      fontSize: "1.1rem",
                    }}
                  >
                    I’m currently pursuing my BCA and love crafting exceptional
                    digital experiences. My toolbox includes HTML, CSS,
                    JavaScript, React, Node.js, Express, C#, .NET, and SQL
                    Server. I thrive on building smooth user interfaces,
                    scalable backends, and solving real-world tech problems.
                    Let’s build something awesome together.
                  </Typography>
                </Box>
              </motion.div>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
}
