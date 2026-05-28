import React from 'react';
import './Footer.css';

export default function Footer() {
  return (
    <footer id="contact" className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>HealthCare+</h3>
            <p>Providing quality healthcare services with compassion and excellence.</p>
          </div>

          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#doctors">Doctors</a></li>
              <li><a href="#appointment">Appointment</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Contact Info</h4>
            <ul>
              <li>📧 info@healthcareplus.com</li>
              <li>📞 (555) 123-4567</li>
              <li>📍 123 Medical Center, Health City</li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Hours</h4>
            <ul>
              <li>Mon - Fri: 8:00 AM - 8:00 PM</li>
              <li>Saturday: 9:00 AM - 5:00 PM</li>
              <li>Sunday: Closed</li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2026 HealthCare+. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
