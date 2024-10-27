/* eslint-disable react/prop-types */
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import './pages.css';

function ExperiencePage({ cvData, setCvData }) {
  const navigate = useNavigate();
  const [error, setError] = useState('');
  const [showCancel, setShowCancel] = useState(false);

  const handleChange = (e, index) => {
    const { name, value } = e.target;
    setCvData((prevData) => {
      const updatedExperience = [...prevData.experience];
      updatedExperience[index] = {
        ...updatedExperience[index],
        [name]: value,
      };
      return {
        ...prevData,
        experience: updatedExperience,
      };
    });
  };

  const handleAddExperience = () => {
    setCvData((prevData) => ({
      ...prevData,
      experience: [
        ...prevData.experience,
        { startDate: '', endDate: '', companyName: '', position: '', description: '' },
      ],
    }));
    setShowCancel(true);
  };
  const handleCancelAddExperience=()=>{
    setCvData((prevData) => {
      const updatedExperience = [...prevData.experience];
      updatedExperience.pop(); 
      return {
        ...prevData,
        experience: updatedExperience,
      };
    });
  
  if (cvData.experience.length <= 1) {
    setShowCancel(false); 
  }
};

  const handlePrev = () => {
    navigate('/education');
  };

  const handleNext = () => {
    const hasIncompleteFields = cvData.experience.some(exp =>
      !exp.startDate || !exp.endDate || !exp.companyName || !exp.position || !exp.description
    );

    if (hasIncompleteFields) {
      setError('Please fill in all fields for each experience');
      return;
    }
  
    setError('');
    navigate('/skills');
  };

  return (
    <div className="experience-page">
      <h2 className='personal-title'>Experience Information</h2>
      <h5>step 3</h5>
      {error && <p style={{ color: 'red' }}>{error}</p>}

      <div className="card-container">
        {cvData.experience.map((exp, index) => (
          <div className="card" key={index}>

            <div className="row">
              <div className="input-group">
                <label>Start Date:</label>
                <input
                  type="date"
                  name="startDate"
                  value={exp.startDate || ''}
                  onChange={(e) => handleChange(e, index)}
                />
              </div>

              <div className="input-group">
                <label>End Date:</label>
                <input
                  type="date"
                  name="endDate"
                  value={exp.endDate || ''}
                  onChange={(e) => handleChange(e, index)}
                />
              </div>
            </div>

            <div className="row">
              <div className="input-group">
                <label>Company Name:</label>
                <input
                  type="text"
                  name="companyName"
                  value={exp.companyName || ''}
                  onChange={(e) => handleChange(e, index)}
                  placeholder="Enter company name"
                />
              </div>

              <div className="input-group">
                <label>Position:</label>
                <input
                  type="text"
                  name="position"
                  value={exp.position || ''}
                  onChange={(e) => handleChange(e, index)}
                  placeholder="Enter position"
                />
              </div>
            </div>

            <div className="input-group description">
              <label>Description:</label>
              <textarea
                name="description"
                value={exp.description || ''}
                onChange={(e) => handleChange(e, index)}
              />
            </div>
          </div>
        ))}
      </div>

      <div className="buttons">
      <button onClick={handlePrev} className="prev">Prev</button>
      <button onClick={handleNext} className="next">Next</button>
        <button onClick={handleAddExperience} className="add-experience">Add Another Experience</button>
        {showCancel && (
    <button 
      onClick={handleCancelAddExperience} 
      className='cancel' 
      disabled={cvData.experience.length <= 1} 
    >
      Cancel
    </button>
  )}
      </div>
    </div>
  );
}

export default ExperiencePage;
