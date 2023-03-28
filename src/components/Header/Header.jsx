import React from 'react'
import '../../assets/header.css'
import SearchIcon from '@mui/icons-material/Search';
import HeaderOption from './HeaderOption';
import HouseIcon from '@mui/icons-material/House';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import InsertCommentRoundedIcon from '@mui/icons-material/InsertCommentRounded';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import AppsRoundedIcon from '@mui/icons-material/AppsRounded';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import DropDown from './DropDown';
import MediaQuery from "react-responsive";
import { useDispatch, useSelector } from 'react-redux';
import { logout, selectUser } from '../../features/userSlice';
import { getAuth, signOut } from 'firebase/auth';
import { Button } from '@mui/material';
import About from './About.tsx';
import { Link, BrowserRouter as Router } from "react-router-dom";



export const Header = () => {

    const dispatch = useDispatch()
    const auth = getAuth()
    const user = useSelector(selectUser)

    const logUserOut = () => {
        dispatch(logout())
        signOut(auth).then(() => {
            console.log('signed out successful')
        }).catch((err) => {
            console.log(err)
        }) /*@(method) Auth.signOut(): Promise<void>
        Signs out the current user. */ 
    }
  return (
    <Router>
    <div className="cointainer__header">
      <div className="header">
        <div className="header-left">
          {/* logo */}
          <div className="logo">
            <img
              src="https://cdn-icons-png.flaticon.com/512/3256/3256016.png"
              alt="logo"
            />
          </div>
          {/* search bar */}
          <div className="search-bar">
            <SearchIcon />
            <input type="text" name="search" placeholder="Search" />
          </div>
        </div>
        <div className="header-right">
          <MediaQuery query="(max-width: 1024px)">
            <div className="search-bar-icon">
              <HeaderOption title="Search" Icon={SearchIcon} />
            </div>{" "}
          </MediaQuery>
          {/* Home */}
          <Link to='/' style={{textDecoration: 'none'}}>
            <HeaderOption title="Home" Icon={HouseIcon} />
          </Link>
          {/* My Network */}
          <HeaderOption title="My Network" Icon={PeopleAltIcon} />
          {/* Jobs */}
          <HeaderOption title="Jobs" Icon={BusinessCenterIcon} />
          {/* Messaging */}
          <HeaderOption title="Messaging" Icon={InsertCommentRoundedIcon} />
          {/* Noticitaion */}
          <HeaderOption title="Notifications" Icon={NotificationsIcon} />
          {/* Me */}
          <HeaderOption
            title={<DropDown title="Me" Icon={ArrowDropDownIcon} onClick={logUserOut}/>}
            Icon={AccountCircleRoundedIcon}
            avatar={user?.photoUrl}
            onClick={logUserOut}
          />
          <Button className="header-logout" onClick={logUserOut} >Logout</Button>
        </div>
        <div className="header-right-right">
          <div className="container">
            {/* work */}

            <About comp={<HeaderOption
              title={<DropDown title="About" Icon={ArrowDropDownIcon} />}
              Icon={AppsRoundedIcon}
            />}/>
            {/* span-premium- */}
          </div>
          <span>
            <MediaQuery query="(min-width: 728px)">
              Try Premium for <br></br>free
            </MediaQuery>
          </span>
        </div>
      </div>
    </div>
    
    </Router>

  );
}
