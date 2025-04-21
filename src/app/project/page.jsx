"use client";
import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Container,
  Typography,
  Box,
  useTheme,
  useMediaQuery,
  Button,
} from "@mui/material";
import { ExternalLink, ChevronLeft, ChevronRight } from "lucide-react";
import { useInView } from "react-intersection-observer";

// Extended project data with more items
const projects = [
  {
    title: "PIXEL PURCHASE",
    description:
      "A sleek eCommerce platform built with Next.js and MUI, focused on smartphone sales with admin dashboard support.",
    images: ["/image/ppq.png", "/image/pps.png"],
    tags: ["Next.js", "Material UI", "MongoDB", "Redux"],
    link: "https://pixelpurchase.vercel.app/",
  },
  {
    title: "GoFood",
    description:
      "A modern food ordering app connecting users with a variety of local and international cuisines.",
    images: ["/image/gofood1.png", "/image/gofood2.png"],
    tags: ["React", "Node.js", "Express", "MongoDB"],
    link: "#",
  },
  {
    title: "Text Utils",
    description:
      "A powerful text utility app for formatting, case conversion, and text analysis in one place.",
    images: ["/image/textutils1.png", "/image/textutils2.png"],
    tags: ["React", "Bootstrap", "JavaScript"],
    link: "#",
  },
  {
    title: "TravelMate",
    description:
      "A travel planning application that helps users discover destinations and organize their itineraries efficiently.",
    images: ["/image/travel1.png", "/image/travel2.png"],
    tags: ["React Native", "Firebase", "Google Maps API"],
    link: "#",
  },
  {
    title: "DevConnect",
    description:
      "A social platform for developers to share projects, connect with peers, and collaborate on open-source initiatives.",
    images: ["/image/devconnect1.png", "/image/devconnect2.png"],
    tags: ["MERN Stack", "Socket.IO", "JWT Auth"],
    link: "#",
  },
  {
    title: "FinTrack",
    description:
      "A comprehensive financial tracking dashboard for monitoring expenses, investments, and savings goals.",
    images: ["/image/fintrack1.png", "/image/fintrack2.png"],
    tags: ["Vue.js", "D3.js", "Express", "PostgreSQL"],
    link: "#",
  },
];

// Animated background particle component
const ParticleBackground = () => {
  const particleCount = 50;
  const particles = Array.from({ length: particleCount });

  return (
    <Box
      sx={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        overflow: "hidden",
        zIndex: 0,
        mb: { xs: 0.1, md: 0.1 },
      }}
    >
      {particles.map((_, index) => {
        const size = Math.random() * 5 + 1;
        const duration = Math.random() * 20 + 10;
        const initialX = Math.random() * 100;
        const initialY = Math.random() * 100;

        return (
          <Box
            key={index}
            component={motion.div}
            sx={{
              position: "absolute",
              width: size,
              height: size,
              borderRadius: "50%",
              background: "rgba(0, 212, 255, 0.2)",
              boxShadow: "0 0 10px rgba(0, 212, 255, 0.5)",
              filter: "blur(1px)",
              left: `${initialX}%`,
              top: `${initialY}%`,
            }}
            animate={{
              x: [0, Math.random() * 100 - 50],
              y: [0, Math.random() * 100 - 50],
              opacity: [0.2, 0.7, 0.2],
            }}
            transition={{
              duration,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        );
      })}
    </Box>
  );
};

// Project Card Component
const ProjectCard = ({ project, isActive }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  // Carousel controls
  const nextImage = (e) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) =>
      prev === project.images.length - 1 ? 0 : prev + 1
    );
  };
  const prevImage = (e) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) =>
      prev === 0 ? project.images.length - 1 : prev - 1
    );
  };

  // Auto-advance when active
  useEffect(() => {
    if (!isActive) return;
    const timer = setInterval(() => {
      setCurrentImageIndex((prev) =>
        prev === project.images.length - 1 ? 0 : prev + 1
      );
    }, 3000);
    return () => clearInterval(timer);
  }, [isActive, project.images.length]);

  // Motion variants
  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { type: "spring", stiffness: 100, damping: 15 },
    },
    active: {
      scale: 1,
      opacity: 1,
      y: 0,
      rotateY: 0,
      transition: { type: "spring", stiffness: 300, damping: 20 },
    },
    inactive: {
      scale: 0.85,
      opacity: 0.5,
      y: 0,
      transition: { duration: 0.4 },
    },
    exit: { opacity: 0, scale: 0.8, transition: { duration: 0.3 } },
  };

  return (
    <Box
      component={motion.div}
      ref={ref}
      variants={cardVariants}
      initial="hidden"
      animate={inView ? (isActive ? "active" : "inactive") : "hidden"}
      exit="exit"
      sx={{
        backdropFilter: "blur(16px)",
        background: "rgba(18,30,38,0.65)",
        borderRadius: 2,
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        position: "relative",
        boxShadow: "0 8px 20px rgba(0,0,0,0.4)",
        border: "1px solid rgba(255,255,255,0.05)",
        transform: "translateY(0)",
        height: "100%",
      }}
    >
      {/* Image Carousel */}
      <Box sx={{ position: "relative", pt: "56.25%" }}>
        <AnimatePresence initial={false} mode="wait">
          <Box
            key={currentImageIndex}
            component={motion.div}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            sx={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              backgroundImage: `url(${project.images[currentImageIndex]})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
        </AnimatePresence>

        {/* Navigation Arrows */}
        {isActive && (
          <Box
            sx={{
              position: "absolute",
              inset: 0,
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              px: 2,
              zIndex: 2,
              opacity: 0.7,
              transition: "opacity 0.3s ease",
              "&:hover": { opacity: 1 },
            }}
          >
            <Box
              component={motion.div}
              whileTap={{ scale: 0.9 }}
              onClick={prevImage}
              sx={{
                bgcolor: "rgba(0,0,0,0.5)",
                borderRadius: "50%",
                width: 40,
                height: 40,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                color: "#fff",
                backdropFilter: "blur(5px)",
              }}
            >
              <ChevronLeft size={24} />
            </Box>
            <Box
              component={motion.div}
              whileTap={{ scale: 0.9 }}
              onClick={nextImage}
              sx={{
                bgcolor: "rgba(0,0,0,0.5)",
                borderRadius: "50%",
                width: 40,
                height: 40,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                color: "#fff",
                backdropFilter: "blur(5px)",
              }}
            >
              <ChevronRight size={24} />
            </Box>
          </Box>
        )}

        {/* Image Counter */}
        <Box
          sx={{
            position: "absolute",
            bottom: 2,
            right: 2,
            bgcolor: "rgba(0,0,0,0.6)",
            color: "#fff",
            px: 1.5,
            py: 0.5,
            borderRadius: 2,
            fontSize: 12,
            backdropFilter: "blur(5px)",
          }}
        >
          {currentImageIndex + 1}/{project.images.length}
        </Box>
      </Box>

      {/* Content */}
      <Box sx={{ p: 3, display: "flex", flexDirection: "column", flexGrow: 1 }}>
        <Typography
          variant="h5"
          sx={{
            fontWeight: 700,
            mb: 1,
            background: "linear-gradient(90deg,#00D4FF,#7500F8)",
            backgroundClip: "text",
            textFillColor: "transparent",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          {project.title}
        </Typography>
        <Typography
          variant="body2"
          sx={{
            color: "#bbb",
            mb: 2,
            display: "-webkit-box",
            WebkitLineClamp: 3,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
          }}
        >
          {project.description}
        </Typography>
        <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1, mb: 3 }}>
          {project.tags.map((tag, idx) => (
            <Box
              key={idx}
              sx={{
                bgcolor: "rgba(0,212,255,0.1)",
                color: "#00D4FF",
                px: 1.5,
                py: 0.5,
                borderRadius: 2,
                fontSize: 12,
                fontWeight: 500,
                border: "1px solid rgba(0,212,255,0.3)",
              }}
            >
              {tag}
            </Box>
          ))}
        </Box>
        <Box sx={{ mt: "auto", pb: 2 }}>
          <Button
            variant="contained"
            endIcon={<ExternalLink size={16} />}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              width: "100%",
              textTransform: "none",
              fontWeight: 600,
              py: 1.5,
              borderRadius: 2,
            }}
          >
            View Project
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default function Projects() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [currentIndex, setCurrentIndex] = useState(0);
  const autoplayRef = useRef(null);

  const showCarousel = projects.length > 1;
  const visibleCount = showCarousel ? (isMobile ? 1 : 3) : projects.length;

  useEffect(() => {
    if (!showCarousel) return;
    autoplayRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % projects.length);
    }, 4000);
    return () => clearInterval(autoplayRef.current);
  }, [showCarousel, projects.length]);

  const goNext = () => setCurrentIndex((prev) => (prev + 1) % projects.length);
  const goPrev = () =>
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);

  const getVisibleProjects = () => {
    if (!showCarousel) return projects;
    return Array.from({ length: visibleCount }).map((_, i) => {
      const idx = (currentIndex + i) % projects.length;
      return { ...projects[idx], index: idx, isActive: i === 0 };
    });
  };

  const displayed = getVisibleProjects();

  return (
    <Box
      id="projects"
      sx={{
        position: "relative",
        width: "100%",
        minHeight: "100vh",
        py: { xs: 8, md: 12 },
        background:
          "linear-gradient(135deg,#0f2027 0%,#203a43 50%,#2c5364 100%)",
      }}
    >
      <ParticleBackground />
      <Container maxWidth="xl" sx={{ position: "relative", zIndex: 2 }}>
        <Box
          component={motion.div}
          ref={ref}
          initial={{ opacity: 0, y: -30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          sx={{ textAlign: "center", mb: { xs: 6, md: 10 } }}
        >
          <Typography
            variant="h2"
            sx={{
              fontWeight: 800,
              color: "#fff",
              display: "inline-block",
              position: "relative",
              mb: 2,
            }}
          >
            My{" "}
            <Box component="span" sx={{ color: "#00D4FF" }}>
              Portfolio
            </Box>
            <Box
              component={motion.div}
              initial={{ width: 0 }}
              animate={inView ? { width: "100%" } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
              sx={{
                position: "absolute",
                bottom: -10,
                left: 0,
                height: 2,
                background:
                  "linear-gradient(90deg,transparent,#00D4FF,transparent)",
                borderRadius: 1,
              }}
            />
          </Typography>
          <Typography
            variant="h6"
            sx={{ color: "#aaa", maxWidth: 700, mx: "auto", fontWeight: 300 }}
          >
            Showcasing my best work and creative solutions
          </Typography>
        </Box>

        {/* Carousel Controls */}
        {showCarousel && (
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: 2,
              mb: 4,
            }}
          >
            <Box
              component={motion.div}
              whileTap={{ scale: 0.9 }}
              onClick={goPrev}
              sx={{
                p: 1,
                borderRadius: "50%",
                border: "1px solid rgba(0,212,255,0.3)",
                bgcolor: "rgba(0,212,255,0.1)",
                cursor: "pointer",
              }}
            >
              <ChevronLeft size={24} />
            </Box>
            <Box sx={{ display: "flex", gap: 1 }}>
              {projects.map((_, idx) => (
                <Box
                  key={idx}
                  component={motion.div}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setCurrentIndex(idx)}
                  sx={{
                    width: idx === currentIndex ? 24 : 8,
                    height: 8,
                    borderRadius: 4,
                    bgcolor:
                      idx === currentIndex
                        ? "linear-gradient(90deg,#00D4FF,#7500F8)"
                        : "rgba(255,255,255,0.3)",
                    cursor: "pointer",
                    transition: "all 0.3s",
                  }}
                />
              ))}
            </Box>
            <Box
              component={motion.div}
              whileTap={{ scale: 0.9 }}
              onClick={goNext}
              sx={{
                p: 1,
                borderRadius: "50%",
                border: "1px solid rgba(0,212,255,0.3)",
                bgcolor: "rgba(0,212,255,0.1)",
                cursor: "pointer",
              }}
            >
              <ChevronRight size={24} />
            </Box>
          </Box>
        )}

        {/* Projects Display */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            gap: { xs: 2, md: 4 },
            height: 550,
            width: "100%",
          }}
        >
          <AnimatePresence initial={false} mode="sync">
            {displayed.map((proj) => (
              <Box
                key={proj.index}
                sx={{
                  flex: `0 0 ${isMobile ? "100%" : "33.333%"}`,
                  height: "100%",
                  p: 2,
                }}
              >
                <ProjectCard project={proj} isActive={proj.isActive} />
              </Box>
            ))}
          </AnimatePresence>
        </Box>
      </Container>
    </Box>
  );
}
