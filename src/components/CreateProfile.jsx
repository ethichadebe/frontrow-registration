import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import '../styles/CreateProfile.css';

const CreateProfile = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    idNumber: '',
    address: '',
    email: '',
    cellphone: '',
    workNumber: '',
    workPosition: '',
  });

  const [sending, setSending] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.fullName || !formData.idNumber || !formData.email) {
      alert("Please fill all required fields");
      return;
    }

    setSending(true);

    emailjs.send(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      formData,
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    ).then(() => {
      setSuccess(true);
      setSending(false);
    }).catch(() => {
      alert("Failed to send email. Please try again later.");
      setSending(false);
    });
  };

  return (
    <div className="profile-container">
      <h1>Create Your Profile</h1>

      {success ? (
        <p className="success-message">✅ Registration submitted successfully!</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <input type="text" name="fullName" placeholder="Full Names and Surname" value={formData.fullName} onChange={handleChange} required />
          <input type="text" name="idNumber" placeholder="ID Number" value={formData.idNumber} onChange={handleChange} required />
          <input type="text" name="address" placeholder="Physical Address" value={formData.address} onChange={handleChange} required />
          <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
          <input type="text" name="cellphone" placeholder="Cellphone Number" value={formData.cellphone} onChange={handleChange} required />
          <input type="text" name="workNumber" placeholder="Work Number" value={formData.workNumber} onChange={handleChange} />
          <input type="text" name="workPosition" placeholder="Work Position" value={formData.workPosition} onChange={handleChange} />

          <button type="submit" disabled={sending}>
            {sending ? 'Sending...' : 'Submit'}
          </button>
        </form>
      )}
    </div>
  );
};

export default CreateProfile;
