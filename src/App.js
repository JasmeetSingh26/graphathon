import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Box } from '@mui/material';
import StudentComponent from './Student';
import ResumeSection from './ResumeSection';
import MockInterviewSection from './MockInterviewSection';
import ApplicationForm from './ApplicationForm';


import './App.css';
import Navbar from './components/Navbar';

const App = () => (
  <Box width="100vh" sx={{ width: { xl: '1488px' } }} m="auto">
    <Navbar />
    <Routes>

      <Route path="/" element={<StudentComponent />} />
      <Route path="/student" element={<StudentComponent />} />
      <Route path="/student/resume" element={<ResumeSection />} />
      <Route path="/student/mock-interview" element={<MockInterviewSection />} />
      <Route path="/apply/:jobId" element={<ApplicationForm />} />
    </Routes>

  </Box>
);

export default App;
