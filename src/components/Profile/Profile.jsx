import React from 'react'
import ProfileRightbar from './ProfileRightbar'

const Profile = () => {
  return (
    <div className='profile'>
        <div className="profile__rightbar">
            <ProfileRightbar />

        </div>
        <div className="profile__feed">
            {/* profile card
                // cover photo
                // profile pic
                // info
                // options
            */}

            {/* Suggested for you */}
            {/* Analytics */}
            {/* Resources */}
            {/* About */}
            {/* Featured */}
            {/* Activity */}
            {/* Experience */}
            {/* Education */}
            {/* Skills */}
            {/* Interests */}
            
        </div>
        <div className="profile__footer"></div>
    </div>
  )
}

export default Profile