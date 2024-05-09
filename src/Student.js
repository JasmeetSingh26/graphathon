import React from 'react';
import JobComponent from './JobComponent'; // Importing the JobComponent
import './StudentComponent.css'; // Import CSS file for styling
import { Link } from 'react-router-dom';

class StudentComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            jobListings: [
                { id: 1, title: 'Frontend Developer Intern', company: 'ABC Tech', location: 'New York', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
                { id: 2, title: 'Marketing Intern', company: 'XYZ Agency', location: 'San Francisco', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
                { id: 3, title: 'Data Analyst Intern', company: '123 Corp', location: 'Chicago', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
                // Add more job listings as needed
            ]
        };
    }

    render() {
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
                    {this.state.jobListings.map(job => (
                        <JobComponent key={job.id} job={job} />
                    ))}
                </div>
            </div>
        );
    }
}

export default StudentComponent;
