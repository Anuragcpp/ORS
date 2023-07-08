

import React, { useState } from 'react';
import './CandidateSearch.css';
import { Link } from 'react-router-dom';

const CandidateSearch = ({ onSearchResult }) => {
  const [location, setLocation] = useState('');
  const [jobRole, setJobRole] = useState('');

  const handleLocationChange = (event) => {
    setLocation(event.target.value);
  };

  const handleJobRoleChange = (event) => {
    setJobRole(event.target.value);
  };

 

  return (
    <div className="container">
      <h2>Candidate Search</h2>
      <div className="input-container">
        <label htmlFor="location">Location:</label>
        <input type="text" id="location" value={location} onChange={handleLocationChange} />
      </div>
      <div className="input-container">
        <label htmlFor="jobRole">Job Role:</label>
        <input type="text" id="jobRole" value={jobRole} onChange={handleJobRoleChange} />
      </div>
      <button  >Search</button>
      <button className="back-button" >
        <Link to='/' className='back'> Back to Home Page!  </Link> 
          
        </button>
    </div>
  );
};

export default CandidateSearch;

