import React, { useEffect } from 'react';
import './App.css';
import Sidebar from './components/Body/Sidebar/Sidebar';
import { Header } from './components/Header/Header';
import Feed from './components/Body/Feed/Feed';
import { login, logout, selectUser } from './features/userSlice';
import { useDispatch, useSelector } from 'react-redux';
import Login from './components/Body/Login';
import { auth } from './firebase';
import { getAuth, signOut } from 'firebase/auth';
import Rightbar from './components/Body/Sidebar/Rightbar';
import MediaQuery from "react-responsive";

function App() {
    const user = useSelector(selectUser)
    const dispatch = useDispatch()
    // const auth = getAuth()


    useEffect(() => {
        auth.onAuthStateChanged(userAuth => {
            if (userAuth) {
                // logged in
                dispatch(login({
                    email: userAuth.email,
                    uid: userAuth.uid,
                    displayName: user?.displayName,
                    photoUrl: user?.photoUrl,
                    job: user?.job
                }))
            } else {
                // logged out 
                dispatch(logout())
                signOut(auth)
                
            }
        })
        
      return () => {
        
      }
    }, [])
    
  return (
        <div className="app">
            {/* header */}
            <Header />
            {/* App Body */}
            {!user ?
             <Login /> :
            
             <div className='app-body'>
                {/* side-bar */}
                <MediaQuery query="(min-width: 768px)">
                <Sidebar />
                </MediaQuery>
                {/* feed */}
                <Feed />
                
                {/* widgets (right-bar) */}
                <MediaQuery query="(min-width: 1024px)">
                <Rightbar />
                </MediaQuery>
             </div>
            }
        </div>
    );
}

export default App;
