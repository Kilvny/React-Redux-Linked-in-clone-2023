import React, { useEffect } from 'react';
import './App.css';
import Sidebar from './components/Body/Sidebar/Sidebar';
import { Header } from './components/Header/Header';
import Feed from './components/Body/Feed/Feed';

function App() {
    useEffect(() => {
      
    
      return () => {
        
      }
    }, [Feed])
    
  return (
        <div className="app">
            {/* header */}
            <Header />
            {/* App Body */}

            <div className='app-body'>
                {/* side-bar */}
                <Sidebar />
                {/* feed */}
                <Feed />
                
                {/* widgets (right-bar) */}

            </div>
        </div>
    );
}

export default App;
