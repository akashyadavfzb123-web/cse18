import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Doctors from './components/Doctors';
import AppointmentForm from './components/AppointmentForm';
import Footer from './components/Footer';
import './App.css';

export default function App() {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <Doctors />
      <AppointmentForm />
      <Footer />
    </div>
  );
}