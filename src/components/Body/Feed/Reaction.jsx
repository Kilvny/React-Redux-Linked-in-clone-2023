import { Popover, Transition } from '@headlessui/react'
import { useState } from 'react'
import '../../../assets/reactions.css'
import celeberate from '../../../assets/reactions/Linkedin-Celebrate-Icon-ClappingHands250.png'
import funny from '../../../assets/reactions/linkedin-funny-emoticon-250.png'
import insightful from '../../../assets/reactions/Linkedin-Insightful-Icon-Lamp250.png'
import like from '../../../assets/reactions/Linkedin-Like-Icon-Thumbup250.png'
import love from '../../../assets/reactions/Linkedin-Love-Icon-Heart250.png'
import support from '../../../assets/reactions/Linkedin-Support-Icon-HeartinHand250.png'
import CreateIcon from './CreateIcon'
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';


function Reaction({ component }) {
    const [icon, setIcon] = useState(<CreateIcon Icon={ThumbUpOffAltIcon} color='gray' title='Like'/>)

    const resetReaction = () => {
        setIcon(<CreateIcon Icon={ThumbUpOffAltIcon} color='gray' title='Like'/>)
    }

    const handleLike = () => {
          setIcon(
            <div className="create-icon">
              <img className="img-reaction small" title="Like" src={like}></img>
              <h4 style={{color: 'rgb(20, 133, 189)', fontWeight: 'bold'}}>Like</h4>
            </div>
          );
    }
    const handleCelebrate = () => {
          setIcon(
            <div className="create-icon">
              <img className="img-reaction small" title="Like" src={celeberate}></img>
              <h4 style={{color: '#6DAE4D', fontWeight: 'bold'}}>Celebrate</h4>
            </div>
          );
    }
    const handleLove = () => {
          setIcon(
            <div className="create-icon">
              <img className="img-reaction small" title="Like" src={love}></img>
              <h4 style={{color: '#DF704D', fontWeight: 'bold'}}>Love</h4>
            </div>
          );
    }
    const handleSupport = () => {
          setIcon(
            <div className="create-icon">
              <img className="img-reaction small" title="Like" src={support}></img>
              <h4 style={{color: '#BBA9D1', fontWeight: 'bold'}}>Support</h4>
            </div>
          );
    }
    const handleInsightful = () => {
          setIcon(
            <div className="create-icon">
              <img className="img-reaction small" title="Like" src={insightful}></img>
              <h4 style={{color: '#F5BB5C', fontWeight: 'bold'}}>Insightful</h4>
            </div>
          );
    }
    const handleFunny = () => {
          setIcon(
            <div className="create-icon">
              <img className="img-reaction small" title="Like" src={funny}></img>
              <h4 style={{color: '#82C5D9', fontWeight: 'bold'}}>Funny</h4>
            </div>
          );
    }

  return (
    <Popover className="relative">
      <Popover.Button className='popover' onClick={resetReaction}>{icon}</Popover.Button>

      <Transition
        enter="transition duration-100 ease-out"
        enterFrom="transform scale-95 opacity-0"
        enterTo="transform scale-100 opacity-100"
        leave="transition duration-75 ease-out"
        leaveFrom="transform scale-100 opacity-100"
        leaveTo="transform scale-95 opacity-0"
      >
      <Popover.Panel className="abs">
      {({ close }) => (

        <div className="grid">
          <img className='img-reaction' title='Like' src={like} onClick={()=> {
            handleLike()
            close()
          } } ></img>
          <img className='img-reaction' title='Celebrate' src={celeberate} onClick={()=>{
            handleCelebrate()
            close()
          }}></img>
          <img className='img-reaction' title='Support' src={support} onClick={()=> {
            handleSupport()
            close()
          }} ></img>
          <img className='img-reaction' title='Love' src={love} onClick={()=>{
            handleLove()
            close()
          }} ></img>
          <img className='img-reaction' title='Insightful' src={insightful} onClick={()=> {
            handleInsightful()
            close() // to close the reactions modal after choosing one
          }} ></img>
          <img className='img-reaction' title='Funny' src={funny} onClick={()=>{
            handleFunny()
            close()
          }} ></img>

        </div>
      )
      }

        {/* <img src="/solutions.jpg" alt="" /> */}
      </Popover.Panel>
      </Transition>
    </Popover>
  )
}

export default Reaction