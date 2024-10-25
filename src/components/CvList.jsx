/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useSearchParams } from 'react-router-dom';
import './pages.css';

function CvList() {
  const [cvList, setCvList] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();

  const searchTerm = searchParams.get('search') || '';

  useEffect(() => {
    const storedCvs = localStorage.getItem('cvDataList');
    if (storedCvs) {
      setCvList(JSON.parse(storedCvs));
    }
  }, []);

  const handleDelete = (index) => {
    const updatedCvList = cvList.filter((_, i) => i !== index); 
    setCvList(updatedCvList); 
    localStorage.setItem('cvDataList', JSON.stringify(updatedCvList)); 
  };

  const filteredCvs = cvList.filter(cvData => {
    const cvName = cvData.cvName || '';
    return cvName.toLowerCase().includes(searchTerm.toLowerCase());
  });

  if (filteredCvs.length === 0) {
    return (
      <div>
        <p>No CVs available. Please create a CV.</p>
        <button onClick={() => navigate('/personal')} className="create-cv-button">
          Create a CV
        </button>
      </div>
    );
  }

  return (
    <div className="cv-cards-container">
      <input
        type="text"
        placeholder="Search by CV Name"
        value={searchTerm}
        onChange={(e) => {
          const value = e.target.value;
          setSearchParams(value ? { search: value } : {});
        }}
        className="search-bar"
      />
      
      <div className="cv-card-grid">
        {filteredCvs.map((cvData, index) => (
          <div key={index} className="cv-card">
            <h2>{cvData.cvName || "Unnamed CV"}</h2>
            <p><strong>Name:</strong> {cvData.personalData?.name}</p>
            <p><strong>Surname:</strong> {cvData.personalData?.surname}</p>
            <Link to={`/cv/${index}`} className="view-details">View Full CV</Link>
            
            <button 
              className="delete-button"
              onClick={() => handleDelete(index)}
            >
              Delete CV
            </button>
          </div>
        ))}
      </div>

      <button onClick={() => navigate('/')} className="home-button">Homepage</button>
    </div>
  );
}

export default CvList;
