import React from 'react';
import { Link } from 'react-router-dom';
import { Stack } from '@mui/material';
import './Navbar.css'; 


const Navbar = () => (
  <Stack direction="row" justifyContent="space-around" sx={{ gap: { sm: '123px', xs: '40px' }, mt: { sm: '32px', xs: '20px' }, justifyContent: 'none' }} px="20px">
    <div style={{ textAlign: 'center' }}>

    <span id = "mainheading">Placements360</span>
    <Stack
      direction="row"
      gap="40px"
      fontFamily="Alegreya"
      fontSize="24px"
      alignItems="flex-end"
    >
      <Link to="/student" style={{ textDecoration: 'none', color: '#3A1212', borderBottom: '3px solid #FF2625' }}>Student</Link>
      <Link to="/admin" style={{ textDecoration: 'none', color: '#3A1212', borderBottom: '3px solid #FF2625' }}>Admin</Link>
    </Stack>
    </div>
  </Stack>
);

export default Navbar;
