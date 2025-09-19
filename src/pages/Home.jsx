import React from 'react';
import Hero from '../components/Hero/Hero';
import Servicios from '../components/Servicios/Servicios';
import Ejercicios from '../components/Ejercicios/Ejercicios';
import Testimonios from '../components/Testimonios/Testimonios';
import CTA from '../components/CTA/CTA';

const Home = () => (
    <>
        <Hero />
        <Servicios />
        <Ejercicios />
        <Testimonios />
        <CTA />
    </>
);

export default Home;