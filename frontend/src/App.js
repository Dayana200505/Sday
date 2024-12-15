import './App.css';
import { NavBar } from './Components';
import { Routes, Route, BrowserRouter } from 'react-router-dom'; 
import { Box } from "@mui/material";
import Home from './Pages/Home';
import UserRegister from "./Pages/UserRegister";
import ProfileUser from "./Pages/ProfileUser";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Box sx={{ padding: 2 }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<UserRegister />} />
          <Route path="/profile" element={<ProfileUser/>} />
        </Routes>
      </Box>
    </BrowserRouter>
  );
}

export default App;
