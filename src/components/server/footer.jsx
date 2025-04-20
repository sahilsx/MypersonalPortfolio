"use client";
import React from "react";
import { Box, Container, Typography, IconButton, Link } from "@mui/material";
import { keyframes } from "@emotion/react";

// Gradient animation
const animatedGradient = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;
function MinimalistFooter() {
  return (
    <Box
      component="footer"
      sx={{
        background:
          "linear-gradient(270deg, #AA00FF, #FF0080, #00D4FF, #AA00FF)",
        backgroundSize: "600% 600%",
        animation: `${animatedGradient} 20s ease infinite`,
        color: "#FFFFFF",
        padding: "20px 0",
        position: "relative",
        bottom: 0,
        width: "100%",
        textAlign: "center",
      }}
    >
      <Container maxWidth="lg">
        <Typography variant="body2" sx={{ color: "#AAAAAA" }}>
          &copy; {new Date().getFullYear()} Sahil. All Rights Reserved.
        </Typography>
      </Container>
    </Box>
  );
}
export default MinimalistFooter;
