import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import LoginForm from './components/login';
import SignupForm from './components/SignupForm';
import { useAuth } from './hooks/useAuth';
import Nosotros from './components/Nosostros';
import NuestrosProductos from './components/NuestrosProductos';
import Contacto from './components/Contacto';
import Dashboard from './components/Dashboard'; // <---- Importa el componente Dashboard aquí

// ...

const App: React.FC = () => {
  const { isAuthenticated } = useAuth();

  return (
    <Routes> {/* Solo las Routes dentro del Router proporcionado en index.tsx */}
      <Route path="/login" element={<LoginForm />} />
      <Route path="/signup" element={<SignupForm />} />
      <Route
        path="/dashboard"
        element={isAuthenticated ? <Dashboard /> : <Navigate to="/login" />}
      />
      <Route path="/" element={<Navigate to="/dashboard" />} />
      <Route path="/nosotros" element={<Nosotros />} />  
      <Route path="/nuestrosproductos" element={<NuestrosProductos />} />  
      <Route path="/contacto" element={<Contacto />} />  
    </Routes>
  );
};

export default App;