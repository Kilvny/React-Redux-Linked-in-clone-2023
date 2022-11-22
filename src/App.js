import React, { useEffect } from 'react';
import './App.css';
import Sidebar from './components/Body/Sidebar/Sidebar';
import { Header } from './components/Header/Header';
import Feed from './components/Body/Feed/Feed';
import { selectUser } from './features/userSlice';
import { useSelector } from 'react-redux';
import Login from './components/Body/Login';

function App() {
    const user = useSelector(selectUser)
    useEffect(() => {
      
    
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
                <Sidebar />
                {/* feed */}
                <Feed />
                
                {/* widgets (right-bar) */}

             </div>
            }
        </div>
    );
}

export default App;
