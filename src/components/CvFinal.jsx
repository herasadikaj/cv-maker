import { useParams, useNavigate } from 'react-router-dom';

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
      <h1>Curriculum Vitae</h1>
      <h2>Personal Information</h2>
      <p>Name: {cvData.personalData.name}</p>
      <p>Surname: {cvData.personalData.surname}</p>
      <p>Email: {cvData.personalData.email}</p>
      <p>Phone: {cvData.personalData.phone}</p>
      <p>LinkedIn: {cvData.personalData.linkedin}</p>
      <p>About: {cvData.personalData.about}</p>

      <h2>Education</h2>
      <p>Start Date: {cvData.education.startDate}</p>
      <p>End Date: {cvData.education.endDate}</p>
      <p>University Name: {cvData.education.uniName}</p>
      <p>Field of Study: {cvData.education.fieldOfStudy}</p>
      <p>University Link: {cvData.education.universityLink}</p>
      <p>Education Type: {cvData.education.educationType}</p>

      <h2>Experience</h2>
      <p>Start Date: {cvData.experience.startDate}</p>
      <p>End Date: {cvData.experience.endDate}</p>
      <p>Company Name: {cvData.experience.companyName}</p>
      <p>Position: {cvData.experience.position}</p>
      <p>Description: {cvData.experience.description}</p>

      <h2>Skills</h2>
      <ul>
        {cvData.skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>

      <h2>Languages</h2>
      <ul>
        {cvData.languages.map((language, index) => (
          <li key={index}>{language}</li>
        ))}
      </ul>

      <div className='butona-fund'>
        <button onClick={()=>navigate('/languages')}>Prev</button>
        <button onClick={() => navigate('/list')}>Back to CV List</button>
        <button onClick={() => navigate('/')}>Homepage</button>
      </div>
    </div>
  );
}

export default CvFinal;
