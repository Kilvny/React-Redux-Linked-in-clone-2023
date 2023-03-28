import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import { Avatar } from '@mui/material'
import React from 'react'
import '../../../assets/post.css'
import CreateIcon from './CreateIcon'
import ChatOutlinedIcon from '@mui/icons-material/ChatOutlined';
import RepeatOutlinedIcon from '@mui/icons-material/RepeatOutlined';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
import Reaction from './Reaction';
import Repost from './Repost';
import { LinkedinShareButton } from "react-share";

const Post = ({ name, job, message, avatarUrl}) => {
    const shareUrl = 'https://github.com/kilvny'

  return (
    <div className='post'>
        <div className="post-header">
            <Avatar src={avatarUrl}/>
            <div className="header-info">
                <h3>{name && name.toUpperCase()}</h3> <span>• Following</span>
                <p>{job}</p>
            </div>
        </div>
        <div className="post-body">
            <p>{message}</p>
            <div className="post-actions">
                <div className="post-reaction">
                <Reaction />
                </div>
                <div className="post-reaction">
                <CreateIcon Icon={ChatOutlinedIcon} color='gray' title='Comment'/>
                </div>
                <div className="post-reaction">
                <CreateIcon Icon={RepeatOutlinedIcon} color='gray'title='Repost'/>
                {/* <Repost /> */}
                </div>
                <div className="post-reaction-share">
                <LinkedinShareButton url={shareUrl} >
                    <CreateIcon Icon={SendOutlinedIcon} color='gray' title='Send'/>
                </LinkedinShareButton>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Post