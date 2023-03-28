import React from 'react'
import '../../assets/dropdown.css'
const DropDown = ({Icon,title,titleAfter}) => {
  return (
    <div className='dropdown'>
    {/* the following syntax means if I pass an Icon and only then I should render the <Icon /> component 
        this way you're protecting yourself 
        basically && -> render if we pass   */}
    <h5 className='dropdown-title'>{title}</h5>
    {Icon && <Icon className='dropdown-icon'/>}
    {titleAfter && <h5 className='dropdown-title'>{titleAfter}</h5>}
    </div>
  )
}

export default DropDown