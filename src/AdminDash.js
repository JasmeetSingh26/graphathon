import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import JobApplicants from './JobApplicants';

const AdminDash = () => {
    const [jobs, setJobs] = useState([]);

    useEffect(() => {
        const fetchJobs = async () => {
            try {
                const response = await fetch('http://localhost:9000/api/students/all');
                if (response.ok) {
                    const data = await response.json();
                    console.log(data);
                    // Organize data into separate arrays based on job IDs
                    const jobsMap = new Map();
                    data.forEach(student => {
                        if (!jobsMap.has(student.jobId)) {
                            jobsMap.set(student.jobId, []);
                        }
                        jobsMap.get(student.jobId).push(student);
                    });
                    // Convert map to array of objects and sort by job ID
                    const sortedJobs = Array.from(jobsMap, ([jobId, applicants]) => ({ jobId, applicants })).sort((a, b) => a.jobId.localeCompare(b.jobId));
                    setJobs(sortedJobs);
                } else {
                    console.error('Failed to fetch jobs');
                }
            } catch (error) {
                console.error('Error fetching jobs:', error);
            }
        };

        fetchJobs();

        return () => {
            // Cleanup if needed
        };
    }, []);

    return (
        <div>
            <h2>All Jobs and Applicants</h2>
            {jobs.map(job => (
                <div key={job.jobId}>
                    <h3>Job ID: {job.jobId}</h3>
                    <p>Number of Applicants: {job.applicants.length}</p>
                    <JobApplicants applicants={job.applicants} />
                </div>
            ))}
            <Link to="/admin/job">
                <button>Add New Job</button>
            </Link>
        </div>
    );
};

export default AdminDash;
