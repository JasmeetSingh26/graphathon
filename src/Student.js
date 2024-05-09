import React, { useState, useEffect } from 'react';
import JobComponent from './JobComponent';
import './StudentComponent.css';
import { Link } from 'react-router-dom';

const StudentComponent = () => {
    const [jobListings, setJobListings] = useState([]);

    useEffect(() => {
        const fetchJobListings = async () => {
            try {
                const response = await fetch('http://localhost:5000/api/jobs/all');
                if (response.ok) {
                    const data = await response.json();
                    console.log(data);
                    setJobListings(data);
                } else {
                    console.error('Failed to fetch job listings');
                }
            } catch (error) {
                console.error('Error fetching job listings:', error);
            }
        };

        fetchJobListings();

        return () => {
            // Cleanup if needed
        };
    }, []);

    return (
        <div className="student-component">
            <div className="student-navbar">
                <h1>Student Dashboard</h1>
                <nav>
                    <ul>
                        <li><Link to="/student">Jobs</Link></li>
                        <li><Link to="/student/resume">Resume</Link></li>
                        <li><Link to="/student/mock-interview">Mock Interview</Link></li>
                    </ul>
                </nav>
            </div>
            <h1>Job Listings for Students</h1>
            <div className="job-listings">
                {jobListings.map(job => (
                    <JobComponent key={job.jobId} job={job} />
                ))}
            </div>
        </div>
    );
};

export default StudentComponent;
