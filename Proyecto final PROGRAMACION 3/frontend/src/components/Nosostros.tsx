import React from 'react';
import { Box, Typography, Container, AppBar, Toolbar, Button, Avatar} from '@mui/material';
import backgroundImage from '../background.jpg'; // Importa tu imagen de fondo
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import nosotrosImage from '../pastel1.png'; // Importa la imagen para la sección "Nosotros"

const Nosotros: React.FC = () => {
  const navigate = useNavigate();
  const { logout } = useAuth();

  const navigateToOption = (path: string) => {
    navigate(path);
  };

  const handleLogout = () => {
    logout();
  };

  return (
    <div
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'stretch',
      }}
    >
      <AppBar position="static" sx={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            inmobiliaria solares
          </Typography>
          <Button color="inherit" onClick={() => navigateToOption('/dashboard')}>
            Inicio
          </Button>
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
      <Box
        sx={{
          flexGrow: 1,
          padding: 4,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Container maxWidth="md">
          <Box
            sx={{
              backgroundColor: 'rgba(255, 255, 255, 0.8)', // Fondo blanco transparente
              padding: 4,
              borderRadius: 2,
              boxShadow: '0px 3px 5px rgba(0, 0, 0, 0.2)',
              display: 'flex',
              flexDirection: 'column',
              gap: 3,
            }}
          >
            <Typography variant="h4" component="h2" gutterBottom align="center">
              Sobre Nosotros - inmobiliaria solares
            </Typography>

             {/* Imagen antes de la historia */}
             <Avatar
              alt="Delicias de Ensueño"
              src={nosotrosImage} // Asegúrate de que la ruta sea correcta
              sx={{ width: 300, height: 200, mb: 2, margin: '0 auto 2px auto', objectFit: 'contain',}} // Ajusta el tamaño y el margen inferior según necesites
              variant="rounded" // Puedes usar "circular" si prefieres una imagen circular
            />

            <Typography variant="h6" gutterBottom>
              Nuestra Historia
            </Typography>
            <Typography variant="body1" paragraph>
            inmobiliaria solares nacio con el proposito de poder facilitar la compra y venta de solares lo que comenzo como un pequeño proyecto entre un par de persona se convirtio en un emprendimiento dedicado a la venta de solares de gran calidad en cada uno de nuestros solares
            </Typography>

            <Typography variant="h6" gutterBottom>
              Nuestra Visión
            </Typography>
            <Typography variant="body1" paragraph>
            Ser la empresa inmobiliaria líder en la venta de solares, reconocida por la calidad de nuestras propiedades y la confianza que generamos en cada uno de nuestros clientes.
            </Typography>

            <Typography variant="h6" gutterBottom>
              Nuestra Misión
            </Typography>
            <Typography variant="body1" paragraph>
            Facilitar la compra y venta de solares a través de un servicio transparente, accesible y comprometido con el crecimiento de nuestros clientes, brindando asesoría personalizada y terrenos de excelente calidad.
            </Typography>

            <Typography variant="h6" gutterBottom>
              Nuestros Valores
            </Typography>
            <ul>
              <li>
                <Typography variant="body1">
                  Compromiso: Nos dedicamos con responsabilidad a cada proyecto y cliente.
                </Typography>
              </li>
              <li>
                <Typography variant="body1">
                  Crecimiento: Apoyamos el desarrollo de nuestros clientes y comunidades.
                </Typography>
              </li>
              <li>
                <Typography variant="body1">
                  Confianza: Construimos relaciones duraderas basadas en la honestidad.
                </Typography>
              </li>
              <li>
                <Typography variant="body1">
                  Transparencia: Operamos con claridad en todos nuestros procesos.
                </Typography>
              </li>
              <li>
                <Typography variant="body1">
                  Calidad: Ofrecemos solares cuidadosamente seleccionados y bien ubicados.
                </Typography>
              </li>
            </ul>
          </Box>
        </Container>
      </Box>
    </div>
  );
};

export default Nosotros;