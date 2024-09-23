import React from 'react';


const Profile = () => {
  const user = JSON.parse(localStorage.getItem('user'));

  return (
    <div>
      <h2>Profile</h2>
      <p>Username: {user?.username}</p>
    </div>
  );
};

export default Profile;