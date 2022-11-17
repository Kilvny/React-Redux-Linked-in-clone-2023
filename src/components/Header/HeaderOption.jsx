import React from 'react'
import '../../assets/headerOption.css'
import MediaQuery from 'react-responsive'

// creating a reusable component for the right - nav bar section of linked in

const HeaderOption = ({ Icon, title }) => {
  return (
    <div className='header-option'>
        {/* the following syntax means if I pass an Icon and only then I should render the <Icon /> component 
            this way you're protecting yourself 
            basically && -> render if we pass   */}
        {Icon && <Icon className='header-option-icon'/>}
        <MediaQuery query='(min-width: 812px)'>
            <h5 className='header-option-title'>{title}</h5>
        </MediaQuery>
    </div>
  )
}

export default HeaderOption

