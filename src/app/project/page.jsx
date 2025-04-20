"use client";
import React from "react";
import {
  Box,
  Container,
  Grid,
  Typography,
  Card,
  CardMedia,
  CardContent,
  Button,
  CardActions,
} from "@mui/material";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { keyframes } from "@emotion/react";

// Background animation
const animatedGradient = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 4000,
  arrows: false,
};

const projects = [
  {
    title: "PIXEL PURCHASE",
    description:
      "A sleek eCommerce platform built with Next.js and MUI, focused on smartphone sales with admin dashboard support.",
    images: ["/image/ppq.png", "/image/pps.png"],
    link: "https://pixelpurchase.vercel.app/",
  },
  {
    title: "GoFood",
    description:
      "A modern food ordering app connecting users with a variety of local and international cuisines.",
    images: ["/image/gofood1.png", "/image/gofood2.png"],
    link: "#",
  },
  {
    title: "Text Utils",
    description:
      "A powerful text utility app for formatting, case conversion, and text analysis in one place.",
    images: ["/image/textutils1.png", "/image/textutils2.png"],
    link: "#",
  },
];

export default function Projects() {
  return (
    <Box
      id="projects"
      sx={{
        backgroundImage: `linear-gradient(270deg, #AA00FF, #FF0080, #00D4FF, #AA00FF)`,
        backgroundSize: "600% 600%",
        animation: `${animatedGradient} 20s ease infinite`,
        py: { xs: 6, md: 10 },
        textAlign: "center",
        minHeight: "50vh",
      }}
    >
      <Container maxWidth="lg">
        <Box sx={{ textAlign: "center", mb: 8 }}>
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
            Projects
          </Typography>
        </Box>

        <Grid container spacing={4}>
          {projects.map((project, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Card
                sx={{
                  backdropFilter: "blur(10px)",
                  background: "rgba(255, 255, 255, 0.05)",
                  borderRadius: "20px",
                  boxShadow: "0 8px 30px rgba(0,0,0,0.4)",
                  overflow: "hidden",
                  display: "flex",
                  flexDirection: "column",
                  height: "100%",
                  transition: "transform 0.3s ease",
                  "&:hover": {
                    transform: "translateY(-8px)",
                  },
                }}
              >
                <Box>
                  <Slider {...sliderSettings}>
                    {project.images.map((img, i) => (
                      <CardMedia
                        key={i}
                        component="img"
                        height="220"
                        image={img}
                        alt={`Image ${i + 1}`}
                        sx={{
                          objectFit: "cover",
                          borderBottom: "2px solid #00D4FF",
                        }}
                      />
                    ))}
                  </Slider>
                </Box>

                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: 700,
                      color: "#00D4FF",
                      mb: 1,
                    }}
                  >
                    {project.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{ color: "#ddd", lineHeight: 1.6 }}
                  >
                    {project.description}
                  </Typography>
                </CardContent>

                <CardActions sx={{ p: 2 }}>
                  <Button
                    fullWidth
                    variant="contained"
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{
                      background: "linear-gradient(90deg, #007BFF, #00D4FF)",
                      color: "#fff",
                      fontWeight: "bold",
                      borderRadius: "30px",
                      textTransform: "none",
                      "&:hover": {
                        background: "linear-gradient(90deg, #0056b3, #00a6cc)",
                      },
                    }}
                  >
                    View Project
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
