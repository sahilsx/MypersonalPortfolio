"use client";
import React, { useEffect, useRef } from "react";
import { Box, Container, Typography } from "@mui/material";
import { keyframes } from "@emotion/react";
import { motion } from "framer-motion";

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

// Fog overlay style - matching the main page exactly
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

// Skills carousel animation
const slideLeft = keyframes`
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
`;

// Glow effect for skills
const glowEffect = keyframes`
  0% { box-shadow: 0 0 5px rgba(0, 212, 255, 0.3); }
  50% { box-shadow: 0 0 20px rgba(0, 212, 255, 0.7); }
  100% { box-shadow: 0 0 5px rgba(0, 212, 255, 0.3); }
`;

const Skills = () => {
  const skills = [
    "JavaScript",
    "React",
    "Node.js",
    "Express",
    "MongoDB",
    "PostgreSQL",
    "TypeScript",
    "Git",
    "Next.js",
    "HTML5",
    "CSS3",
    "Redux",
    "GraphQL",
    "AWS",
    "Docker",
  ];

  // Create duplicated array for infinite scroll effect
  const duplicatedSkills = [...skills, ...skills];

  // Reference for the animation
  const animationRef = useRef(null);

  // Pause animation on hover
  useEffect(() => {
    const container = document.querySelector(".skills-track");
    if (container) {
      container.addEventListener("mouseenter", () => {
        container.style.animationPlayState = "paused";
      });
      container.addEventListener("mouseleave", () => {
        container.style.animationPlayState = "running";
      });
    }
  }, []);

  return (
    <Box
      sx={{
        position: "relative",
        minHeight: "40vh",
        px: { xs: 2, sm: 4 },
        py: 0,
        mt: { xs: -16.5, md: -16 },
        mb: { xs: 0.1, md: 0.1 },
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
      }}
    >
      {/* Gradient Layer - exact match to main page */}
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

      {/* Foggy Overlay - exact match to main page */}
      <Box sx={{ ...darkAnimatedOverlay, zIndex: -1 }} />

      {/* Skills Content */}
      <Container maxWidth="lg" sx={{ zIndex: 1, position: "relative" }}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Typography
            variant="h4"
            component="h2"
            sx={{
              color: "#00D4FF",
              textAlign: "center",
              fontWeight: "bold",
              mb: 6,
              position: "relative",
              "&::after": {
                content: '""',
                position: "absolute",
                width: "60px",
                height: "4px",
                backgroundColor: "#00D4FF",
                bottom: -12,
                left: "50%",
                transform: "translateX(-50%)",
                borderRadius: "2px",
              },
            }}
          >
            My Skills
          </Typography>

          {/* Skills Carousel Container */}
          <Box
            sx={{
              width: "100%",
              overflow: "hidden",
              position: "relative",
              "&::before, &::after": {
                content: '""',
                position: "absolute",
                width: "100px",
                height: "100%",
                top: 0,
                zIndex: 2,
              },
              "&::before": {
                left: 0,
                background:
                  "linear-gradient(90deg, #0f2027 0%, transparent 100%)",
              },
              "&::after": {
                right: 0,
                background:
                  "linear-gradient(90deg, transparent 0%, #0f2027 100%)",
              },
            }}
          >
            <Box
              className="skills-track"
              sx={{
                display: "flex",
                width: "fit-content",
                animation: `${slideLeft} 30s linear infinite`,
                "&:hover": {
                  animationPlayState: "paused",
                },
              }}
              ref={animationRef}
            >
              {duplicatedSkills.map((skill, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.1, y: -10 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Box
                    sx={{
                      mx: 2,
                      px: 4,
                      py: 2,
                      borderRadius: "16px",
                      backgroundColor: "rgba(255,255,255,0.07)",
                      color: "#fff",
                      fontWeight: 500,
                      whiteSpace: "nowrap",
                      backdropFilter: "blur(10px)",
                      border: "1px solid rgba(255,255,255,0.1)",
                      transition: "all 0.3s ease",
                      animation: `${glowEffect} ${
                        3 + (index % 5)
                      }s infinite ease-in-out`,
                      "&:hover": {
                        backgroundColor: "rgba(0, 212, 255, 0.15)",
                        color: "#00D4FF",
                        boxShadow: "0 0 25px rgba(0, 212, 255, 0.7)",
                      },
                    }}
                  >
                    {skill}
                  </Box>
                </motion.div>
              ))}
            </Box>
          </Box>

          {/* Mobile Skills Display (for very small screens) */}
          <Box
            sx={{
              display: { xs: "block", sm: "none" },
              mt: 4,
              textAlign: "center",
            }}
          >
            <Typography
              variant="body2"
              sx={{
                color: "rgba(255,255,255,0.7)",
                mb: 2,
              }}
            ></Typography>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Skills;
