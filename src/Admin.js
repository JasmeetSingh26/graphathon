import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Admin = () => {
    const [password, setPassword] = useState('');
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleLogin = () => {
        // Check if the password is correct
        if (password === '123') {
            setIsAuthenticated(true);
        } else {
            alert('Incorrect password');
        }
    };

    return (
        <div>
            <h2>Admin Login</h2>
            <div>
                <label>Password:</label>
                <input type="password" value={password} onChange={handlePasswordChange} />
            </div>
            <button onClick={handleLogin}>Login</button>
            {isAuthenticated && (
                <div>
                    <p>Login successful!</p>
                    {/* Redirect to the admin dashboard */}
                    <Link to="/admin/dashboard">Go to Dashboard</Link>
                </div>
            )}
        </div>
    );
}

export default Admin;
