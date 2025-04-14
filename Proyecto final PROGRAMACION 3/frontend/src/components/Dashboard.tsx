import React from 'react';
import { useAuth } from '../hooks/useAuth';
import { useNavigate } from 'react-router-dom';
import { AppBar, Toolbar, Button, Typography, Box } from '@mui/material';
import dashboardBackground from '../background.jpg'; // Importa tu imagen aquí

const Dashboard: React.FC = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    // La función logout en useAuth ya se encarga de limpiar el token
    // y redirigir al usuario a la página de login.
  };

  const navigateToOption = (path: string) => {
    navigate(path);
  };

  return (
    <div
      style={{
        backgroundImage: `url(${dashboardBackground})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'stretch', // Para que la AppBar ocupe todo el ancho
      }}
    >
      <AppBar position="static" sx={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            inmobiliaria solares
          </Typography>
          <Button color="inherit" onClick={() => navigateToOption('/nosotros')}>
            Nosotros
          </Button>
          <Button color="inherit" onClick={() => navigateToOption('/nuestrosproductos')}>
            Nuestros productos
          </Button>
          <Button color="inherit" onClick={() => navigateToOption('/contacto')}>
            Contáctanos
          </Button>
          <Button color="inherit" onClick={handleLogout}>
            Cerrar Sesión
          </Button>
        </Toolbar>
      </AppBar>
      <Box sx={{ flexGrow: 1, padding: 3, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
        <Typography variant="h4" gutterBottom sx={{ color: 'white', fontWeight: 'bold' }}>
          ¡Bienvenido a tu panel de control!
        </Typography>
        <Typography variant="body1" sx={{ color: 'white', textAlign: 'center' }}>
          Aquí puedes ver información importante y acceder a diferentes funcionalidades.
        </Typography>
        {/* Aquí puedes mostrar contenido protegido */}
      </Box>
    </div>
  );
};

export default Dashboard;