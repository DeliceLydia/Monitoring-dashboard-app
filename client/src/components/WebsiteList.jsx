import React, { useEffect, useState } from 'react';
import WebsiteCard from './WebsiteCard';
import { fetchAllWebsites, deleteWebsite } from '../services/ApiServices';

const WebsitesList = () => {
  const [websites, setWebsites] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getWebsites = async () => {
      try {
        setLoading(true);
        const fetchedWebsites = await fetchAllWebsites();
        setWebsites(fetchedWebsites || []);
      } catch (err) {
        setError('Failed to fetch websites. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    getWebsites();
  }, []);

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this website?')) {
      try {
        await deleteWebsite(id);
        setWebsites(websites.filter((website) => website.id !== id));
        alert('Website deleted successfully!');
      } catch (err) {
        alert('Failed to delete the website. Please try again.');
        console.error('Error deleting website:', err);
      }
    }
  };

  return (
    <>
      <h1 className="px-4 font-bold text-lg">MONITORING LISTS</h1>
      <div className="p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mx-auto">
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
              onDelete={() => handleDelete(website.id)}
            />
          ))}
      </div>
    </>
  );
};

export default WebsitesList;
