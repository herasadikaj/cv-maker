/* eslint-disable react/prop-types */
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import './pages.css';

function Languages({ cvData, setCvData }) {
  const navigate = useNavigate();
  const [error, setError] = useState('');
  const [language, setLanguage] = useState('');
  const [cvName, setCvName] = useState('');

  const handleLanguageChange = (e) => {
    setLanguage(e.target.value);
  };

  const handleCvNameChange = (e) => {
    setCvName(e.target.value);
  };

  const handleAddLanguage = () => {
    if (!language) {
      setError('Please enter a language');
      return;
    }

    setCvData((prevData) => ({
      ...prevData,
      languages: [...prevData.languages, language],
    }));

    setLanguage('');
    setError('');
  };

  const handlePrev = () => {
    navigate('/skills');
  };

  const handleSubmit = () => {
    if (!cvName) {
      setError('Please enter a name for your CV');
      return;
    }

    const storedCvs = JSON.parse(localStorage.getItem('cvDataList')) || [];
    const updatedCvData = { ...cvData, cvName }; 
    localStorage.setItem('cvDataList', JSON.stringify([...storedCvs, updatedCvData])); 

    navigate('/list', { state: { cvData: updatedCvData } }); 
  };

  return (
    <div className="languages-page">
      <h2>Languages</h2>
      <h5>step 5</h5>
      {error && <p style={{ color: 'red' }}>{error}</p>}

      <div className="card">
        <div className="language-input-container">
  
          <input
            type="text"
            value={language}
            onChange={handleLanguageChange}
            placeholder="Enter a language"
          />
          <button onClick={handleAddLanguage} className="add-l">Add Language</button>
        </div>

        <div className="added-languages">
          <h3>Added Languages:</h3>
          <ul>
            {cvData.languages.map((language, index) => (
              <li key={index}>{language}</li>
            ))}
          </ul>
        </div>
      </div>
<br/>
      <div className="card">
        <h3>CV Name</h3>
        <input
          type="text"
          value={cvName}
          onChange={handleCvNameChange}
          placeholder="Enter a name for your CV"
        />
      </div>
      <div className="buttons">
      <button onClick={handlePrev}>Prev</button>
      <button onClick={handleSubmit}>Submit</button> </div>
    </div>
  );
}

export default Languages;
