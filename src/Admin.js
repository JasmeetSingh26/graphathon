import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Admin = () => {
    const [password, setPassword] = useState('');
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleLogin = (event) => {
        event.preventDefault(); // Prevent default form submission behavior
        
        // Check if the password is correct
        if (password === '123') {
            setIsAuthenticated(true);
        } else {
            alert('Incorrect password');
        }
    };

    return (
        <div style={{ marginTop: '40px' }}>
            <h2 style={{ marginBottom: '20px', fontSize: 35,marginLeft: '40%' }}>Admin Login</h2>
            <form style={{border:"1px solid white",marginTop:"50px", marginLeft:"35%"}} onSubmit={handleLogin}>
                <div >
                    <label style={{ marginBottom: '40px', fontSize: 20 }}>Password :  </label>
                    <input type="password" style={{
                            fontSize: '25px',
                            height: '30px',
                            border: 'none', 
                            borderBottom: '2px solid grey', 
                        }} value={password} onChange={handlePasswordChange} />
                </div>
                <button type="submit" style={{ fontSize: '20px', height: '35px' }}>Login</button>
            </form>
            {isAuthenticated && (
                <div>
                    <p style={{ fontSize: '25px', height: '30px', marginLeft: '40%' }}>Login successful!</p>
                    {/* Redirect to the admin dashboard */}
                    <Link style={{ fontSize: '20px', height: '30px', marginLeft: '40%' }}to="/admin/dashboard">Go to Dashboard</Link>
                </div>
            )}
        </div>
    );
}

export default Admin;
