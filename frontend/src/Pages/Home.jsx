import React from "react";
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
    height: "89.5vh",
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
      fontSize: { xs: "3rem", md: "6rem" },
      fontFamily: "'Impact', sans-serif", 
    }}
  >
    ¡Bienvenido a SDAY!
  </Typography>
</Box>

</Box>

  );
};

export default Home;