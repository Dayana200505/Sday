import './App.css';
import { NavBar } from './Components';
import { Routes, Route, BrowserRouter, useLocation } from 'react-router-dom'; 
import { Box } from "@mui/material";
import Home from './Pages/Home';
import UserRegister from "./Pages/UserRegister";
import ProfileUser from "./Pages/ProfileUser";
import Activities from "./Pages/Activities";

function MainLayout() {
  const location = useLocation();

  return (
    <>
      {/* Muestra el NavBar solo si no estás en '/profile' */}
      {location.pathname !== '/profile' && <NavBar />}
      <Box sx={{ padding: 2 }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<UserRegister />} />
          <Route path="/profile" element={<ProfileUser />} />
          <Route path="/activities" element={<Activities />} />
        </Routes>
      </Box>
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <MainLayout />
    </BrowserRouter>
  );
}

export default App;
