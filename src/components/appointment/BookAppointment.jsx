import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../styles/HomePage.css';

const Appointment = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    benefit: '',
    date: '',
    time: '',
    message: ''
  });

  const availableTimes = [
    '09:00 AM',
    '10:00 AM',
    '11:00 AM',
    '01:00 PM',
    '02:00 PM',
    '03:00 PM',
    '04:00 PM'
  ];

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Appointment booked for ${formData.benefit} at ${formData.time} on ${formData.date}`);
    navigate(-1);
  };

  return (
    <div className="profile-container appointment-form">
      <button className="back-button" onClick={() => navigate(-1)}>← Back</button>
      <h1>Book an Appointment</h1>
      <p className="form-description">Fill out the form below to request an appointment. Select the type of benefit and a preferred time slot.</p>
      <form onSubmit={handleSubmit} className="form-card">
        <div className="form-group">
          <label>Full Name</label>
          <input type="text" name="name" value={formData.name} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Email</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Phone Number</label>
          <input type="text" name="phone" value={formData.phone} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Benefit Type</label>
          <select name="benefit" value={formData.benefit} onChange={handleChange} required>
            <option value="">Select a benefit</option>
            <option value="Psychosocial">Psychosocial</option>
            <option value="Medical">Medical</option>
            <option value="Dental">Dental</option>
            <option value="Visual">Visual</option>
          </select>
        </div>
        <div className="form-row">
          <div className="form-group">
            <label>Date</label>
            <input type="date" name="date" value={formData.date} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label>Available Time Slot</label>
            <select name="time" value={formData.time} onChange={handleChange} required>
              <option value="">Select a time</option>
              {availableTimes.map((slot, index) => (
                <option key={index} value={slot}>{slot}</option>
              ))}
            </select>
          </div>
        </div>
        <div className="form-group">
          <label>Additional Notes</label>
          <textarea name="message" value={formData.message} onChange={handleChange} rows="4" />
        </div>
        <button type="submit" className="submit-button">Submit Request</button>
      </form>
    </div>
  );
};

export default Appointment;