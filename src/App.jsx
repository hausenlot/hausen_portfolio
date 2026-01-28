import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
    const [activeTab, setActiveTab] = useState('home');

    return (
        <div className="container gap-10 md:gap-0">
            <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />

            <div className="content-container p-4 md:p-24">
                {activeTab === 'home' && <Home />}
                {activeTab === 'projects' && <Projects />}
                {activeTab === 'contact' && <Contact />}
            </div>
        </div>
    );
}

export default App;
