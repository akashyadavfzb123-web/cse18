import React from 'react';
import './Hero.css';

export default function Hero() {
  const scrollToAppointment = () => {
    const appointmentSection = document.getElementById('appointment');
    if (appointmentSection) {
      appointmentSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <h1 className="hero-title">Your Health, Our Priority</h1>
          <p className="hero-subtitle">
            Book appointments with top doctors in your area. Quality healthcare made simple and accessible.
          </p>
          <button className="hero-button" onClick={scrollToAppointment}>
            Book Appointment
          </button>
        </div>
        <div className="hero-image">
          <div className="hero-placeholder">
            <svg width="100%" height="100%" viewBox="0 0 400 400" fill="none">
              <circle cx="200" cy="200" r="180" fill="#e6f2ff"/>
              <path d="M200 100 L200 300 M100 200 L300 200" stroke="#0066cc" strokeWidth="8" strokeLinecap="round"/>
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
