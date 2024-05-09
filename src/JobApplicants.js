import React from 'react';
import './JobApplicants.css';

const JobApplicants = ({ applicants }) => {
    return (
        <div>
            <h4>Applicants:</h4>
            {applicants.map(applicant => (
                <div key={applicant._id} style={{ border: '1px solid #ccc', borderRadius: '5px', padding: '10px', marginBottom: '10px' }}>
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
