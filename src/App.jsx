import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './pages/Home';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Course from './pages/Course';
import ProtectedRoute from './utils/ProtectedRoute';
import AOS from 'aos';
import 'aos/dist/aos.css';
import ResetPassword from './pages/ResetPassword';
import Register from './pages/Register'; // opcional

function App() {
  const location = useLocation();
  const showFooter = location.pathname !== '/login';

  useEffect(() => {
    AOS.init({ duration: 500, once: false, easing: 'ease-in-out', mirror: true, offset: 150 });
  }, []);

  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />   {/* opcional */}
          <Route path="/reset-password" element={<ResetPassword />} />

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