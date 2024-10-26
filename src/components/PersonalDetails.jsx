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
  const handlePrev = () => {
    navigate('/'); 
  };



  return (
    <div className="personal-data-page">
      <h2 className='personal-title'>Personal Information</h2> 
        <h5>step 1</h5>
      {error && <p style={{ color: 'red' }} className="error-message">{error}</p>}

     

      <div className="page">
      <div className="card-personal">


       <div className="input-row">
      <div className="input-container">
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={cvData?.personalData?.name || ''}
          onChange={handleChange}
          placeholder="Enter your name"
        />
      </div>
      
      <div className="input-container">
        <label>Surname:</label>
        <input
          type="text"
          name="surname"
          value={cvData?.personalData?.surname || ''}
          onChange={handleChange}
          placeholder="Enter your surname"
        />
      </div>
    </div>

    <div className="input-row">
      <div className="input-container">
        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={cvData?.personalData?.email || ''}
          onChange={handleChange}
          placeholder="Enter your email"
        />
      </div>
      
      <div className="input-container">
        <label>Phone Number:</label>
        <input
          type="tel"
          name="phone"
          value={cvData?.personalData?.phone || ''}
          onChange={handleChange}
          placeholder="Enter your phone number"
        />
      </div>
    </div>

    <div className="input-container">
      <label>LinkedIn Profile:</label>
      <input
        type="url"
        name="linkedin"
        value={cvData?.personalData?.linkedin || ''}
        onChange={handleChange}
        placeholder="Enter your LinkedIn link"
      />
    </div>

    <h3>About Me</h3>
    <textarea
      name="about"
      value={cvData?.personalData?.about || ''}
      onChange={handleChange}
      placeholder="Write something about yourself"
      rows="4"
      cols="50"
    />

    <div className="buttons">
      <button onClick={handlePrev}>Prev</button>
      <button onClick={handleNext}>Next</button>
    </div>
  </div>
</div>

    </div>
  );
}

export default PersonalDataPage;
