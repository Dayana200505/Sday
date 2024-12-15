import React, { useState } from "react";
import {
  Container,
  TextField,
  Button,
  Typography,
  Box,
  InputAdornment,
  IconButton,
  Snackbar,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";

const UserRegister = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState({});
  const [snackbarOpen, setSnackbarOpen] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors((prevErrors) => ({ ...prevErrors, [name]: "" }));
  };

  const validateFields = () => {
    const newErrors = {};
    let hasError = false;

    if (!formData.firstName) {
      newErrors.firstName = "El nombre es obligatorio.";
      hasError = true;
    }

    if (!formData.lastName) {
      newErrors.lastName = "El apellido es obligatorio.";
      hasError = true;
    }

    if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Correo electrónico inválido.";
      hasError = true;
    }

    if (!formData.password) {
      newErrors.password = "La contraseña es obligatoria.";
      hasError = true;
    }

    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Las contraseñas no coinciden.";
      hasError = true;
    }

    setErrors(newErrors);
    return !hasError;
  };

  const handleRegister = () => {
    if (validateFields()) {
      // Aquí agregarías la lógica para enviar los datos al backend
      setSnackbarOpen(true);
    }
  };

  const handleTogglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  const handleToggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword((prev) => !prev);
  };

  const handleSnackbarClose = () => {
    setSnackbarOpen(false);
  };

  return (
    <Container maxWidth="sm">
      <Box sx={{ mt: 8, display: "flex", flexDirection: "column", alignItems: "center" }}>
        <Typography variant="h4" gutterBottom>
          Registro de Usuario
        </Typography>
        <form noValidate autoComplete="off">
          <TextField
            label="Nombre"
            name="firstName"
            value={formData.firstName}
            onChange={handleInputChange}
            fullWidth
            margin="normal"
            error={Boolean(errors.firstName)}
            helperText={errors.firstName}
          />
          <TextField
            label="Apellido"
            name="lastName"
            value={formData.lastName}
            onChange={handleInputChange}
            fullWidth
            margin="normal"
            error={Boolean(errors.lastName)}
            helperText={errors.lastName}
          />
          <TextField
            label="Correo electrónico"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            fullWidth
            margin="normal"
            error={Boolean(errors.email)}
            helperText={errors.email}
          />
          <TextField
            label="Contraseña"
            name="password"
            type={showPassword ? "text" : "password"}
            value={formData.password}
            onChange={handleInputChange}
            fullWidth
            margin="normal"
            error={Boolean(errors.password)}
            helperText={errors.password}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={handleTogglePasswordVisibility}>
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
          <TextField
            label="Confirmar Contraseña"
            name="confirmPassword"
            type={showConfirmPassword ? "text" : "password"}
            value={formData.confirmPassword}
            onChange={handleInputChange}
            fullWidth
            margin="normal"
            error={Boolean(errors.confirmPassword)}
            helperText={errors.confirmPassword}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={handleToggleConfirmPasswordVisibility}>
                    {showConfirmPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
          <Button
            variant="contained"
            color="primary"
            fullWidth
            sx={{ mt: 2 }}
            onClick={handleRegister}
          >
            Registrar
          </Button>
        </form>
        <Snackbar
          open={snackbarOpen}
          message="Registro exitoso"
          autoHideDuration={4000}
          onClose={handleSnackbarClose}
        />
      </Box>
    </Container>
  );
};

export default UserRegister;
