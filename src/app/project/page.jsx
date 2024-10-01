
"use client";
import React from 'react';
import { Box, Container, Grid, Typography, Card,CardMedia, CardContent, Button } from '@mui/material';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css'
import Image from 'next/image';
import exampleImage from '../../../public/image/ppq.png';
// Sample slider settings
const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000, // Change slide every 3 seconds
};

export default function Projects() {
  const projects = [
    {
      title: "PIXEL PURCHASE",
      description: "Pixel Purchase is a cutting-edge eCommerce platform built with Next.js and styled using Material UI, offering a seamless and responsive user experience. This platform specializes in selling smartphones, delivering an intuitive and visually appealing interface for users , Users can browse through a wide range of smartphones, view detailed product information, add items to their cart, and proceed through a streamlined checkout process. The user interface is designed to be user-friendly and engaging, ensuring a pleasant shopping experience.,Admin FunctionalityAdmins have access to a comprehensive dashboard for managing products, processing orders, and handling user queries. This backend functionality is crucial for maintaining the operational efficiency of the site ,Pixel Purchase is designed to be a powerful and attractive eCommerce solution for smartphone enthusiasts, combining advanced technology with a delightful user experience.",
      images: ["/image/ppq.png", "/image/pps.png"], // Replace with actual image paths
      link: "https://pixelpurchase.vercel.app/",
    },
    {
      title: "GoFood",
      description: "GoFood is your ultimate companion for exploring a world of culinary delights at your fingertips. Whether you're craving local favorites or adventurous global cuisines, GoFood connects you with a diverse array of food options.",
      images: ["Screenshot(151).png", "https://www.bleepstatic.com/content/hl-images/2022/05/18/MSSQL.jpg"], // Replace with actual image paths
      link: "#",
    },
    {
      title: "Text Utils",
      description: "Text Utils is a versatile web application designed to streamline text manipulation and analysis. It offers a suite of tools for transforming and managing text, including features such as text formatting, case conversion, and word count.",
      images: ["https://www.bleepstatic.com/content/hl-images/2022/05/18/MSSQL.jpg", "https://www.bleepstatic.com/content/hl-images/2022/05/18/MSSQL.jpg"], // Replace with actual image paths
      link: "#",
    },
  ];

  return (
    <Box
      sx={{
        backgroundColor: '#1E1B2E',
        padding: '50px 20px',
        color: '#FFFFFF',
      }}
    >
      <Container maxWidth="lg">
        {/* Section Title */}
        <Box
          sx={{
            borderBottom: '2px solid #FFFFFF',
            paddingBottom: '20px',
            marginBottom: '40px',
            textAlign: 'center',
          }}
        >
          <Typography  className=" animate__animated animate__tada animate__infinite animate__slower animate__delay-2s " variant="h3" component="h3" sx={{ fontWeight: 'bold' }}>
            Projects
          </Typography>
        </Box>

        <Grid container spacing={4}>
          {projects.map((project, index) => (
            <Grid item xs={12} key={index}>
              <Card
                sx={{
                  backgroundColor: '#2E294E',
                  borderRadius: '15px',
                  boxShadow: '0 8px 16px rgba(0, 0, 0, 0.3)',
                 
                }}
              >
                <Slider {...sliderSettings}>
                  {project.images.map((image, imgIndex) => (
                    <CardMedia
                      key={imgIndex}
                      component="img"
                      height="300"
                      image={image}
                      alt={`Image ${imgIndex + 1} of ${project.title}`}
                      sx={{ borderTopLeftRadius: '15px', borderTopRightRadius: '15px', }}
                    />
                  ))}
                </Slider>
                <CardContent>
                  <Typography
                    variant="h5"
                    component="h2"
                    sx={{ fontWeight: 'bold',color: 'whitesmoke' ,marginBottom: 2 }}
                    className=" animate__animated animate__backInDown animate__infinite animate__slower animate__delay-2s " 
                  >
                    {project.title}
                  </Typography>
                  <Typography variant="body2"  sx={{color:"whitesmoke" ,marginBottom: 2 }}
                  className=" animate__animated animate__headShake animate__infinite animate__slower animate__delay-2s " 
                  >
                    {project.description}
                  </Typography>
                  <Button
                    variant="contained"
                    href={project.link}
                    sx={{
                      backgroundColor: '#007BFF',
                      color: '#FFFFFF',
                      fontWeight: 'bold',
                      '&:hover': {
                        backgroundColor: '#0056b3',
                      },
                      
                    }}
                    className=" animate__animated animate__headShake animate__infinite animate__slower animate__delay-2s " 
                    fullWidth
                  >
                    View Project
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}



// pages/projects.js
// import React from 'react';
// import { Box, Container, Grid, Typography, Card, CardContent, Button, CardMedia } from '@mui/material';
// import { Swiper, SwiperSlide } from 'swiper/react';
// // import 'swiper/swiper-bundle.min.css';
// // import 'swiper/swiper.min.css';
// import SwiperCore, { Autoplay, Pagination } from 'swiper';

// // Install Swiper modules
// SwiperCore.use([Autoplay, Pagination]);

// export default function Projects() {
//   const projects = [
//     {
//       title: "Pixel Purchase",
//       description: "Pixel Purchase is a cutting-edge eCommerce platform built with Next.js and styled using Material UI, offering a seamless and responsive user experience. This platform specializes in selling smartphones, delivering an intuitive and visually appealing interface for users. Users can browse through a wide range of smartphones, view detailed product information, add items to their cart, and proceed through a streamlined checkout process. The user interface is designed to be user-friendly and engaging, ensuring a pleasant shopping experience. Admins have access to a comprehensive dashboard for managing products, processing orders, and handling user queries. This backend functionality is crucial for maintaining the operational efficiency of the site. Pixel Purchase is designed to be a powerful and attractive eCommerce solution for smartphone enthusiasts, combining advanced technology with a delightful user experience.",
//       images: ["https://www.bleepstatic.com/content/hl-images/2022/05/18/MSSQL.jpg", "https://www.bleepstatic.com/content/hl-images/2022/05/18/MSSQL.jpg"], // Replace with actual image paths
//       link: "https://pixelpurchase.vercel.app/",
//     },
//     {
//       title: "GoFood",
//       description: "GoFood is your ultimate companion for exploring a world of culinary delights at your fingertips. Whether you're craving local favorites or adventurous global cuisines, GoFood connects you with a diverse array of food options.",
//       images: ["/images/gofood.png", "/images/placeholder.png"], // Replace with actual image paths
//       link: "#",
//     },
//     {
//       title: "Text Utils",
//       description: "Text Utils is a versatile web application designed to streamline text manipulation and analysis. It offers a suite of tools for transforming and managing text, including features such as text formatting, case conversion, and word count.",
//       images: ["/images/text_utils.png", "/images/placeholder.png"], // Replace with actual image paths
//       link: "#",
//     },
//   ];

//   return (
//     <Box
//       sx={{
//         backgroundColor: '#1E1B2E',
//         padding: '50px 20px',
//         color: '#FFFFFF',
//       }}
//     >
//       <Container maxWidth="lg">
//         {/* Section Title */}
//         <Box
//           sx={{
//             borderBottom: '2px solid #FFFFFF',
//             paddingBottom: '20px',
//             marginBottom: '40px',
//             textAlign: 'center',
//           }}
//         >
//           <Typography variant="h3" component="h3" sx={{ fontWeight: 'bold' }}>
//             Projects
//           </Typography>
//         </Box>

//         <Grid container spacing={4}>
//           {projects.map((project, index) => (
//             <Grid item xs={12} key={index}>
//               <Card
//                 sx={{
//                   backgroundColor: '#2E294E',
//                   borderRadius: '15px',
//                   boxShadow: '0 8px 16px rgba(0, 0, 0, 0.3)',
//                   transition: 'transform 0.3s ease',
//                   '&:hover': {
//                     transform: 'scale(1.05)',
//                   },
//                 }}
//               >
//                 <Swiper
//                   spaceBetween={0}
//                   slidesPerView={1}
//                   autoplay={{ delay: 3000 }}
//                   pagination={{ clickable: true }}
//                   loop
//                 >
//                   {project.images.map((image, imgIndex) => (
//                     <SwiperSlide key={imgIndex}>
//                       <CardMedia
//                         component="img"
//                         height="300"
//                         image={image}
//                         alt={`Image ${imgIndex + 1} of ${project.title}`}
//                         sx={{ borderTopLeftRadius: '15px', borderTopRightRadius: '15px' }}
//                       />
//                     </SwiperSlide>
//                   ))}
//                 </Swiper>
//                 <CardContent>
//                   <Typography
//                     variant="h5"
//                     component="h2"
//                     sx={{ fontWeight: 'bold', marginBottom: 2 }}
//                   >
//                     {project.title}
//                   </Typography>
//                   <Typography variant="body2" sx={{ marginBottom: 2 }}>
//                     {project.description}
//                   </Typography>
//                   <Button
//                     variant="contained"
//                     href={project.link}
//                     sx={{
//                       backgroundColor: '#007BFF',
//                       color: '#FFFFFF',
//                       fontWeight: 'bold',
//                       '&:hover': {
//                         backgroundColor: '#0056b3',
//                       },
//                     }}
//                     fullWidth
//                   >
//                     View Project
//                   </Button>
//                 </CardContent>
//               </Card>
//             </Grid>
//           ))}
//         </Grid>
//       </Container>
//     </Box>
//   );
// }
