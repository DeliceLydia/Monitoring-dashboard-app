import React, { useEffect, useState } from 'react';
import { fetchAllWebsites } from '../services/ApiServices';

const WebsitesDashboard = () => {
  const [websites, setWebsites] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch all websites when the component mounts
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
    <div className="p-4 bg-[#e7ecef] h-screen">
      <h2 className="text-2xl font-bold mb-4">Websites Dashboard</h2>

      {loading && <p>Loading websites...</p>}
      {error && <p className="text-red-500">{error}</p>}

      {!loading && !error && (
        <table className="min-w-full bg-white border border-gray-200">
          <thead>
            <tr>
              <th className="py-2 px-4 border-b">Name</th>
              <th className="py-2 px-4 border-b">URL</th>
              <th className="py-2 px-4 border-b">Status</th>
              <th className="py-2 px-4 border-b">Last Checked</th>
            </tr>
          </thead>
          <tbody>
            {websites.map((website) => (
              <tr key={website.id}>
                <td className="py-2 px-4 border-b">{website.name}</td>
                <td className="py-2 px-4 border-b">{website.url}</td>
                <td className="py-2 px-4 border-b">{website.status}</td>
                <td className="py-2 px-4 border-b">
                  {new Date(website.lastChecked).toLocaleString()}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default WebsitesDashboard;
