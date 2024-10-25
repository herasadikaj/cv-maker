/* eslint-disable react/prop-types */
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import './pages.css';

function EducationPage({ cvData, setCvData }) {
  const navigate = useNavigate();
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCvData((prevData) => ({
      ...prevData,
      education: {
        ...prevData.education,
        [name]: value,
      },
    }));
  };

  const handlePrev = () => {
    navigate('/personal'); 
  };

  const handleNext = () => {
    const { startDate, endDate, uniName, fieldOfStudy, universityLink, educationType } = cvData.education;

    if (!startDate || !endDate || !uniName || !fieldOfStudy || !universityLink || !educationType) {
      setError('Please fill in all fields');
      return;
    }

    setError('');
    navigate('/experience'); 
  };

  return (
    <div className="education-page">
      <h2 className='title'>Education Information</h2>

      {error && <p style={{ color: 'red' }}>{error}</p>}

      <div className="card-education">
        <h3>Education Details</h3>
        
        <div className="row">
          <label>Start Date:</label>
          <input
            type="date"
            name="startDate"
            value={cvData.education.startDate || ''}
            onChange={handleChange}
          />

          <label>End Date:</label>
          <input
            type="date"
            name="endDate"
            value={cvData.education.endDate || ''}
            onChange={handleChange}
          />
        </div>

        <div className="row">
          <label>Name of University:</label>
          <input
            type="text"
            name="uniName"
            value={cvData.education.uniName || ''}
            onChange={handleChange}
            placeholder="Enter name of University"
          />

          <label>Field of Study:</label>
          <input
            type="text"
            name="fieldOfStudy"
            value={cvData.education.fieldOfStudy || ''}
            onChange={handleChange}
            placeholder="Enter field of study"
          />
        </div>

        <div className="row">
          <label>University Website:</label>
          <input
            type="url"
            name="universityLink"
            value={cvData.education.universityLink || ''}
            onChange={handleChange}
            placeholder="Enter university website link"
          />
        </div>

        <label>Type of Education:</label>
        <select
          name="educationType"
          value={cvData.education.educationType || ''}
          onChange={handleChange}
        >
          <option value="">Select type</option>
          <option value="Bachelor">Bachelor</option>
          <option value="Master">Master</option>
          <option value="PhD">PhD</option>
        </select>
        
        <div className="buttons">
          <button onClick={handlePrev} className='prev'>Prev</button>
          <button onClick={handleNext} className='next'>Next</button>
        </div>
      </div>
    </div>
  );
}

export default EducationPage;
