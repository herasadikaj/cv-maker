/* eslint-disable react/prop-types */
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import './pages.css';

function EducationPage({ cvData, setCvData }) {
  const navigate = useNavigate();
  const [error, setError] = useState('');
  const [showCancel, setShowCancel] = useState(false); 

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
    setShowCancel(true); 
  };

  const handleCancelAddEducation = () => {
    setCvData((prevData) => {
      const updatedEducation = [...prevData.education];
      updatedEducation.pop(); 
      return {
        ...prevData,
        education: updatedEducation,
      };
    });
  
    
    if (cvData.education.length <= 1) {
      setShowCancel(false); 
    }
  };

  return (
    <div className="education-page">
      <div className="card-education">
        <h2 className='personal-title'>Education Information</h2>
        <h5>step 2</h5>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        
        {cvData.education.map((edu, index) => (
          <div key={index}>
            <div className="row">
              <div className="input-group">
                <label>Start Date:</label>
                <input
                  type="date"
                  name="startDate"
                  value={edu.startDate || ''}
                  onChange={(e) => handleChange(e, index)}
                />
              </div>
              <div className="input-group">
                <label>End Date:</label>
                <input
                  type="date"
                  name="endDate"
                  value={edu.endDate || ''}
                  onChange={(e) => handleChange(e, index)}
                />
              </div>
            </div>

            <div className="row">
              <div className="input-group">
                <label>Name of University:</label>
                <input
                  type="text"
                  name="uniName"
                  value={edu.uniName || ''}
                  onChange={(e) => handleChange(e, index)}
                  placeholder="Enter name of University"
                />
              </div>
              <div className="input-group">
                <label>Field of Study:</label>
                <input
                  type="text"
                  name="fieldOfStudy"
                  value={edu.fieldOfStudy || ''}
                  onChange={(e) => handleChange(e, index)}
                  placeholder="Enter field of study"
                />
              </div>
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

            <label>Type of Education: </label>
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
  <button onClick={handlePrev} className='prev'>Prev</button>
  <button onClick={handleNext} className='next'>Next</button>
  <button onClick={handleAddEducation} className='add'>Add Another Education</button>
  {showCancel && (
    <button 
      onClick={handleCancelAddEducation} 
      className='cancel' 
      disabled={cvData.education.length <= 1} 
    >
      Cancel
    </button>
  )}
</div>
      </div>
    </div>
  );
}

export default EducationPage;
