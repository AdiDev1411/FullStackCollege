import React, { useState } from 'react';

const menuItems = [
  { name: 'Home' },
  { name: 'About' },
  { name: 'Services' },
  { name: 'Contact' },
];

const App = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState('Home');

  return (
    <div className="flex h-screen bg-gradient-to-br from-gray-100 to-gray-300">
      
      <button
        className="fixed top-4 left-4 z-30 p-2 rounded-full bg-gray-800 text-white shadow-lg hover:bg-gray-700 transition duration-200"
        onClick={() => setIsOpen(true)}
        aria-label="Open sidebar"
        style={{ display: isOpen ? 'none' : 'block' }}
      >
        {/* Hamburger SVG */}
        <svg width="32" height="32" viewBox="0 0 20 20" fill="currentColor">
          <rect y="4" width="20" height="2" rx="1" />
          <rect y="9" width="20" height="2" rx="1" />
          <rect y="14" width="20" height="2" rx="1" />
        </svg>
      </button>

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full bg-gray-900 text-white w-64 transform ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } transition-transform duration-300 z-20 shadow-2xl`}
      >
        <div className="flex items-center justify-between p-4 border-b border-gray-700">
          <span className="font-bold text-2xl">Menu</span>
          <button
            className="p-2 rounded-full bg-gray-700 hover:bg-gray-600 transition duration-200"
            onClick={() => setIsOpen(false)}
            aria-label="Close sidebar"
          >
            {/* Close (X) SVG */}
            <svg width="24" height="24" viewBox="0 0 20 20" fill="currentColor">
              <line x1="6" y1="6" x2="14" y2="14" stroke="white" strokeWidth="2" />
              <line x1="14" y1="6" x2="6" y2="14" stroke="white" strokeWidth="2" />
            </svg>
          </button>
        </div>
        <ul className="mt-4">
          {menuItems.map((item) => (
            <li
              key={item.name}
              className={`p-4 cursor-pointer hover:bg-gray-700 rounded-lg mx-2 my-1 transition ${
                active === item.name ? 'bg-gray-700 font-semibold' : ''
              }`}
              onClick={() => setActive(item.name)}
            >
              {item.name}
            </li>
          ))}
        </ul>
      </div>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black opacity-40 z-10"
          onClick={() => setIsOpen(false)}
        ></div>
      )}

      {/* Main Content */}
      <div className="flex-1 flex flex-col items-center justify-center">
        <div className="text-3xl font-bold text-gray-800 mb-4 drop-shadow-lg">
          {active} Section
        </div>
        <p className="text-gray-600 text-lg">
          Welcome to the {active} section of our site!
        </p>
      </div>
    </div>
  );
};

export default App;