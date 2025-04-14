import React from 'react';
import { Box, Typography, Container, AppBar, Toolbar, Button, Grid, Card, CardMedia, CardContent } from '@mui/material';
import backgroundImage from '../background.jpg'; // Importa tu imagen de fondo de la página
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';

// Importa tus 12 imágenes de repostería
import producto1 from '../producto1.png';
import producto2 from '../producto2.png';
import producto3 from '../producto3.png';
import producto4 from '../producto4.png';
import producto5 from '../producto5.png';
import producto6 from '../producto6.png';
import producto7 from '../producto7.png';
import producto8 from '../producto8.png';


const productos = [
  { id: 1, nombre: 'Solar de oportunidad', imagen: producto1, descripcion: 'Solar de 742 metros , título definitivo , y la calle Central , los Transformadores. RD$3,800.000.' },
  { id: 2, nombre: 'Solar exclusivo ubicado en avenida principal', imagen: producto2, descripcion: 'Excelente oportunidad de invercion' },
  { id: 3, nombre: 'Solar Exclusivo Proyecto en Jima, Bonao', imagen: producto3, descripcion: 'Una oportunidad única para invertir en un paraíso natural! Este nuevo proyecto turístico en Bonao ofrece solares con vistas impresionantes a las montañas, ideal para quienes buscan tranquilidad, comodidad, contacto directo con la naturaleza y acceso al rio. ' },
  { id: 4, nombre: 'Solar Terrenos Cerca de Fula', imagen: producto4, descripcion: 'Descubre un proyecto turístico completamente natural ubicado en el corazón de Fula Bonao, ideal para quienes buscan tranquilidad, inversión y conexión con la naturaleza. Con solares disponibles desde 400 m² en adelante, este desarrollo combina comodidad, infraestructura de primera y un entorno ecológico privilegiado.' },
  { id: 5, nombre: 'Solar proyecto turístico en Bonao', imagen: producto5, descripcion: '¡Una oportunidad única para invertir en un paraíso natural! Este nuevo proyecto turístico en Bonao ofrece solares con vistas impresionantes a las montañas, ideal para quienes buscan tranquilidad, comodidad, contacto directo con la naturaleza y acceso al rio. ' },
  { id: 6, nombre: 'Solar Finca Ideal', imagen: producto6, descripcion: 'Proyecto Montañoso y algunas partes plano, ideal para proyectos ecoturisticos. ' },
  { id: 7, nombre: 'Solar Exclusivo con Vista a la Montaña', imagen: producto7, descripcion: 'Financimiento Disponible con la Constructora.' },
  { id: 8, nombre: 'Solar Exclusivas Villas Ecoturísticas en Bonao', imagen: producto8, descripcion: 'Proyecto Ecoturistico-Cerrado, Exclusivo y ideado para construccion de villas. Reserva con DOP $50,000 y Separa con un 25%, luego en comodas cuotas y un año sin intereses.' },
];

const NuestrosProductos: React.FC = () => {
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
            Nuestros Productos
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
        <Container maxWidth="lg">
          <Box
            sx={{
              backgroundColor: 'rgba(255, 255, 255, 0.8)',
              padding: 4,
              borderRadius: 2,
              boxShadow: '0px 3px 5px rgba(0, 0, 0, 0.2)',
              display: 'flex',
              flexDirection: 'column',
              gap: 3,
              alignItems: 'center',
            }}
          >
            <Typography variant="h4" component="h2" gutterBottom align="center">
              Nuestros solares disponibles
            </Typography>

            <Grid container spacing={4} justifyContent="center">
              {productos.map((producto) => (
                <Grid sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                  <Card sx={{ maxWidth: 345 }}>
                    <CardMedia
                      component="img"
                      alt={producto.nombre}
                      height="200"
                      image={producto.imagen}
                      sx={{ objectFit: 'cover' }}
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h6" component="div">
                        {producto.nombre}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {producto.descripcion}
                      </Typography>
                    </CardContent>
                    {/* Puedes agregar más acciones a la tarjeta si es necesario */}
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Container>
      </Box>
    </div>
  );
};

export default NuestrosProductos;