/* eslint-disable react/prop-types */
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import './pages.css';

function PersonalDataPage({ cvData, setCvData }) {
  const navigate = useNavigate();
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCvData((prevData) => ({
      ...prevData,
      personalData: {
        ...prevData.personalData,
        [name]: value,
      },
    }));
  };

  const handleNext = () => {
    const { name, surname, email, phone, about } = cvData?.personalData || {};

    if (!name || !surname || !email || !phone || !about) {
      setError('Please fill in all fields');
      return;
    }

    setError('');
    navigate('/education'); 
  };

  return (
    <div className="personal-data-page">
      <h2>Personal Information</h2>

      {error && <p style={{ color: 'red' }}>{error}</p>}

      <div className="card">
        <h3>Personal Details</h3>
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={cvData?.personalData?.name || ''} 
          onChange={handleChange}
          placeholder="Enter your name"
        />
        <br/>
        <label>Surname:</label>
        <input
          type="text"
          name="surname"
          value={cvData?.personalData?.surname || ''} 
          onChange={handleChange}
          placeholder="Enter your surname"
        />
        <br/>
        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={cvData?.personalData?.email || ''} 
          onChange={handleChange}
          placeholder="Enter your email"
        />
        <br/>
        <label>Phone Number:</label>
        <input
          type="tel"
          name="phone"
          value={cvData?.personalData?.phone || ''} 
          onChange={handleChange}
          placeholder="Enter your phone number"
        />
        <br/>
        <label>LinkedIn Profile:</label>
        <input
          type="url"
          name="linkedin"
          value={cvData?.personalData?.linkedin || ''} 
          onChange={handleChange}
          placeholder="Enter your LinkedIn link"
        />
      </div>

      <div className="card about-card">
        <h3>About Me</h3>
        <textarea
          name="about"
          value={cvData?.personalData?.about || ''} 
          onChange={handleChange}
          placeholder="Write something about yourself"
          rows="4"
          cols="50"
        />
      </div>

      <button onClick={handleNext}>Next</button>
    </div>
  );
}

export default PersonalDataPage;
