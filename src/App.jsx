import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import ClassroomApp from './components/ClassroomApp';
import VocabApp from './components/VocabApp';
import Dashboard from './components/Dashboard';
import PrintLayout from './components/PrintLayout';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/classroom/:examId" element={<ClassroomApp />} />
        <Route path="/classroom" element={<ClassroomApp />} /> {/* Fallback or direct access compatibility */}
        <Route path="/vocab/:examId" element={<VocabApp />} />
        <Route path="/print/:examId" element={<PrintLayout />} />
      </Routes>
    </Router>
  );
}

export default App;
