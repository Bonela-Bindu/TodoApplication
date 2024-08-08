import React from 'react';

const UserProfile = ({ user, onLogout }) => {
  return (
    <div className="bg-blue-400 text-black py-4 px-8 flex justify-between items-center rounded-t-md">
      <div className="flex items-center font-bold text-white space-x-4">
       <span>{user.name}</span>
      </div>
      <p className='text-lg text-white font-semibold'>Todo Application</p>
      <button onClick={onLogout} className="bg-red-600 px-4 py-2 rounded text-white hover:bg-red-700">
        Logout
      </button>
    </div>
  );
};

export default UserProfile;
