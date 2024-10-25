/* eslint-disable react/prop-types */
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import './pages.css';

function ExperiencePage({ cvData, setCvData }) {
  const navigate = useNavigate();
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCvData((prevData) => ({
      ...prevData,
      experience: {
        ...prevData.experience,
        [name]: value,
      },
    }));
  };

  const handlePrev = () => {
    navigate('/education');
  };

  const handleNext = () => {
    const { startDate, endDate, companyName, position, description } = cvData.experience;

    if (!startDate || !endDate || !companyName || !position || !description) {
      setError('Please fill in all fields');
      return;
    }

    setError('');
    navigate('/skills');
  };

  return (
    <div className="experience-page">
      <h2>Experience Information</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}

      <div className="card-container">
        <div className="card">
          <h3>Experience Details</h3>

        
          <div className="row">
            <div className="input-group">
              <label>Start Date:</label>
              <input
                type="date"
                name="startDate"
                value={cvData.experience.startDate || ''}
                onChange={handleChange}
              />
            </div>

            <div className="input-group">
              <label>End Date:</label>
              <input
                type="date"
                name="endDate"
                value={cvData.experience.endDate || ''}
                onChange={handleChange}
              />
            </div>
          </div>

          
          <div className="row">
            <div className="input-group">
              <label>Company Name:</label>
              <input
                type="text"
                name="companyName"
                value={cvData.experience.companyName || ''}
                onChange={handleChange}
              />
            </div>

            <div className="input-group">
              <label>Position:</label>
              <input
                type="text"
                name="position"
                value={cvData.experience.position || ''}
                onChange={handleChange}
              />
            </div>
          </div>


          <div className="input-group description">
            <label>Description:</label>
            <textarea
              name="description"
              value={cvData.experience.description || ''}
              onChange={handleChange}
            />
          </div>

          <div className="buttons">
            <button onClick={handlePrev} className="prev">Prev</button>
            <button onClick={handleNext} className="next">Next</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ExperiencePage;
