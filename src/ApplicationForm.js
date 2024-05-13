import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import './ApplicationForm.css'; // Import CSS file for styling

const ApplicationForm = () => {
    const { jobId } = useParams(); // Get the jobId from the route params
    const [formData, setFormData] = useState({
        jobId: jobId,
        cgpa: '',
        college: '',
        name: '',
        email: '',
        phone: '',
        linkedin: '',
        github: '',
        location: '',
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleFileChange = (event) => {
        setFormData({
            ...formData,
            resume: event.target.files[0]
        });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await fetch('http://localhost:9000/api/students', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            if (response.ok) {
                alert('Form submitted successfully!');
                // Reset form fields if needed
                setFormData({
                    jobId: jobId,
                    cgpa: '',
                    college: '',
                    name: '',
                    email: '',
                    phone: '',
                    linkedin: '',
                    github: '',
                    location: '',
                });
            } else {
                alert('Form submission failed!');
            }
        } catch (error) {
            console.error('Error submitting form:', error);
            alert('An error occurred. Please try again later.');
        }
    };

    return (
        <div className="application-form">
            <h2>Application Form for Job ID: {jobId}</h2>
            <form onSubmit={handleSubmit}>
                <input type="hidden" name="jobId" value={jobId} />
                <div className="form-group">
                    <label htmlFor="cgpa">CGPA:</label>
                    <input type="text" id="cgpa" name="cgpa" value={formData.cgpa} onChange={handleChange} required />
                </div>
                <div className="form-group">
                    <label htmlFor="college">College Name:</label>
                    <input type="text" id="college" name="college" value={formData.college} onChange={handleChange} required />
                </div>
                <div className="form-group">
                    <label htmlFor="name">Student Name:</label>
                    <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
                </div>
                <div className="form-group">
                    <label htmlFor="phone">Phone:</label>
                    <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} required />
                </div>
                <div className="form-group">
                    <label htmlFor="linkedin">LinkedIn URL:</label>
                    <input type="text" id="linkedin" name="linkedin" value={formData.linkedin} onChange={handleChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="github">GitHub URL:</label>
                    <input type="text" id="github" name="github" value={formData.github} onChange={handleChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="location">Preferred Location:</label>
                    <input type="text" id="location" name="location" value={formData.location} onChange={handleChange} required />
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
