import React, { useState } from 'react';

const AddWebsiteForm = ({ onAddWebsite }) => {
  const [name, setName] = useState('');
  const [url, setUrl] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !url) {
      setError('Both Name and URL are required.');
      return;
    }
    const newWebsite = {
      name,
      url,
    };

    onAddWebsite(newWebsite);
    setName('');
    setUrl('');
    setError('');
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-[#fff] shadow-md rounded px-8 pt-6 pb-8 mb-8"
    >
      <h2 className="text-2xl font-bold mb-4 text-gray-800">Add New Website</h2>

      {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

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
