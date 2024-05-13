import React, { useState } from 'react';

const AdminJob = () => {
    const [jobData, setJobData] = useState({
        jobName: '',
        companyName: '',
        location: '',
        jobDescription: '',
        jobId: '',
        jobEnd: new Date().toISOString().slice(0, 10) // Set initial end date to today,
        //jobEndDate: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setJobData(prevData => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:9000/api/jobs', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(jobData)
            });
            if (response.ok) {
                console.log('Job added successfully!');
                setJobData({
                    jobName: '',
                    companyName: '',
                    location: '',
                    jobDescription: '',
                    jobId: ''
                });
            } else {
                console.error('Failed to add job');
            }
        } catch (error) {
            console.error('Error adding job:', error);
        }
    };

    return (
        <div>
            <h2>Add New Job</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="jobName">Job Name:</label>
                    <input type="text" id="jobName" name="jobName" value={jobData.jobName} onChange={handleChange} required />
                </div>
                <div>
                    <label htmlFor="companyName">Company Name:</label>
                    <input type="text" id="companyName" name="companyName" value={jobData.companyName} onChange={handleChange} required />
                </div>
                <div>
                    <label htmlFor="location">Location:</label>
                    <input type="text" id="location" name="location" value={jobData.location} onChange={handleChange} required />
                </div>
                <div>
                    <label htmlFor="jobDescription">Job Description:</label>
                    <textarea id="jobDescription" name="jobDescription" value={jobData.jobDescription} onChange={handleChange} required />
                </div>
                <div>
                    <label htmlFor="jobId">Job ID:</label>
                    <textarea id="jobId" name="jobId" value={jobData.jobId} onChange={handleChange} required />
                </div>
                <div>
                    <label htmlFor="jobEnd">End Date:</label>
                    <input type="date" id="jobEnd" name="jobEnd" value={jobData.jobEnd} onChange={handleChange} required />
                </div>
                <button type="submit">Add Job</button>
            </form>
        </div>
    );
};

export default AdminJob;
