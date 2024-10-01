

// "use client"
// import React from 'react';
// import { Typography, Box, Button, Container, Grid } from '@mui/material';
// import Skills from '@/app/skills/page';
// import AboutMe from '@/app/about/page';
// import Projects from './project/page';
// import ContactMe from './contact/page';
// import 'animate.css';
// export default function Home() {
//   return (
//     <>
//     <Box
//       sx={{
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         minHeight: '100vh',
//         backgroundColor: '#1E1B2E',
//         color: '#FFFFFF',
//         padding: '0 20px',
//       }}
//     >
//       <Container maxWidth="lg">
//         <Grid container spacing={4} alignItems="center">
//           {/* Left Side - Image */}
        
//           {/* Right Side - Text */}
//           <Grid item xs={12} md={6}>
//             <Typography className=" animate__animated animate__flipInX  animate__infinite animate__slower animate__delay-2s " variant="h3" component="h1" sx={{ fontWeight: 'bold' }}>
//               Hi, my name is <span  style={{ color: '#AA00FF' }}>Sahil Altaf</span>
//             </Typography>
//             <Typography className=" animate__animated animate__flipInY  animate__infinite animate__slower animate__delay-2s " variant="h4" component="h2" sx={{ marginTop: 2, fontWeight: '300' }}>
//               And I am a passionate <span style={{ color: '#AA00FF' }}>Software Engineer</span>
//             </Typography>
//             <Box mt={4}>
//             <Button
//                   variant="contained"
//                   color="primary"
//                   sx={{ marginRight: 4, backgroundColor: '#3f51b5' }}
//                   // onClick={() => window.open('/SahilAltaf.pdf', '_blank')}
//                   href='/SahilAltaf.pdf'
//                   download="/SahilAltaf.pdf"
//                 >
//                   Download Resume
//                 </Button>
//               <Button
//               href='https://github.com/sahilsx'
//                 variant="contained"
//                 color="secondary"
//                 sx={{ backgroundColor: '#f50057' }}
//               >
//                 Visit Github
//               </Button>
//             </Box>
//           </Grid>
           
//           <Grid item xs={12} md={6}>
//             <img
//               src="https://media.licdn.com/dms/image/D5612AQEhKguQVjXr4g/article-cover_image-shrink_600_2000/0/1693971265825?e=2147483647&v=beta&t=vRAWRIEHIp6sKRbLxQ_QmHTgjmTRYhj8vOLwlhskjzg"
//               alt=""
//               style={{ width: '100%', maxWidth: '400px', margin: '0 auto', display: 'block' }}
//             />
//           </Grid>
          
//         </Grid>
//       </Container>
//     </Box>
//     <Skills/>
//     <AboutMe/>
//     <Projects/>
//     <ContactMe/>
//     </>
//   );
// }







"use client";
import React from 'react';
import { Typography, Box, Button, Container, Grid } from '@mui/material';
import Skills from '@/app/skills/page';
import AboutMe from '@/app/about/page';
import Projects from './project/page';
import ContactMe from './contact/page';
import 'animate.css';

export default function Home() {
  return (
    <>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          minHeight: '100vh',
          backgroundColor: '#1E1B2E',
          color: '#FFFFFF',
          padding: { xs: '20px', md: '0 40px' }, // Responsive padding for smaller screens
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={4} alignItems="center">
            {/* Right Side - Text */}
            <Grid item xs={12} md={6} order={{ xs: 2, md: 1 }}> {/* Text first on small screens */}
              <Typography
                className="animate__animated animate__flipInX animate__infinite animate__slower animate__delay-2s"
                variant="h4"
                component="h1"
                sx={{ fontWeight: 'bold', fontSize: { xs: '1.8rem', md: '2.5rem' } }} // Adjust font size for different screen sizes
              >
                Hi, my name is <span style={{ color: '#AA00FF' }}>Sahil Altaf</span>
              </Typography>
              <Typography
                className="animate__animated animate__flipInY animate__infinite animate__slower animate__delay-2s"
                variant="h5"
                component="h2"
                sx={{ marginTop: 2, fontWeight: '300', fontSize: { xs: '1.5rem', md: '2rem' } }} // Adjust font size for different screen sizes
              >
                And I am a passionate <span style={{ color: '#AA00FF' }}>Software Engineer</span>
              </Typography>
              <Box mt={4} sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, gap: 2 }}>
                <Button
                  variant="contained"
                  color="primary"
                  sx={{ backgroundColor: '#3f51b5', width: { xs: '100%', sm: 'auto' } }} // Full width on small screens
                  href='/SahilAltaf.pdf'
                  download="/SahilAltaf.pdf"
                >
                  Download Resume
                </Button>
                <Button
                  href='https://github.com/sahilsx'
                  variant="contained"
                  color="secondary"
                  sx={{ backgroundColor: '#f50057', width: { xs: '100%', sm: 'auto' } }} // Full width on small screens
                >
                  Visit Github
                </Button>
              </Box>
            </Grid>

            {/* Left Side - Image */}
            <Grid item xs={12} md={6} order={{ xs: 1, md: 2 }}> {/* Image first on small screens */}
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <img
                  src="https://media.licdn.com/dms/image/D5612AQEhKguQVjXr4g/article-cover_image-shrink_600_2000/0/1693971265825?e=2147483647&v=beta&t=vRAWRIEHIp6sKRbLxQ_QmHTgjmTRYhj8vOLwlhskjzg"
                  alt="Sahil's Portfolio"
                  style={{ width: '100%', maxWidth: '400px', height: 'auto' }} // Responsive image size
                />
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Skills, AboutMe, Projects, and ContactMe sections */}
      <Skills />
      <AboutMe />
      <Projects />
      <ContactMe />
    </>
  );
}
