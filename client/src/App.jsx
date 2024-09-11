import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Dashboaard from './components/Dashboard';
import WebsitesList from './components/WebsiteList';

const App = () => {
  return (
    <Router>
      <Navbar />
      <div className="p-4">
        <Routes>
          <Route path="/" element={<WebsitesList />} />
          <Route path="/add-website" element={<Dashboaard />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
