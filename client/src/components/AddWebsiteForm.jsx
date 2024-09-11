import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AddWebsiteForm = ({ onAddWebsite }) => {
  const [name, setName] = useState('');
  const [url, setUrl] = useState('');
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setSuccess(null);
    try {
      await onAddWebsite({ name, url });
      setSuccess('Website added successfully!');
      setName('');
      setUrl('');
      setTimeout(() => {
        navigate('/');
      }, 2000);
    }catch (err) {
      console.log(err); // Add this line to inspect the error object
      if (err.response && err.response.data.error) {
        if (err.response.data.error.includes('name')) {
          setError('The website name already exists. Please use a different name.');
        } else if (err.response.data.error.includes('url')) {
          setError('The website URL already exists. Please use a different URL.');
        } else {
          setError(err.response.data.error);
        }
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

      {/* Display error message */}
      {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

      {/* Display success message */}
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
