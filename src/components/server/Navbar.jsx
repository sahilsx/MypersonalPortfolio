"use client";
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import HomeIcon from "@mui/icons-material/Home";
import WorkIcon from "@mui/icons-material/Work";
import InfoIcon from "@mui/icons-material/Info";
import ContactMailIcon from "@mui/icons-material/ContactMail";
import { useRouter } from "next/navigation";
import { keyframes } from "@emotion/react";

// Gradient animation
const gradientShift = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;
function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleCloseNavMenu = () => setAnchorElNav(null);
  const handleNavigation = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    handleCloseNavMenu();
  };

  // Shared button styling
  const navButton = {
    color: "#fff",
    display: "flex",
    alignItems: "center",
    mx: 2,
    fontFamily: "monospace",
    fontWeight: 700,
    letterSpacing: ".3rem",
    textTransform: "none",
    px: 1,
    py: 0.5,
    "&:hover": {
      background: "rgba(255,255,255,0.15)",
      backdropFilter: "blur(4px)",
    },
  };

  return (
    <AppBar
      position="static"
      sx={{
        backgroundImage: `linear-gradient(270deg, #AA00FF, #FF0080, #00D4FF, #AA00FF)`,
        backgroundSize: "600% 600%",
        animation: `${gradientShift} 20s ease infinite`,
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* Logo & Brand */}
          <Box sx={{ display: "flex", alignItems: "center", flexGrow: 1 }}>
            <Avatar
              sx={{ width: 56, height: 56, mr: 2, border: "2px solid #fff" }}
              alt="Sahil"
              src="/image/myimg.jpg"
            />
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/"
              sx={{
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "#fff",
                textDecoration: "none",
                fontSize: { xs: "0.9rem", sm: "1.1rem", md: "1.4rem" },
              }}
            >
              Sahil's Portfolio
            </Typography>
          </Box>

          {/* Mobile Navigation */}
          <IconButton
            size="large"
            aria-label="open menu"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleOpenNavMenu}
            sx={{ display: { xs: "flex", md: "none" }, color: "#fff" }}
          >
            <MenuIcon />
          </IconButton>
          <Menu
            id="menu-appbar"
            anchorEl={anchorElNav}
            anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
            keepMounted
            transformOrigin={{ vertical: "top", horizontal: "left" }}
            open={Boolean(anchorElNav)}
            onClose={handleCloseNavMenu}
            sx={{ display: { xs: "block", md: "none" } }}
            PaperProps={{
              sx: {
                background: "rgba(0,0,0,0.6)",
                backdropFilter: "blur(8px)",
              },
            }}
          >
            {[
              { label: "Home", icon: <HomeIcon />, sectionId: "home" },
              { label: "Projects", icon: <WorkIcon />, sectionId: "projects" },
              { label: "About", icon: <InfoIcon />, sectionId: "about" },
              {
                label: "Contact",
                icon: <ContactMailIcon />,
                sectionId: "contact",
              },
            ].map((item) => (
              <MenuItem
                key={item.label}
                onClick={() => handleNavigation(item.sectionId)}
                sx={{ color: "#fff" }}
              >
                {item.icon}
                <Typography sx={{ ml: 1 }}>{item.label}</Typography>
              </MenuItem>
            ))}
          </Menu>

          {/* Desktop Navigation */}
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              justifyContent: "center",
            }}
          >
            <Button
              onClick={() => handleNavigation("home")}
              sx={navButton}
              startIcon={<HomeIcon />}
            >
              Home
            </Button>
            <Button
              onClick={() => handleNavigation("projects")}
              sx={navButton}
              startIcon={<WorkIcon />}
            >
              Projects
            </Button>
            <Button
              onClick={() => handleNavigation("about")}
              sx={navButton}
              startIcon={<InfoIcon />}
            >
              About
            </Button>
            <Button
              onClick={() => handleNavigation("contact")}
              sx={navButton}
              startIcon={<ContactMailIcon />}
            >
              Contact
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

module.exports = ResponsiveAppBar;
