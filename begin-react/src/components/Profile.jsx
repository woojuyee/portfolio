import React from 'react';
function Profile() {
    return (
        <div className="profile">
            <img
                src=""
                alt="Profile"
                style={{ borderRadius: '50%', width: '200px', height: '200px' }}
            />
            <h1>Woo</h1>
            <h2>Wooju-Lee</h2>
            <button>Edit profile</button>
            <p>10 followers  7 following</p>
        </div>
    );
}

export default Profile;
