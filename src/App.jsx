import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PersonalDataPage from './components/PersonalDetails';
import EducationPage from './components/Education'; 
import Homepage from './components/Homepage';
import Skills from './components/Skills';
import Languages from './components/Languages';
import ExperiencePage from './components/Experience';
import CvFinal from './components/CvFinal';

function App() {
  const [cvData, setCvData] = useState({
    personalData: { name: '', surname: '', email: '', phone: '', linkedin: '', about: '' },
    education: { startDate: '', endDate: '', uniName: '', fieldOfStudy: '', universityLink: '', educationType: '' },
    experience: { startDate: '', endDate: '', companyName: '', position: '', description: '' },
    skills: [],
    languages: []
  });

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/personal" element={<PersonalDataPage cvData={cvData} setCvData={setCvData} />} />
        <Route path="/education" element={<EducationPage cvData={cvData} setCvData={setCvData} />} />
        <Route path="/experience" element={<ExperiencePage cvData={cvData} setCvData={setCvData} />} />
        <Route path="/skills" element={<Skills cvData={cvData} setCvData={setCvData} />} />
        <Route path="/languages" element={<Languages cvData={cvData} setCvData={setCvData} />} />
        <Route path="/cv" element={<CvFinal />} />
      </Routes>
    </Router>
  );
}

export default App;
