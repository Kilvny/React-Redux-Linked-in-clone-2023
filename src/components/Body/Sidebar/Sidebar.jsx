import { Avatar } from '@mui/material'
import React from 'react'
import '../../../assets/sidebar.css'
import DropDown from '../../Header/DropDown';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import AddIcon from '@mui/icons-material/Add';
import { useSelector } from 'react-redux';
import { selectUser } from '../../../features/userSlice';

const Sidebar = () => {
    const user = useSelector(selectUser)

  return (
    <div className="sidebar">
      {/* profile */}
      <div className="profile__sidebar">
        <div className="profile-top">
          <img src="https://i.ibb.co/z6kqb91/linkedin-proifle-bg.jpg" alt="bg" />
          <Avatar className='avatar' src={user.photoUrl} />
          {/* <Avatar className='avatar' src="https://i.ibb.co/FzSRNhL/Whats-App-Image-2022-09-06-at-6-14-15-PM-2-2.jpg" /> */}
          {/* <h4 className='profile-name'>Ahmed El-Kilany</h4> */}
          <h4 className='profile-name'>{user.displayName}</h4>
          <h4 className='profile-title'>{user.job}</h4>
        </div>
        <div className="profile-stats">
          <div className="profile-stat">
            <p>Who's Viewd your profile</p>
            <p className="profile-stat-count">{Math.floor(Math.random() * 1000)}</p>
          </div>
          <div className="profile-stat">
            <p>Impressions of your post</p>
            <p className="profile-stat-count">{Math.floor(Math.random() * 10000)}</p>
          </div>
        </div>
        <div className="profile-try-premium">
          <p>Access exclusive tools & insights</p>
            <img src="https://i.pinimg.com/originals/6b/51/b5/6b51b52544ed291fd617fc2b42a7ec24.jpg" alt="premium-gold" />
            <span>Try Premium for free</span>
        </div>
        <div className="profile-my-items">
          <DropDown Icon={BookmarkIcon} titleAfter="" />
          <span>My Items</span>
        </div>
      </div>
      {/* Discover */}
        <div className="sidebar-discover">
            <div className="discover-groups">
                <span>Groups</span>
            </div>
            <div className="discover-events">
                <span>Events</span>
                <AddIcon className='add-icon'/>
            </div>
            <div className="discover-followed-hashtags">
                <span>Followed Hashtags</span>
            </div>
            <div className="discover-more">
                <span>Discover more</span>
            </div>
        </div>
    </div>
  );
}

export default Sidebar