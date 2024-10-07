import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';

const Dashboard = lazy(() => import('./components/Dashboard'));
const WebsitesList = lazy(() => import('./components/WebsiteList'));

const App = () => {
  return (
    <Router>
      <Navbar />
      <div className="p-4">
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<WebsitesList />} />
            <Route path="/add-website" element={<Dashboard />} />
          </Routes>
        </Suspense>
      </div>
    </Router>
  );
};

export default App;
