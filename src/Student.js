import React, { useState, useEffect } from 'react';
import JobComponent from './JobComponent';
import './StudentComponent.css';
import { Link } from 'react-router-dom';

const StudentComponent = () => {
    const [jobListings, setJobListings] = useState([]);

    useEffect(() => {
        const fetchJobListings = async () => {
            try {
                const response = await fetch('http://localhost:9000/api/jobs/all');
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
            <div className="student-navbar" id = "one">
                <h1 style={{ marginBottom: '10px',marginTop:"25px",fontSize : 45 }}>Student Dashboard</h1>
                <nav>
                    <ul style={{marginTop:"-15px",marginBottom: '20px'}}>
                        <li ><Link to="/student">Jobs</Link></li>
                        <li ><Link to="/student/resume">Resume</Link></li>
                        <li ><Link to="/student/mock-interview">Mock Interview</Link></li>
                    </ul>
                </nav>
            </div>
            <h1 id = "headingListing" style={{ marginBottom: '20px' ,marginTop:"65px"}}>Job Listings for Students</h1>
            <div className="job-listings">
                {jobListings.map(job => (
                    <JobComponent key={job.jobId} job={job} />
                ))}
            </div>
        </div>
    );
};

export default StudentComponent;
