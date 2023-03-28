import { Menu, Popover } from '@headlessui/react'
import CreateIcon from './CreateIcon'
import RepeatOutlinedIcon from '@mui/icons-material/RepeatOutlined';


function Repost() {
    return (
        <Popover className="relative">
          <Popover.Button className='popover'>
             <CreateIcon Icon={RepeatOutlinedIcon} color='gray'title='Repost'/>
          </Popover.Button>
          
    
          <Popover.Panel className="abs">
            <div className="grid">
                <div className="grid-option">
                    <div className="grid-option-icon">
                        <CreateIcon Icon={RepeatOutlinedIcon} color='gray'title='Repost with your thoughts'/>
                    </div>
                    <div className="grid-option-text">
                        <h6>Repost with your thoughts</h6>
                        <p>Create a new post with LinkedIn Collective’s post attached</p>
                    </div>
                </div>
                <div className="grid-option">
                    <div className="grid-option-icon">
                        <CreateIcon Icon={RepeatOutlinedIcon} color='gray'title='Repost with your thoughts'/>
                    </div>
                    <div className="grid-option-text">
                        <h6>Repost with your thoughts</h6>
                        <p>Create a new post with LinkedIn Collective’s post attached</p>
                    </div>
                </div>
            </div>    
          </Popover.Panel>
        </Popover>
      )
}

export default Repost