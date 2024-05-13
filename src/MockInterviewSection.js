import React from 'react';
import './App.css';
import { Link } from 'react-router-dom';
import './MockInterviewSection.css'; 
import './StudentComponent.css';

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
        { 
            name: 'Teacher 3', 
            email: 'teacher3@example.com',
            expertise: 'Software Engineering',
            availability: 'Monday'
        },
        { 
            name: 'Teacher 4', 
            email: 'teacher4@example.com',
            expertise: 'Software Engineering',
            availability: 'Wednesday, Friday'
        }
    ];

    return (
        <div>
            <div className="student-component">
            <div className="student-navbar" id = "one">
                <h1 style={{ marginBottom: '10px',marginTop:"25px" ,fontSize : 45 }}>Student Dashboard</h1>
                <nav>
                    <ul style={{marginTop:"-15px"}}>
                        <li><Link to="/student">Jobs</Link></li>
                        <li><Link to="/student/resume">Resume</Link></li>
                        <li><Link to="/student/mock-interview">Mock Interview</Link></li>
                    </ul>
                </nav>
            </div>
            </div>
            <div style={{textAlign: 'center' }}>
            <h2 style={{marginTop:"16px",marginBottom:"30px",marginLeft:"30%"}}> Available Teachers for Mock Interviews</h2>
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
