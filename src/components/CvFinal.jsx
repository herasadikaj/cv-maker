import { useParams, useNavigate } from 'react-router-dom';
import './pages.css';

function CvFinal() {
  const { id } = useParams(); 
  const navigate = useNavigate();
  
  const storedCvs = JSON.parse(localStorage.getItem('cvDataList')) || [];
  const cvData = storedCvs[id]; 

  if (!cvData) {
    return <p>Loading or No Data Available...</p>;
  }

  return (
    <div className="cv-display">
      <h1 className='curiculum'>Curriculum Vitae</h1>

      <section className="personal-info">
        <h2>Personal Information</h2>
        <p><strong>Name:</strong> {cvData.personalData.name}</p>
        <p><strong>Surname:</strong> {cvData.personalData.surname}</p>
        <p><strong>Email:</strong> {cvData.personalData.email}</p>
        <p><strong>Phone:</strong> {cvData.personalData.phone}</p>
        <p><strong>LinkedIn:</strong> {cvData.personalData.linkedin}</p>
        <p><strong>About:</strong> {cvData.personalData.about}</p>
      </section>

      <section className="education">
        <h2>Education</h2>
        <p><strong>Start Date:</strong> {cvData.education.startDate}</p>
        <p><strong>End Date:</strong> {cvData.education.endDate}</p>
        <p><strong>University Name:</strong> {cvData.education.uniName}</p>
        <p><strong>Field of Study:</strong> {cvData.education.fieldOfStudy}</p>
        <p>
          <strong>University Link:</strong> 
          <a href={cvData.education.universityLink} target="_blank" rel="noopener noreferrer">
            {cvData.education.universityLink}
          </a>
        </p>
        <p><strong>Education Type:</strong> {cvData.education.educationType}</p>
      </section>

      <section className="experience">
        <h2>Experience</h2>
        <p><strong>Start Date:</strong> {cvData.experience.startDate}</p>
        <p><strong>End Date:</strong> {cvData.experience.endDate}</p>
        <p><strong>Company Name:</strong> {cvData.experience.companyName}</p>
        <p><strong>Position:</strong> {cvData.experience.position}</p>
        <p><strong>Description:</strong> {cvData.experience.description}</p>
      </section>

      <section className="skills">
        <h2>Skills</h2>
        <ul>
          {cvData.skills.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
      </section>

      <section className="languages">
        <h2>Languages</h2>
        <ul>
          {cvData.languages.map((language, index) => (
            <li key={index}>{language}</li>
          ))}
        </ul>
      </section>

      <div className='button-container'>
        <button onClick={() => navigate('/languages')}>Prev</button>
        <button onClick={() => navigate('/list')}>Back to CV List</button>
        <button onClick={() => navigate('/')}>Homepage</button>
      </div>
    </div>
  );
}

export default CvFinal;
