"use client";
import React from "react";
import Slider from "react-slick";
import { motion } from "framer-motion";
import { Box, Typography } from "@mui/material";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { keyframes } from "@emotion/react";

// Gradient animation
const animatedGradient = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

const skills = [
  { name: "JavaScript", icon: "/skills/js.png" },
  { name: "React", icon: "/skills/react.png" },
  { name: "Node.js", icon: "/skills/node.png" },
  { name: "MongoDB", icon: "/skills/mongo.png" },
  { name: "Express", icon: "/skills/express.png" },
  { name: "Sequelize", icon: "/skills/sequelize.png" },
  { name: "Socket.IO", icon: "/skills/socket.png" },
  { name: "Agora", icon: "/skills/agora.png" },
  { name: "Framer Motion", icon: "/skills/framer.png" },
  { name: "Tailwind CSS", icon: "/skills/tailwind.png" },
];

const SkillsSection = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 800,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      { breakpoint: 1200, settings: { slidesToShow: 4 } },
      { breakpoint: 900, settings: { slidesToShow: 3 } },
      { breakpoint: 600, settings: { slidesToShow: 3 } }, // Ensure at least 3 on small screens
    ],
  };

  return (
    <Box
      sx={{
        py: 10,
        background:
          "linear-gradient(270deg, #AA00FF, #FF0080, #00D4FF, #AA00FF)",
        backgroundSize: "600% 600%",
        animation: `${animatedGradient} 20s ease infinite`,
        textAlign: "center",
        color: "#fff",
        height: { xs: "40vh", md: "50vh" },
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <Typography variant="h4" sx={{ mb: 4, fontWeight: "bold" }}>
          My Skills
        </Typography>
      </motion.div>

      <Slider {...settings}>
        {skills.map((skill, index) => (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <Box
              sx={{
                width: "100%",
                maxWidth: 100,
                height: 100,
                borderRadius: "50%",
                background: "rgba(255, 255, 255, 0.1)",
                border: "2px solid rgba(255, 255, 255, 0.4)",
                boxShadow: "0 4px 20px rgba(0,0,0,0.2)",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                backdropFilter: "blur(5px)",
                mx: "auto",
                my: 2,
              }}
            >
              <img
                src={skill.icon}
                alt={skill.name}
                style={{ width: 40, height: 40 }}
              />
              <Typography variant="body2" sx={{ mt: 1, fontWeight: 500 }}>
                {skill.name}
              </Typography>
            </Box>
          </motion.div>
        ))}
      </Slider>
    </Box>
  );
};

export default SkillsSection;
