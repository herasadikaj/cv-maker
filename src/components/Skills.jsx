/* eslint-disable react/prop-types */
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import './pages.css';
import { MdDeleteOutline } from "react-icons/md";

function SkillsPage({ cvData, setCvData }) {
  const navigate = useNavigate();
  const [error, setError] = useState('');
  const [skill, setSkill] = useState('');

  const handleSkillChange = (e) => {
    setSkill(e.target.value);
  };

  const handleAddSkill = () => {
    if (!skill) {
      setError('Please enter a skill');
      return;
    }

    setCvData((prevData) => ({
      ...prevData,
      skills: [...prevData.skills, skill], 
    }));
    
    setSkill(''); 
    setError(''); 
  };

  const handlePrev = () => {
    navigate('/experience');
  };

  const handleNext = () => {
    if (cvData.skills.length === 0) {
      setError('Please add at least one skill');
      return;
    }

    setError('');
    navigate('/languages'); 
  };

  const handleDeleteSkill = (skillToDelete) => {
    setCvData((prevData) => ({
      ...prevData,
      skills: prevData.skills.filter((skill) => skill !== skillToDelete),
    }));
  };

  return (
    <div className="skills-page">
      <h2 className='personal-title'>Skills</h2>
      <h5>step 4</h5>
      {error && <p style={{ color: 'red' }}>{error}</p>}

      <div className="row">
        <div className="card-skill">
          <input
            type="text"
            value={skill}
            onChange={handleSkillChange}
            placeholder="Enter a skill"
          />
          <button onClick={handleAddSkill} className='add'>Add Skill</button>
        </div>

        <div className="card-list">
          <h3>Added Skills:</h3>
          <ul className="skill-list">
            {cvData.skills.map((skill, index) => (
              <li key={index} className="skill-item">
                <span>{skill}</span>
                <MdDeleteOutline
                  onClick={() => handleDeleteSkill(skill)}
                  className="delete-button"
                />
              </li>
            ))}
          </ul>
        </div>

        <div className="buttons">
          <button onClick={handlePrev} className="prev">Prev</button>
          <button onClick={handleNext} className="next">Next</button>
        </div>
      </div>
    </div>
  );
}

export default SkillsPage;
