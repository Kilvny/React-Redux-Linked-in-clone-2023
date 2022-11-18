import PhotoSizeSelectActualIcon from '@mui/icons-material/PhotoSizeSelectActual'
import SmartDisplayIcon from '@mui/icons-material/SmartDisplay'
import EventIcon from '@mui/icons-material/Event';
import ListAltIcon from '@mui/icons-material/ListAlt';
import { Avatar } from '@mui/material'
import React from 'react'
import '../../../assets/feed.css'
import CreateIcon from './CreateIcon'

const Feed = () => {
  return (
    <div className='feed'>
        {/* create a post */}
        <div className="create-post">
            <div className="create-a-post">
                <Avatar className='avatar-sm' src="https://i.ibb.co/FzSRNhL/Whats-App-Image-2022-09-06-at-6-14-15-PM-2-2.jpg" />
                <form action="submit">
                    <input type="text" placeholder='Start a post'/>
                    <button type='submit'>Post</button>
                </form>
            </div>
            <div className="create-post-icons">
                {/* photo */}
                <CreateIcon color='#378FE9' Icon={PhotoSizeSelectActualIcon} title='Photo' />
                {/* video */}
                <CreateIcon color='#5F9B41' Icon={SmartDisplayIcon} title='Video' />
                {/* event */}
                <CreateIcon color='#C58423' Icon={EventIcon} title='Event' />
                {/* write article */}
                <CreateIcon color='#E16745' Icon={ListAltIcon} title='Write article' />
            </div>
        </div>
        {/* rest of the posts */}
        <div className="feed-posts"></div>
    </div>
  )
}

export default Feed