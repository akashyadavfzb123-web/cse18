import React, { useState } from 'react';
import './AppointmentForm.css';

export default function AppointmentForm() {
  const [formData, setFormData] = useState({
    patientName: '',
    email: '',
    phone: '',
    doctor: '',
    appointmentDate: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const doctors = [
    'Dr. Sarah Johnson - Cardiologist',
    'Dr. Michael Chen - Pediatrician',
    'Dr. Emily Williams - Dermatologist',
    'Dr. James Brown - Orthopedic',
    'Dr. Lisa Anderson - Neurologist',
    'Dr. David Martinez - General Physician'
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Appointment booked:', formData);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        patientName: '',
        email: '',
        phone: '',
        doctor: '',
        appointmentDate: ''
      });
    }, 3000);
  };

  return (
    <section id="appointment" className="appointment-section">
      <div className="appointment-container">
        <div className="appointment-header">
          <h2>Book Your Appointment</h2>
          <p>Fill out the form below to schedule your visit</p>
        </div>

        {submitted ? (
          <div className="success-message">
            <div className="success-icon">✓</div>
            <h3>Appointment Booked Successfully!</h3>
            <p>We will contact you shortly to confirm your appointment.</p>
          </div>
        ) : (
          <form className="appointment-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="patientName">Patient Name</label>
              <input
                type="text"
                id="patientName"
                name="patientName"
                value={formData.patientName}
                onChange={handleChange}
                placeholder="Enter your full name"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="your.email@example.com"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="phone">Phone Number</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="(123) 456-7890"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="doctor">Select Doctor</label>
              <select
                id="doctor"
                name="doctor"
                value={formData.doctor}
                onChange={handleChange}
                required
              >
                <option value="">Choose a doctor</option>
                {doctors.map((doctor, index) => (
                  <option key={index} value={doctor}>
                    {doctor}
                  </option>
                ))}
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="appointmentDate">Appointment Date</label>
              <input
                type="date"
                id="appointmentDate"
                name="appointmentDate"
                value={formData.appointmentDate}
                onChange={handleChange}
                min={new Date().toISOString().split('T')[0]}
                required
              />
            </div>

            <button type="submit" className="submit-button">
              Submit Appointment
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
