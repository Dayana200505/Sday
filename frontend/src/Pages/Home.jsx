import React from "react";
import { keyframes } from '@mui/system';
import { Button, Box, Typography, Container, useTheme } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import PetsIcon from "@mui/icons-material/Pets";
import InsertEmoticonIcon from "@mui/icons-material/InsertEmoticon";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import { useNavigate } from "react-router-dom";
const Home = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const handleRegister = () => {
    navigate("/register");
  };

  const fadeIn = keyframes`
  0% { opacity: 0; transform: translateY(-20px); }
  100% { opacity: 1; transform: translateY(0); }
`;
  const handleAdoptaClick = () => {
    navigate("/pets"); // Redirige a la ruta de pets
  };
  return (
    <Box
  sx={{
    backgroundImage: {
      xs: `url(/images/img,cel.jpg)`,
      md: `url(/images/img.jpeg)`,
    },
    backgroundSize: "cover",
    height: "90vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    p: 1,
    mt: -2,
    mx:-2,
  }}
>
<Box sx={{ color: " #ccc7d3 " }}>
  <Typography
    variant="h4"
    component="h1"
    sx={{
      fontSize: { xs: "3rem", md: "7rem" },
      fontFamily: "'Impact', sans-serif", 
      animation: `${fadeIn} 1.5s ease-in-out`, // Duración y tipo de animación
    }}
  >
    ¡Bienvenido a SDAY!
  </Typography>
  <Box  sx={{
    
    
    
    display: "flex",
    alignItems: "left",
    justifyContent: "left",
    textAlign: "left",
   
   
  }}>

  <Typography
    
    sx={{
      fontSize: { xs: "1rem", md: "2rem" },
      fontFamily: "'Haettenschweiler', sans-serif", 
      animation: `${fadeIn} 2.5s ease-in-out`,
      color:"#ff97f2",
    }}
  >
  Donde tendras toda tu vida guardada en recuerdos
   
  </Typography>
  </Box>
  <Box  sx={{mt:9,md:15
  }}>
  <Button
  sx={{
    color:"#180115",
    fontFamily: "'Impact', sans-serif",
    animation: `${fadeIn} 3.5s ease-in-out`, // Duración y tipo de animació 
    fontSize: { xs: "2rem", md: "2rem" }}}
  variant="contained" size="large" color="#5a2f54"
  onClick={handleRegister}
  >
          REGISTRATE
        </Button>
  </Box>
 
</Box>


</Box>


  );
};

export default Home;