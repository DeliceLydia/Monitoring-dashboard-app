import React from 'react';
import { TrashIcon } from '@heroicons/react/outline';

const WebsiteCard = ({ name, url, status, onDelete }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 w-full max-w-sm">
      <div className="flex justify-between items-center mb-2">
        <h3 className="text-lg font-semibold text-blue-800">Website</h3>
        <button className="text-gray-500 hover:text-gray-700">▶</button>
      </div>

      <p className="text-gray-700 font-medium">{name}</p>
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-500 underline text-sm"
      >
        {url}
      </a>

      <div className="mt-2 flex justify-between items-center">
        <span className={`text-2xl font-medium ${status === 'online' ? 'text-green-600' : 'text-red-600'}`}>
          {status}
        </span>
        <button
          onClick={onDelete}
          className="text-[red] px-3 rounded"
        >
          <TrashIcon className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
};

export default WebsiteCard;
