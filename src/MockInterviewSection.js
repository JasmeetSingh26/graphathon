import React from 'react';
import './App.css';
import { Link } from 'react-router-dom';
import './MockInterviewSection.css'; 

const MockInterviewSection = () => {
    const teachers = [
        { 
            name: 'Teacher 1', 
            email: 'teacher1@example.com',
            expertise: 'Software Engineering',
            availability: 'Monday, Wednesday, Friday'
        },
        { 
            name: 'Teacher 2', 
            email: 'teacher2@example.com',
            expertise: 'Data Science',
            availability: 'Tuesday, Thursday'
        },
        // Add more teachers as needed
    ];

    return (
        <div>
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
            <div style={{ textAlign: 'center' }}>
            <h2>Available Teachers for Mock Interviews</h2>
            <ul>
                {teachers.map((teacher, index) => (
                    <li key={index} className="teacher-card"> {/* Apply the class here */}
                        <div>
                            <strong>Name:</strong> {teacher.name}
                        </div>
                        <div>
                            <strong>Expertise:</strong> {teacher.expertise}
                        </div>
                        <div>
                            <strong>Availability:</strong> {teacher.availability}
                        </div>
                        <div>
                            <a href={`mailto:${teacher.email}`}>Contact</a>
                        </div>
                    </li>
                ))}
            </ul>
            </div>
        </div>
    );
};

export default MockInterviewSection;
