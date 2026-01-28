import React from 'react';

const Navbar = ({ activeTab, setActiveTab }) => {
    return (
        <div className="nav-container my-10 md:my-0">
            <button
                className={`nav-button ${activeTab === 'home' ? 'active' : ''}`}
                onClick={() => setActiveTab('home')}
            >
                Home
            </button>
            <button
                className={`nav-button ${activeTab === 'projects' ? 'active' : ''}`}
                onClick={() => setActiveTab('projects')}
            >
                Projects
            </button>
            <button
                className={`nav-button ${activeTab === 'contact' ? 'active' : ''}`}
                onClick={() => setActiveTab('contact')}
            >
                Contact
            </button>
        </div>
    );
};

export default Navbar;
