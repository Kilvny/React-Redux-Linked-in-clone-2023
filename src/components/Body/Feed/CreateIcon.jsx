import React from 'react'
import '../../../assets/createicon.css'


const CreateIcon = ({Icon, title, color}) => {
  return (
    <div className="icons">
        <div className='create-icon'>
            <Icon style={{ color: color}} />
            <h4>{title}</h4>
        </div>
    </div>
  )
}

export default CreateIcon