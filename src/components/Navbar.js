import React from 'react';
import { Link } from 'react-router-dom';
import { Stack } from '@mui/material';
import './Navbar.css'; 

const Navbar = () => (
  <div>
    <Stack
        direction="row"
        gap="10px"
        fontFamily="Alegreya"
        fontSize="20px"
        alignItems="flex-end"
      >
        <nav>
          <input type="checkbox" id="check" />
          <ul style={{marginTop:"-15px"}}>
            <li ><Link to="/student" className="stdLink">Student</Link></li>
            <li ><Link to="/admin" className="stdLink">Admin</Link></li>
          </ul>
        </nav>
      </Stack>
  <Stack direction="row" justifyContent="space-around" sx={{ gap: { sm: '123px', xs: '40px' }, mt: { sm: '32px', xs: '20px' }, justifyContent: 'none' }} px="20px">
    <div style={{ textAlign: 'center' }}>

      <span id="mainheading">Placements360</span>
      
    </div>
  </Stack>
  </div>
);

export default Navbar;
