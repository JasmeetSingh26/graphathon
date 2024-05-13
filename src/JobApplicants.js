import React from 'react';
import './JobApplicants.css';

const JobApplicants = ({ applicants }) => {
    return (
        <div style={{textAlign:'centre'}}>
            <h4 style={{marginBottom: '16px'}}>Applicants:</h4>
            {applicants.map(applicant => (
                <div key={applicant._id} style={{marginBottom: '20px',marginLeft: 'auto',marginRight: 'auto',textAlign: 'center', width: '80%', maxWidth: '400px', padding: '10px',border:'1px solid #ccc',borderRadius: '4px' }}>
                    <p>Name: {applicant.name}</p>
                    <p>Email: {applicant.email}</p>
                    <p>Phone: {applicant.phone}</p>
                    {/* Add more details as needed */}
                </div>
            ))}
        </div>
    );
};

export default JobApplicants;
