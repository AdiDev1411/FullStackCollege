import { useState } from 'react';
import './Sidebar.css';

const Sidebar = ({ isOpen, toggleSidebar, currentSection, setCurrentSection }) => {
  const [expandedMenu, setExpandedMenu] = useState(null);

  const menuItems = [
    {
      id: 'dashboard',
      title: 'Dashboard',
      icon: '📊',
      hasSubmenu: false
    },
    {
      id: 'products',
      title: 'Products',
      icon: '📦',
      hasSubmenu: true,
      submenu: [
        { id: 'all-products', title: 'All Products' },
        { id: 'add-product', title: 'Add Product' },
        { id: 'categories', title: 'Categories' }
      ]
    },
    {
      id: 'users',
      title: 'Users',
      icon: '👥',
      hasSubmenu: true,
      submenu: [
        { id: 'all-users', title: 'All Users' },
        { id: 'add-user', title: 'Add User' },
        { id: 'user-roles', title: 'User Roles' }
      ]
    },
    {
      id: 'analytics',
      title: 'Analytics',
      icon: '📈',
      hasSubmenu: false
    },
    {
      id: 'settings',
      title: 'Settings',
      icon: '⚙️',
      hasSubmenu: true,
      submenu: [
        { id: 'general', title: 'General' },
        { id: 'security', title: 'Security' },
        { id: 'notifications', title: 'Notifications' }
      ]
    },
    {
      id: 'help',
      title: 'Help & Support',
      icon: '❓',
      hasSubmenu: false
    }
  ];

  const handleMenuClick = (item) => {
    if (item.hasSubmenu) {
      setExpandedMenu(expandedMenu === item.id ? null : item.id);
    } else {
      setCurrentSection(item.id);
      // Close sidebar on mobile after selection
      if (window.innerWidth <= 768) {
        toggleSidebar();
      }
    }
  };

  const handleSubmenuClick = (parentId, submenuId) => {
    setCurrentSection(`${parentId}-${submenuId}`);
    // Close sidebar on mobile after selection
    if (window.innerWidth <= 768) {
      toggleSidebar();
    }
  };

  return (
    <>
      {/* Overlay for mobile */}
      {isOpen && <div className="sidebar-overlay" onClick={toggleSidebar}></div>}
      
      <div className={`sidebar ${isOpen ? 'sidebar-open' : 'sidebar-closed'}`}>
        {/* Sidebar Header */}
        <div className="sidebar-header">
          <div className="sidebar-logo">
            <span className="logo-icon">🚀</span>
            {isOpen && <span className="logo-text">AdminPanel</span>}
          </div>
          {isOpen && (
            <button className="sidebar-close-btn" onClick={toggleSidebar}>
              ✕
            </button>
          )}
        </div>

        {/* Navigation Menu */}
        <nav className="sidebar-nav">
          <ul className="sidebar-menu">
            {menuItems.map((item) => (
              <li key={item.id} className="sidebar-menu-item">
                <button
                  className={`sidebar-menu-button ${
                    currentSection === item.id || currentSection.startsWith(item.id) 
                      ? 'active' 
                      : ''
                  }`}
                  onClick={() => handleMenuClick(item)}
                >
                  <span className="menu-icon">{item.icon}</span>
                  {isOpen && (
                    <>
                      <span className="menu-title">{item.title}</span>
                      {item.hasSubmenu && (
                        <span className={`menu-arrow ${expandedMenu === item.id ? 'expanded' : ''}`}>
                          ▼
                        </span>
                      )}
                    </>
                  )}
                </button>

                {/* Submenu */}
                {item.hasSubmenu && isOpen && (
                  <ul className={`sidebar-submenu ${expandedMenu === item.id ? 'expanded' : ''}`}>
                    {item.submenu.map((subItem) => (
                      <li key={subItem.id} className="sidebar-submenu-item">
                        <button
                          className={`sidebar-submenu-button ${
                            currentSection === `${item.id}-${subItem.id}` ? 'active' : ''
                          }`}
                          onClick={() => handleSubmenuClick(item.id, subItem.id)}
                        >
                          <span className="submenu-title">{subItem.title}</span>
                        </button>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </nav>

        {/* Sidebar Footer */}
        {isOpen && (
          <div className="sidebar-footer">
            <div className="user-info">
              <div className="user-avatar">👤</div>
              <div className="user-details">
                <span className="user-name">John Doe</span>
                <span className="user-role">Administrator</span>
              </div>
            </div>
            <button className="logout-btn" title="Logout">
              🚪
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default Sidebar;
