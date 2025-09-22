import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './pages/Home';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Course from './pages/Course';
import ProtectedRoute from './utils/ProtectedRoute';

function App() {
  const location = useLocation();
  // No mostrar el Footer en la página de login
  const showFooter = location.pathname !== '/login';


  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />

          <Route element={<ProtectedRoute />}>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/curso/:courseId" element={<Course />} />
          </Route>

          <Route path="*" element={<h1 className="text-center my-5">404: Página No Encontrada</h1>} />
        </Routes>
      </main>
      {showFooter && <Footer />}
    </>
  );
}

export default App;