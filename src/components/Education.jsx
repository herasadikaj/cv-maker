/* eslint-disable react/prop-types */
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import './pages.css';

function EducationPage({ cvData, setCvData }) {
  const navigate = useNavigate();
  const [error, setError] = useState('');

  const handleChange = (e, index) => {
    const { name, value } = e.target;
    const updatedEducation = [...cvData.education];
    updatedEducation[index] = {
      ...updatedEducation[index],
      [name]: value,
    };
    setCvData((prevData) => ({
      ...prevData,
      education: updatedEducation,
    }));
  };

  const handlePrev = () => {
    navigate('/personal'); 
  };

  const handleNext = () => {
    const isValid = cvData.education.every(({ startDate, endDate, uniName, fieldOfStudy, universityLink, educationType }) => 
      startDate && endDate && uniName && fieldOfStudy && universityLink && educationType
    );

    if (!isValid) {
      setError('Please fill in all fields');
      return;
    }

    setError('');
    navigate('/experience'); 
  };

  const handleAddEducation = () => {
    setCvData((prevData) => ({
      ...prevData,
      education: [
        ...prevData.education,
        { startDate: '', endDate: '', uniName: '', fieldOfStudy: '', universityLink: '', educationType: '' }
      ],
    }));
  };

  return (
    <div className="education-page">
      <h2 className='title'>Education Information</h2>

      {error && <p style={{ color: 'red' }}>{error}</p>}

      <div className="card-education">
        <h3>Education Details</h3>
        {cvData.education.map((edu, index) => (
          <div key={index}>
            <div className="row">
              <label>Start Date:</label>
              <input
                type="date"
                name="startDate"
                value={edu.startDate || ''}
                onChange={(e) => handleChange(e, index)}
              />

              <label>End Date:</label>
              <input
                type="date"
                name="endDate"
                value={edu.endDate || ''}
                onChange={(e) => handleChange(e, index)}
              />
            </div>

            <div className="row">
              <label>Name of University:</label>
              <input
                type="text"
                name="uniName"
                value={edu.uniName || ''}
                onChange={(e) => handleChange(e, index)}
                placeholder="Enter name of University"
              />

              <label>Field of Study:</label>
              <input
                type="text"
                name="fieldOfStudy"
                value={edu.fieldOfStudy || ''}
                onChange={(e) => handleChange(e, index)}
                placeholder="Enter field of study"
              />
            </div>

            <div className="row">
              <label>University Website:</label>
              <input
                type="url"
                name="universityLink"
                value={edu.universityLink || ''}
                onChange={(e) => handleChange(e, index)}
                placeholder="Enter university website link"
              />
            </div>

            <label>Type of Education:</label>
            <select
              name="educationType"
              value={edu.educationType || ''}
              onChange={(e) => handleChange(e, index)}
            >
              <option value="">Select type</option>
              <option value="Bachelor">Bachelor</option>
              <option value="Master">Master</option>
              <option value="PhD">PhD</option>
            </select>
            <hr />
          </div>
        ))}

        <div className="buttons">
          <button onClick={handleAddEducation} className='add'>Add Another Education</button>
          <button onClick={handlePrev} className='prev'>Prev</button>
          <button onClick={handleNext} className='next'>Next</button>
        </div>
      </div>
    </div>
  );
}

export default EducationPage;
