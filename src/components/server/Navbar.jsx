




"use client";
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import HomeIcon from '@mui/icons-material/Home';
import WorkIcon from '@mui/icons-material/Work';
import InfoIcon from '@mui/icons-material/Info';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import { height } from '@mui/system';


function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
      <>
    <AppBar style={{ backgroundColor: '#16151e' }}position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* Avatar and Brand on the left */}
          <Box sx={{ display: 'flex', alignItems: 'center', flexGrow: 1, flexShrink: 1 }}>
            <Avatar
              sx={{ width: 60, height: 60, mr: 2 }} // Adjusted size for better responsiveness
              alt="Sahil"
              src="https://res.cloudinary.com/dfi2vbznv/image/upload/v1723732226/C360_20240623-203418-53_w8950a.jpg"
            />
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="#"
              sx={{
                display: { xs: 'none', md: 'flex' }, // Hidden on mobile
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none',
              }}
            >
              Sahil's Portfolio
            </Typography>
            {/* Display brand text on mobile */}
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="#"
              sx={{
                display: { xs: 'flex', md: 'none' }, // Shown on mobile
                flexGrow: 1,
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.1rem',
                color: 'inherit',
                textDecoration: 'none',
                ml: 2, // Margin left for spacing
              }}
            >
              Sahil's Portfolio
            </Typography>
          </Box>

          {/* Mobile menu icon */}
          <IconButton
            size="large"
            aria-label="open menu"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleOpenNavMenu}
            color="inherit"
            sx={{ display: { xs: 'flex', md: 'none' }, mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Menu
            id="menu-appbar"
            anchorEl={anchorElNav}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'left',
            }}
            keepMounted
            transformOrigin={{
              vertical: 'top',
              horizontal: 'left',
            }}
            open={Boolean(anchorElNav)}
            onClose={handleCloseNavMenu}
            sx={{
              display: { xs: 'block', md: 'none' },
            }}
          >
            <MenuItem onClick={handleCloseNavMenu}>
              <Typography textAlign="center">Home</Typography>
            </MenuItem>
            <MenuItem onClick={handleCloseNavMenu}>
              <Typography textAlign="center">Projects</Typography>
            </MenuItem>
            <MenuItem onClick={handleCloseNavMenu}>
              <Typography textAlign="center">About</Typography>
            </MenuItem>
            <MenuItem onClick={handleCloseNavMenu}>
              <Typography textAlign="center">Contact</Typography>
            </MenuItem>
          </Menu>

          {/* Desktop navigation buttons */}
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: 'none', md: 'flex' },
              justifyContent: 'center',
            }}
          >
            <Button
              onClick={handleCloseNavMenu}
              sx={{ fontFamily: 'monospace', fontWeight: 700, letterSpacing: '.3rem', my: 5, marginLeft: 8, color: 'white', display: 'flex', alignItems: 'center' }}
            >
              <HomeIcon sx={{ mr: 1 }} />
              Home
            </Button>
            <Button
              onClick={handleCloseNavMenu}
              sx={{ fontFamily: 'monospace', fontWeight: 700, letterSpacing: '.3rem', my: 5, marginLeft: 8, color: 'white', display: 'flex', alignItems: 'center' }}
            >
              <WorkIcon sx={{ mr: 1 }} />
              Projects
            </Button>
            <Button
              onClick={handleCloseNavMenu}
              sx={{ fontFamily: 'monospace', fontWeight: 700, letterSpacing: '.3rem', my: 5, marginLeft: 8, color: 'white', display: 'flex', alignItems: 'center' }}
            >
              <InfoIcon sx={{ mr: 1 }} />
              About
            </Button>
            <Button
              onClick={handleCloseNavMenu}
              sx={{ fontFamily: 'monospace', fontWeight: 700, letterSpacing: '.3rem', my: 5, marginLeft: 8, color: 'white', display: 'flex', alignItems: 'center' }}
            >
              <ContactMailIcon sx={{ mr: 1 }} />
              Contact
            </Button>
          </Box>

          {/* User menu */}
          {/* <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar
                  sx={{ width: 40, height: 40 }} // Adjusted size for better responsiveness
                  alt="Sahil"
                  src="https://res.cloudinary.com/dfi2vbznv/image/upload/v1723732226/C360_20240623-203418-53_w8950a.jpg"
                />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              <MenuItem onClick={handleCloseUserMenu}>
                <Typography textAlign="center">Profile</Typography>
              </MenuItem>
              <MenuItem onClick={handleCloseUserMenu}>
                <Typography textAlign="center">Account</Typography>
              </MenuItem>
              <MenuItem onClick={handleCloseUserMenu}>
                <Typography textAlign="center">Dashboard</Typography>
              </MenuItem>
              <MenuItem onClick={handleCloseUserMenu}>
                <Typography textAlign="center">Logout</Typography>
              </MenuItem>
            </Menu>
          </Box> */}
        </Toolbar>
      </Container>
      
    </AppBar>
    
  
    </>
  );
 
 
}

export default ResponsiveAppBar;
