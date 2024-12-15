import './App.css';
import { NavBar } from './Components';
import { Routes, Route, BrowserRouter } from 'react-router-dom'; 
import { Box } from "@mui/material";
import Home from './Pages/Home';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Box sx={{ padding: 2 }}>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Box>
    </BrowserRouter>
  );
}

export default App;
