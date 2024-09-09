import React from 'react';

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
   
      <div className="mt-2 flex justify-between">
        <span className={`text-2xl font-bold ${status === 'Online' ? 'text-green-600' : 'text-red-600'}`}>
          {status}
        </span>
        <button
        onClick={onDelete}
        className="mt-4 bg-red-500 hover:bg-red-600 text-white py-1 px-3 rounded"
      >
        Delete
      </button>
      </div>
     
    </div>
  );
};

export default WebsiteCard;

// // src/components/WebsiteCard.js
// import React from 'react';

// const WebsiteCard = ({ name, url, status, onDelete }) => {
//   return (
//     <div className="bg-white shadow-md rounded p-4 flex flex-col justify-between">
//       <div>
//         <h2 className="text-xl font-bold">{name}</h2>
//         <p className="text-sm text-gray-500">{url}</p>
//         <div className="mt-2">
//           <span
//             className={`text-2xl font-bold ${
//               status === 'Up' ? 'text-green-600' : 'text-red-600'
//             }`}
//           >
//             {status === 'Up' ? 'Online' : 'Offline'}
//           </span>
//         </div>
//       </div>
//       <button
//         onClick={onDelete} // Call the onDelete function passed from the parent
//         className="mt-4 bg-red-500 hover:bg-red-600 text-white py-1 px-3 rounded"
//       >
//         Delete
//       </button>
//     </div>
//   );
// };

// export default WebsiteCard;

