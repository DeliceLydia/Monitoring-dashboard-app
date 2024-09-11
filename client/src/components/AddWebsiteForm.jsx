import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { addNewWebsite } from '../services/ApiServices';

const AddWebsiteForm = () => {
  const [name, setName] = useState('');
  const [url, setUrl] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    if (!name || !url) {
      setError('Both Name and URL are required.');
      return;
    }

    try {
      const response = await addNewWebsite({ name, url });
      if (response && response.status === 201) {
        setSuccess('Website added successfully!');
        setName('');
        setUrl('');

        setTimeout(() => {
          navigate('/');
        }, 2000);
      } else {
        setError('Unexpected response. Please try again.');
      }
    } catch (err) {
      console.error('Error adding website:', err);

      if (err.response && err.response.status === 409) {
        setError('The website already exists. Please use a different name or URL.');
      } else if (err.response && err.response.data && err.response.data.error) {
        setError(err.response.data.error);
      } else {
        setError('Failed to add the website. Please try again.');
      }
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-[#fff] shadow-md rounded px-8 pt-6 pb-8 mb-8 max-w-2xl mx-auto"
    >
      <h2 className="text-2xl font-bold mb-4 text-gray-800">Add New Website</h2>

      {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

      {success && <p className="text-green-500 text-sm mb-4">{success}</p>}

      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="name"
        >
          Name
        </label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          placeholder="Enter website name"
          required
        />
      </div>

      <div className="mb-6">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="url"
        >
          URL
        </label>
        <input
          type="url"
          id="url"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          placeholder="Enter website URL"
          required
        />
      </div>

      <div className="flex items-center justify-between">
        <button
          type="submit"
          className="bg-[#095aba] hover:bg-[#176bcd] text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Add Website
        </button>
      </div>
    </form>
  );
};

export default AddWebsiteForm;
