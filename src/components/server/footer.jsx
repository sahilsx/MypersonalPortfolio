"use client";
import React from "react";
import { Box, Container, Typography, IconButton, Link } from "@mui/material";
import { keyframes } from "@emotion/react";

// Gradient background animation - matching the contact section
const gradientShift = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

// Fog effect animation - matching the contact section
const fogShift = keyframes`
  0% { background-position: 0% 0%; }
  50% { background-position: 100% 100%; }
  100% { background-position: 0% 0%; }
`;

function MinimalistFooter() {
  return (
    <Box
      sx={{
        position: "relative",
        overflow: "hidden",
        py: 3,
      }}
    >
      {/* Gradient Background Layer - matching contact section */}
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

      {/* Foggy Overlay - matching contact section */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundImage: `radial-gradient(ellipse at center, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.8) 100%)`,
          backgroundSize: "400% 400%",
          animation: `${fogShift} 60s ease-in-out infinite`,
          zIndex: -1,
        }}
      />

      <Container
        maxWidth="lg"
        sx={{
          position: "relative",
          zIndex: 1,
          textAlign: "center",
        }}
      >
        <Typography
          variant="body2"
          sx={{
            color: "rgba(255, 255, 255, 0.7)",
            fontWeight: 300,
          }}
        >
          © {new Date().getFullYear()} Sahil. All Rights Reserved.
        </Typography>
      </Container>
    </Box>
  );
}

export default MinimalistFooter;
