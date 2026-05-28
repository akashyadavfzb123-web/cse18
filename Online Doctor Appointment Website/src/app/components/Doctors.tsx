import React from 'react';
import './Doctors.css';

interface Doctor {
  id: number;
  name: string;
  specialization: string;
  experience: string;
  image: string;
}

export default function Doctors() {
  const doctors: Doctor[] = [
    {
      id: 1,
      name: 'Dr. S...',
      specialization: 'Cardiologist',
      experience: '15 years',
      image: '👨‍⚕️'
    },
    {
      id: 2,
      name: 'Dr. M....',
      specialization: 'Pediatrician',
      experience: '12 years',
      image: '👩‍⚕️'
    },
    {
      id: 3,
      name: 'Dr....',
      specialization: 'Dermatologist',
      experience: '10 years',
      image: '👨‍⚕️'
    },
    {
      id: 4,
      name: 'Dr.....',
      specialization: 'Orthopedic',
      experience: '18 years',
      image: '👩‍⚕️'
    },
    {
      id: 5,
      name: 'Dr......',
      specialization: 'Neurologist',
      experience: '14 years',
      image: '👨‍⚕️'
    },
    {
      id: 6,
      name: 'Dr. .....',
      specialization: 'General Physician',
      experience: '20 years',
      image: '👩‍⚕️'
    }
  ];

  const scrollToAppointment = () => {
    const appointmentSection = document.getElementById('appointment');
    if (appointmentSection) {
      appointmentSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="doctors" className="doctors-section">
      <div className="doctors-container">
        <div className="doctors-header">
          <h2>Our Expert Doctors</h2>
          <p>Meet our team of experienced healthcare professionals</p>
        </div>
        <div className="doctors-grid">
          {doctors.map((doctor) => (
            <div key={doctor.id} className="doctor-card">
              <div className="doctor-image">
                <span className="doctor-avatar">{doctor.image}</span>
              </div>
              <div className="doctor-info">
                <h3>{doctor.name}</h3>
                <p className="doctor-specialization">{doctor.specialization}</p>
                <p className="doctor-experience">Experience: {doctor.experience}</p>
                <button className="book-button" onClick={scrollToAppointment}>
                  Book Appointment
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
