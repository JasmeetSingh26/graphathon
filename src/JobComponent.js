import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from React Router
import './JobComponent.css'; // Import CSS file for styling

const JobComponent = ({ job }) => {
    return (
        <div className="job-card">
            <h3 className="job-title">{job.jobName}</h3>
            <p className="job-info"><strong>Company:</strong> {job.companyName}</p>
            <p className="job-info"><strong>Location:</strong> {job.location}</p>
            <p className="job-description">{job.jobDescription}</p>
            <Link to={`/apply/${job.jobId}`}>
                <button className="apply-button">Apply Now</button>
            </Link>
        </div>
    );
};

export default JobComponent;
