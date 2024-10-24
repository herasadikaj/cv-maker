/* eslint-disable react/prop-types */
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import './pages.css';
function ExperiencePage({cvData, setCvData}){
const navigate = useNavigate();
const[error, setError] = useState('');

const handleChange=(e) => {
    const{name, value} = e.target;
    setCvData((prevData) => ({
        ...prevData,
        experience: {
            ...prevData.experience,
            [name]:value,
        },
    }));
};

const handlePrev=()=>{
    navigate('/education');
};

const handleNext=() => {
    const {startDate, endDate, companyName, position, description} = cvData.experience;

    if(!startDate || !endDate || !companyName || !position || !description){
        setError('Please fill in all fields');
        return;
    }

setError('');
navigate('/skills');


};


return(

    <div className="experience-page">
    <h2>Experience Information</h2>
{error && <p style={{color:'red'}}>{error}</p>}

<div className="card">
        <h3>Experience Details</h3>
        
        <label>Start Date:</label>
        <input
          type="date"
          name="startDate"
          value={cvData.experience.startDate || ''}
          onChange={handleChange}
        />
        <br />

        <label>End Date:</label>
        <input
          type="date"
          name="endDate"
          value={cvData.experience.endDate || ''}
          onChange={handleChange}
        />
        <br />

        <label>Company Name</label>
        <input 
        type="text"
        name="companyName"
        value={cvData.experience.companyName || ''}
        onChange={handleChange}
        />
        <label>Position</label>
        <input
        type="text"
        name="position"
        value={cvData.experience.position || ''}
        onChange={handleChange}
        />
        <label>Description</label>
        <textarea
        type="text"
        name="description"
        value={cvData.experience.description || ''}
        onChange={handleChange}
        />
        </div>
      

      <button onClick={handlePrev}>Prev</button>
      <button onClick={handleNext}>Next</button>
    </div>
)

}


export default ExperiencePage;

