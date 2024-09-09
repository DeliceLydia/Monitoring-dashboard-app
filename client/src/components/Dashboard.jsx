import React, { useState } from 'react';
import AddWebsiteForm from './AddWebsiteForm';
import WebsitesList from "./WebsiteList"
import { addNewWebsite } from '../services/ApiServices';

const Dashboard= () => {
  const [websites, setWebsites] = useState([]);
  const handleAddWebsite = async (newWebsite) => {
    try {
      const addedWebsite = await addNewWebsite(newWebsite);
      setWebsites([...websites, addedWebsite]);
    } catch (error) {
      console.error('Failed to add website:', error);
    }
  };

  return (
    <div className="p-4 bg-[#e7ecef]">
      <WebsitesList />
      <AddWebsiteForm onAddWebsite={handleAddWebsite} />
    </div>
  );
};

export default Dashboard;
