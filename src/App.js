import React from 'react';
import './App.css';
import Sidebar from './components/Body/Sidebar/Sidebar';
import { Header } from './components/Header/Header';

function App() {
  return (
        <div className="app">
            {/* header */}
            <Header />
            {/* App Body */}

            <div className='app-body'>
                {/* side-bar */}
                <Sidebar />
                {/* feed */}
                {/* widgets (right-bar) */}

            </div>
        </div>
    );
}

export default App;
