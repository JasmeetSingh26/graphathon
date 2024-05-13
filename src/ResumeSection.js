import React from 'react';
import './StudentComponent.css';
import { Link } from 'react-router-dom';

const ResumeSection = () => {
    const redirectToExternalPage = () => {
        window.open(' https://siddhraj-sinh-resumescreeningapp-webapp-qmebyy.streamlitapp.com/', '_blank'); 
    };

    return (
        <div>
            <div className="student-component">
                <div className="student-navbar" id="one">
                    <h1 style={{ marginBottom: '10px', marginTop: "25px", fontSize: '45' }}>Student Dashboard</h1>
                    <nav>
                        <ul style={{ marginTop: "-15px" }}>
                            <li><Link to="/student">Jobs</Link></li>
                            <li><Link to="/student/resume">Resume</Link></li>
                            <li><Link to="/student/mock-interview">Mock Interview</Link></li>
                        </ul>
                    </nav>
                </div>
            </div>
            {/* Button for redirecting to abc.com */}
            <div style={{ textAlign: 'center', marginTop: '25px',fontSize: '45'}}>
                <button onClick={redirectToExternalPage}>Go to Resume Score check</button>
            </div>
        </div>
    );
}

export default ResumeSection;
