/* eslint-disable react/prop-types */
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import './pages.css';

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
  const handlePrev=()=>{
    navigate('/experience');
  }
  const handleNext = () => {
    if (cvData.skills.length === 0) {
      setError('Please add at least one skill');
      return;
    }

    setError('');
    navigate('/languages'); 
  };

  return (
    <div className="skills-page">
      <h2>Skills</h2>

      {error && <p style={{ color: 'red' }}>{error}</p>}

      <div className="card">
        <label>Skill:</label>
        <input
          type="text"
          value={skill}
          onChange={handleSkillChange}
          placeholder="Enter a skill"
        />
        <button onClick={handleAddSkill}>Add Skill</button>
      </div>

      <div className="card">
        <h3>Added Skills:</h3>
        <ul>
          {cvData.skills.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
      </div>
      <button onClick={handlePrev}>Prev</button>
      <button onClick={handleNext}>Next</button>
    </div>
  );
}

export default SkillsPage;