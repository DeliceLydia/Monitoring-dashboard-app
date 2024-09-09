import React, { useEffect, useState } from 'react';
import WebsiteCard from './WebsiteCard';
import { fetchAllWebsites } from '../services/ApiServices';
const WebsitesList = () => {
  const [websites, setWebsites] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getWebsites = async () => {
      try {
        setLoading(true);
        const fetchedWebsites = await fetchAllWebsites();
        setWebsites(fetchedWebsites);
      } catch (err) {
        setError('Failed to fetch websites. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    getWebsites();
  }, []);

  return (
    <div className='bg-[#e7ecef]'>
      <h1 className=' px-4 pt-8 font-bold text-lg'>WEBSITE LISTS</h1>
      <div className="p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      
      {loading && <p>Loading websites...</p>}
      {error && <p className="text-red-500">{error}</p>}
      {!loading && !error && websites.length === 0 && <p>No websites found.</p>}
      {!loading &&
        websites.map((website) => (
          <WebsiteCard
            key={website.id}
            name={website.name}
            url={website.url}
            status={website.status}
          />
        ))}
    </div>
    </div>
    
  );
};

export default WebsitesList;
