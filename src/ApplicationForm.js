// ApplicationForm.js
import React from 'react';
import { useParams } from 'react-router-dom';
import './ApplicationForm.css'; // Import CSS file for styling

const ApplicationForm = () => {
    const { jobId } = useParams(); // Get the jobId from the route params

    const handleSubmit = (event) => {
        event.preventDefault();
        // Handle form submission logic
    };

    return (
        <div className="application-form">
            <h2>Application Form for Job ID: {jobId}</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="cgpa">CGPA:</label>
                    <input type="text" id="cgpa" name="cgpa" required />
                </div>
                <div className="form-group">
                    <label htmlFor="college">College Name:</label>
                    <input type="text" id="college" name="college" required />
                </div>
                <div className="form-group">
                    <label htmlFor="name">Student Name:</label>
                    <input type="text" id="name" name="name" required />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" required />
                </div>
                <div className="form-group">
                    <label htmlFor="phone">Phone:</label>
                    <input type="tel" id="phone" name="phone" required />
                </div>
                <div className="form-group">
                    <label htmlFor="linkedin">LinkedIn URL:</label>
                    <input type="text" id="linkedin" name="linkedin" />
                </div>
                <div className="form-group">
                    <label htmlFor="github">GitHub URL:</label>
                    <input type="text" id="github" name="github" />
                </div>
                <div className="form-group">
                    <label htmlFor="location">Preferred Location:</label>
                    <input type="text" id="location" name="location" required />
                </div>
                <div className="form-group">
                    <label htmlFor="resume">Resume:</label>
                    <input type="file" id="resume" name="resume" accept=".pdf,.doc,.docx" />
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default ApplicationForm;
