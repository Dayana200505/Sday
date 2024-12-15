import React, { useState } from "react";
import {
  Container,
  Box,
  Avatar,
  Typography,
  TextField,
  Button,
  Grid,
  Card,
  CardContent,
  CardActions,
} from "@mui/material";
import { Edit } from "@mui/icons-material";

const ProfileUser = () => {
  const [user, setUser] = useState({
    firstName: "Juan",
    lastName: "Pérez",
    email: "juan.perez@example.com",
    profileImage: "https://via.placeholder.com/150",
  });

  const [editing, setEditing] = useState(false);
  const [formData, setFormData] = useState({
    firstName: user.firstName,
    lastName: user.lastName,
    email: user.email,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleEditClick = () => {
    if (editing) {
      // Aquí puedes agregar la lógica para guardar los cambios en el backend
      setUser(formData); // Actualiza el estado con los nuevos datos
    }
    setEditing(!editing);
  };

  return (
    <Container maxWidth="sm">
      <Box sx={{ mt: 4, display: "flex", flexDirection: "column", alignItems: "center" }}>
        <Card sx={{ width: "100%", boxShadow: 3 }}>
          <CardContent>
            <Grid container spacing={2} alignItems="center">
              <Grid item>
                <Avatar
                  alt="Profile Image"
                  src={user.profileImage}
                  sx={{ width: 100, height: 100 }}
                />
              </Grid>
              <Grid item xs>
                <Typography variant="h5">{`${user.firstName} ${user.lastName}`}</Typography>
                <Typography variant="body1" color="textSecondary">
                  {user.email}
                </Typography>
              </Grid>
            </Grid>
          </CardContent>
          <CardActions>
            <Button
              variant="contained"
              color="primary"
              onClick={handleEditClick}
              startIcon={<Edit />}
            >
              {editing ? "Guardar Cambios" : "Editar Perfil"}
            </Button>
          </CardActions>
        </Card>

        {editing && (
          <Box sx={{ mt: 4 }}>
            <TextField
              label="Nombre"
              name="firstName"
              value={formData.firstName}
              onChange={handleInputChange}
              fullWidth
              margin="normal"
            />
            <TextField
              label="Apellido"
              name="lastName"
              value={formData.lastName}
              onChange={handleInputChange}
              fullWidth
              margin="normal"
            />
            <TextField
              label="Correo Electrónico"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              fullWidth
              margin="normal"
            />
          </Box>
        )}
      </Box>
    </Container>
  );
};

export default ProfileUser;
