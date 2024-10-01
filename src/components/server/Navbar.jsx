




// "use client";
// import * as React from 'react';
// import AppBar from '@mui/material/AppBar';
// import Box from '@mui/material/Box';
// import Toolbar from '@mui/material/Toolbar';
// import IconButton from '@mui/material/IconButton';
// import Typography from '@mui/material/Typography';
// import Menu from '@mui/material/Menu';
// import MenuIcon from '@mui/icons-material/Menu';
// import Container from '@mui/material/Container';
// import Avatar from '@mui/material/Avatar';
// import Button from '@mui/material/Button';
// import MenuItem from '@mui/material/MenuItem';
// import HomeIcon from '@mui/icons-material/Home';
// import WorkIcon from '@mui/icons-material/Work';
// import InfoIcon from '@mui/icons-material/Info';
// import ContactMailIcon from '@mui/icons-material/ContactMail';
// import { useRouter } from 'next/navigation';
// import 'animate.css';

// function ResponsiveAppBar() {
//   const [anchorElNav, setAnchorElNav] = React.useState(null);
//   const router = useRouter(); // Correct router import

//   // Open and close handlers for the navigation menu (for mobile)
//   const handleOpenNavMenu = (event) => {
//     setAnchorElNav(event.currentTarget);
//   };
  
//   const handleCloseNavMenu = () => {
//     setAnchorElNav(null); // Close menu after selection
//   };

//   // Handle routing on button clicks
//   const handleNavigation = (path) => {
//     router.push(path);
//     setAnchorElNav(null); // Close menu if mobile menu is open
//   };

//   return (
//     <>
//       <AppBar style={{ backgroundColor: '#16151e', position: 'fixed', top: 0, zIndex: 1000 }}>
//         <Container maxWidth="xl">
//           <Toolbar disableGutters>
//             {/* Avatar and Brand on the left */}
//             <Box sx={{ display: 'flex', alignItems: 'center', flexGrow: 1 }}>
//               <Avatar
//                 sx={{ width: 60, height: 60, mr: 2 }}
//                 alt="Sahil"
//                 src="/image/myimg.jpg"
//               />
//               <Typography
//                 variant="h6"
//                 noWrap
//                 component="a"
//                 href="#"
//                 sx={{
//                   display: { xs: 'none', md: 'flex' },
//                   fontFamily: 'monospace',
//                   fontWeight: 700,
//                   letterSpacing: '.3rem',
//                   color: 'white',
//                   textDecoration: 'none',
//                 }}
//               >
//                 Sahil's Portfolio
//               </Typography>
//             </Box>

//             {/* Mobile menu icon */}
//             <IconButton
//               size="large"
//               aria-label="open menu"
//               aria-controls="menu-appbar"
//               aria-haspopup="true"
//               onClick={handleOpenNavMenu}
//               color="inherit"
//               sx={{ display: { xs: 'flex', md: 'none' } }}
//             >
//               <MenuIcon />
//             </IconButton>
//             <Menu
//               id="menu-appbar"
//               anchorEl={anchorElNav}
//               anchorOrigin={{
//                 vertical: 'bottom',
//                 horizontal: 'left',
//               }}
//               keepMounted
//               transformOrigin={{
//                 vertical: 'top',
//                 horizontal: 'left',
//               }}
//               open={Boolean(anchorElNav)}
//               onClose={handleCloseNavMenu}
//               sx={{ display: { xs: 'block', md: 'none' } }}
//             >
//               <MenuItem onClick={() => handleNavigation('/')}>
//                 <Typography textAlign="center">Home</Typography>
//               </MenuItem>
//               <MenuItem onClick={() => handleNavigation('/project')}>
//                 <Typography textAlign="center">Projects</Typography>
//               </MenuItem>
//               <MenuItem onClick={() => handleNavigation('/about')}>
//                 <Typography textAlign="center">About</Typography>
//               </MenuItem>
//               <MenuItem onClick={() => handleNavigation('/contact')}>
//                 <Typography textAlign="center">Contact</Typography>
//               </MenuItem>
//             </Menu>

//             {/* Desktop navigation buttons */}
//             <Box
//               sx={{
//                 flexGrow: 1,
//                 display: { xs: 'none', md: 'flex' },
//                 justifyContent: 'center',
//               }}
//             >
//               <Button
//                 onClick={() => handleNavigation('/')}
//                 sx={{
//                   my: 2, 
//                   color: 'white', 
//                   display: 'flex', 
//                   alignItems: 'center', 
//                   mx: 2, // Horizontal margin for even spacing
//                   fontFamily: 'monospace', 
//                   fontWeight: 700, 
//                   letterSpacing: '.3rem',
//                 }}
//                 className="animate__animated animate__rubberBand animate__infinite animate__slower"
//               >
//                 <HomeIcon sx={{ mr: 1 }} />
//                 Home
//               </Button>
//               <Button
//                 onClick={() => handleNavigation('/project')}
//                 sx={{
//                   my: 2, 
//                   color: 'white', 
//                   display: 'flex', 
//                   alignItems: 'center', 
//                   mx: 2, // Horizontal margin for even spacing
//                   fontFamily: 'monospace', 
//                   fontWeight: 700, 
//                   letterSpacing: '.3rem',
//                 }}
//                 className="animate__animated animate__shakeY animate__infinite animate__slower"
//               >
//                 <WorkIcon sx={{ mr: 1 }} />
//                 Projects
//               </Button>
//               <Button
//                 onClick={() => handleNavigation('/about')}
//                 sx={{
//                   my: 2, 
//                   color: 'white', 
//                   display: 'flex', 
//                   alignItems: 'center', 
//                   mx: 2, // Horizontal margin for even spacing
//                   fontFamily: 'monospace', 
//                   fontWeight: 700, 
//                   letterSpacing: '.3rem',
//                 }}
//                 className="animate__animated animate__wobble animate__infinite animate__slower"
//               >
//                 <InfoIcon sx={{ mr: 1 }} />
//                 About
//               </Button>
//               <Button
//                 onClick={() => handleNavigation('/contact')}
//                 sx={{
//                   my: 2, 
//                   color: 'white', 
//                   display: 'flex', 
//                   alignItems: 'center', 
//                   mx: 2, // Horizontal margin for even spacing
//                   fontFamily: 'monospace', 
//                   fontWeight: 700, 
//                   letterSpacing: '.3rem',
//                 }}
//                 className="animate__animated animate__jello animate__infinite animate__slower"
//               >
//                 <ContactMailIcon sx={{ mr: 1 }} />
//                 Contact
//               </Button>
//             </Box>
//           </Toolbar>
//         </Container>
//       </AppBar>
//     </>
//   );
// }

// export default ResponsiveAppBar;















// "use client";
// import * as React from 'react';
// import AppBar from '@mui/material/AppBar';
// import Box from '@mui/material/Box';
// import Toolbar from '@mui/material/Toolbar';
// import IconButton from '@mui/material/IconButton';
// import Typography from '@mui/material/Typography';
// import Menu from '@mui/material/Menu';
// import MenuIcon from '@mui/icons-material/Menu';
// import Container from '@mui/material/Container';
// import Avatar from '@mui/material/Avatar';
// import Button from '@mui/material/Button';
// import MenuItem from '@mui/material/MenuItem';
// import HomeIcon from '@mui/icons-material/Home';
// import WorkIcon from '@mui/icons-material/Work';
// import InfoIcon from '@mui/icons-material/Info';
// import ContactMailIcon from '@mui/icons-material/ContactMail';
// import { useRouter } from 'next/navigation';
// import 'animate.css';

// function ResponsiveAppBar() {
//   const [anchorElNav, setAnchorElNav] = React.useState(null);
//   const router = useRouter();

//   const handleOpenNavMenu = (event) => {
//     setAnchorElNav(event.currentTarget);
//   };
  
//   const handleCloseNavMenu = () => {
//     setAnchorElNav(null);
//   };

//   const handleNavigation = (path) => {
//     router.push(path);
//     setAnchorElNav(null);
//   };

//   return (
//     <>
//       <AppBar style={{ backgroundColor: '#16151e', position: 'fixed', top: 0, zIndex: 1000 }}>
//         <Container maxWidth="xl">
//           <Toolbar disableGutters>
//             {/* Avatar and Brand on the left */}
//             <Box sx={{ display: 'flex', alignItems: 'center', flexGrow: 1 }}>
//               <Avatar
//                 sx={{ width: 60, height: 60, mr: 2 }}
//                 alt="Sahil"
//                 src="/image/myimg.jpg"
//               />
//               <Typography
//                 variant="h6"
//                 noWrap
//                 component="a"
//                 href="#"
//                 sx={{
//                   display: 'flex', // Display on all screen sizes
//                   fontFamily: 'monospace',
//                   fontWeight: 700,
//                   letterSpacing: '.3rem',
//                   color: 'white',
//                   textDecoration: 'none',
//                   fontSize: { xs: '1rem', sm: '1.5rem' }, // Responsive font size for mobile and desktop
//                 }}
//               >
//                 Sahil's Portfolio
//               </Typography>
//             </Box>

//             {/* Mobile menu icon */}
//             <IconButton
//               size="large"
//               aria-label="open menu"
//               aria-controls="menu-appbar"
//               aria-haspopup="true"
//               onClick={handleOpenNavMenu}
//               color="inherit"
//               sx={{ display: { xs: 'flex', md: 'none' } }}
//             >
//               <MenuIcon />
//             </IconButton>
//             <Menu
//               id="menu-appbar"
//               anchorEl={anchorElNav}
//               anchorOrigin={{
//                 vertical: 'bottom',
//                 horizontal: 'left',
//               }}
//               keepMounted
//               transformOrigin={{
//                 vertical: 'top',
//                 horizontal: 'left',
//               }}
//               open={Boolean(anchorElNav)}
//               onClose={handleCloseNavMenu}
//               sx={{ display: { xs: 'block', md: 'none' } }}
//             >
//               <MenuItem onClick={() => handleNavigation('/')}>
//                 <Typography textAlign="center">Home</Typography>
//               </MenuItem>
//               <MenuItem onClick={() => handleNavigation('/project')}>
//                 <Typography textAlign="center">Projects</Typography>
//               </MenuItem>
//               <MenuItem onClick={() => handleNavigation('/about')}>
//                 <Typography textAlign="center">About</Typography>
//               </MenuItem>
//               <MenuItem onClick={() => handleNavigation('/contact')}>
//                 <Typography textAlign="center">Contact</Typography>
//               </MenuItem>
//             </Menu>

//             {/* Desktop navigation buttons */}
//             <Box
//               sx={{
//                 flexGrow: 1,
//                 display: { xs: 'none', md: 'flex' },
//                 justifyContent: 'center',
//               }}
//             >
//               <Button
//                 onClick={() => handleNavigation('/')}
//                 sx={{
//                   my: 2, 
//                   color: 'white', 
//                   display: 'flex', 
//                   alignItems: 'center', 
//                   mx: 2,
//                   fontFamily: 'monospace', 
//                   fontWeight: 700, 
//                   letterSpacing: '.3rem',
//                 }}
//                 className="animate__animated animate__rubberBand animate__infinite animate__slower"
//               >
//                 <HomeIcon sx={{ mr: 1 }} />
//                 Home
//               </Button>
//               <Button
//                 onClick={() => handleNavigation('/project')}
//                 sx={{
//                   my: 2, 
//                   color: 'white', 
//                   display: 'flex', 
//                   alignItems: 'center', 
//                   mx: 2,
//                   fontFamily: 'monospace', 
//                   fontWeight: 700, 
//                   letterSpacing: '.3rem',
//                 }}
//                 className="animate__animated animate__shakeY animate__infinite animate__slower"
//               >
//                 <WorkIcon sx={{ mr: 1 }} />
//                 Projects
//               </Button>
//               <Button
//                 onClick={() => handleNavigation('/about')}
//                 sx={{
//                   my: 2, 
//                   color: 'white', 
//                   display: 'flex', 
//                   alignItems: 'center', 
//                   mx: 2,
//                   fontFamily: 'monospace', 
//                   fontWeight: 700, 
//                   letterSpacing: '.3rem',
//                 }}
//                 className="animate__animated animate__wobble animate__infinite animate__slower"
//               >
//                 <InfoIcon sx={{ mr: 1 }} />
//                 About
//               </Button>
//               <Button
//                 onClick={() => handleNavigation('/contact')}
//                 sx={{
//                   my: 2, 
//                   color: 'white', 
//                   display: 'flex', 
//                   alignItems: 'center', 
//                   mx: 2,
//                   fontFamily: 'monospace', 
//                   fontWeight: 700, 
//                   letterSpacing: '.3rem',
//                 }}
//                 className="animate__animated animate__jello animate__infinite animate__slower"
//               >
//                 <ContactMailIcon sx={{ mr: 1 }} />
//                 Contact
//               </Button>
//             </Box>
//           </Toolbar>
//         </Container>
//       </AppBar>
//     </>
//   );
// }

// export default ResponsiveAppBar;





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
import MenuItem from '@mui/material/MenuItem';
import HomeIcon from '@mui/icons-material/Home';
import WorkIcon from '@mui/icons-material/Work';
import InfoIcon from '@mui/icons-material/Info';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import { useRouter } from 'next/navigation';
import 'animate.css';

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const router = useRouter();

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleNavigation = (path) => {
    router.push(path);
    setAnchorElNav(null);
  };

  return (
    <>
      <AppBar style={{ backgroundColor: '#16151e', position: 'fixed', top: 0, zIndex: 1000 }}>
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            {/* Avatar and Brand on the left */}
            <Box sx={{ display: 'flex', alignItems: 'center', flexGrow: 1 }}>
              <Avatar
                sx={{ width: 60, height: 60, mr: 2 }}
                alt="Sahil"
                src="/image/myimg.jpg"
              />
              <Typography
                variant="h6"
                noWrap
                component="a"
                href="#"
                sx={{
                  display: 'flex', // Display on all screen sizes
                  fontFamily: 'monospace',
                  fontWeight: 700,
                  letterSpacing: '.3rem',
                  color: 'white',
                  textDecoration: 'none',
                  fontSize: { xs: '0.8rem', sm: '1rem', md: '1.5rem' }, // Responsive font size
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
              sx={{ display: { xs: 'flex', md: 'none' } }}
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
              sx={{ display: { xs: 'block', md: 'none' } }}
            >
              <MenuItem onClick={() => handleNavigation('/')}>
                <Typography textAlign="center">Home</Typography>
              </MenuItem>
              <MenuItem onClick={() => handleNavigation('/project')}>
                <Typography textAlign="center">Projects</Typography>
              </MenuItem>
              <MenuItem onClick={() => handleNavigation('/about')}>
                <Typography textAlign="center">About</Typography>
              </MenuItem>
              <MenuItem onClick={() => handleNavigation('/contact')}>
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
                onClick={() => handleNavigation('/')}
                sx={{
                  my: 2, 
                  color: 'white', 
                  display: 'flex', 
                  alignItems: 'center', 
                  mx: 2,
                  fontFamily: 'monospace', 
                  fontWeight: 700, 
                  letterSpacing: '.3rem',
                }}
                className="animate__animated animate__rubberBand animate__infinite animate__slower"
              >
                <HomeIcon sx={{ mr: 1 }} />
                Home
              </Button>
              <Button
                onClick={() => handleNavigation('/project')}
                sx={{
                  my: 2, 
                  color: 'white', 
                  display: 'flex', 
                  alignItems: 'center', 
                  mx: 2,
                  fontFamily: 'monospace', 
                  fontWeight: 700, 
                  letterSpacing: '.3rem',
                }}
                className="animate__animated animate__shakeY animate__infinite animate__slower"
              >
                <WorkIcon sx={{ mr: 1 }} />
                Projects
              </Button>
              <Button
                onClick={() => handleNavigation('/about')}
                sx={{
                  my: 2, 
                  color: 'white', 
                  display: 'flex', 
                  alignItems: 'center', 
                  mx: 2,
                  fontFamily: 'monospace', 
                  fontWeight: 700, 
                  letterSpacing: '.3rem',
                }}
                className="animate__animated animate__wobble animate__infinite animate__slower"
              >
                <InfoIcon sx={{ mr: 1 }} />
                About
              </Button>
              <Button
                onClick={() => handleNavigation('/contact')}
                sx={{
                  my: 2, 
                  color: 'white', 
                  display: 'flex', 
                  alignItems: 'center', 
                  mx: 2,
                  fontFamily: 'monospace', 
                  fontWeight: 700, 
                  letterSpacing: '.3rem',
                }}
                className="animate__animated animate__jello animate__infinite animate__slower"
              >
                <ContactMailIcon sx={{ mr: 1 }} />
                Contact
              </Button>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
}

export default ResponsiveAppBar;
