import { useState } from "react";
import "../styles/menu.css";

function Menu() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const toggleSettings = () => {
    setIsSettingsOpen(true);
    setIsOpen(false);
  };

  const closeSettings = () => {
    setIsSettingsOpen(false);
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    // Apply dark mode to the body
    if (!darkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  };

  return (
    <>
      <button className="menu-button" onClick={toggleMenu} aria-label="Toggle menu">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <line x1="3" y1="12" x2="21" y2="12"></line>
          <line x1="3" y1="6" x2="21" y2="6"></line>
          <line x1="3" y1="18" x2="21" y2="18"></line>
        </svg>
        <span>Menu</span>
      </button>

      {/* Main Side Panel */}
      <div className={`side-panel ${isOpen ? "open" : ""}`}>
        <div className="side-panel-header">
          <h3>Menu</h3>
          <button className="close-button" onClick={closeMenu}>
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
            <span>close</span>
          </button>
        </div>
        <nav className="side-panel-nav">
          <a href="#" onClick={closeMenu}>Dashboard</a>
          <a href="#" onClick={toggleSettings}>Settings</a>
          <a href="#" onClick={closeMenu}>Reports</a>
          <a href="#" onClick={closeMenu}>About</a>
          <a href="#" onClick={closeMenu}>Help</a>
        </nav>
        <div className="side-panel-footer">
          <button className="logout-button" onClick={() => window.location.href = '/login'}>
            <svg width="25" height="25" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="10" >
              <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
              <polyline points="16 17 21 12 16 7"></polyline>
              <line x1="21" y1="12" x2="9" y2="12"></line>
            </svg>
            Logout
          </button>
        </div>
      </div>

      {/* Settings Side Panel */}
      <div className={`side-panel settings-panel ${isSettingsOpen ? "open" : ""}`}>
        <div className="side-panel-header">
          <h3>Settings</h3>
          <button className="close-button" onClick={closeSettings}>
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
            <span>close</span>
          </button>
        </div>
        <nav className="side-panel-nav">
          <div className="settings-item">
            <span>Dark Mode</span>
            <label className="switch">
              <input type="checkbox" checked={darkMode} onChange={toggleDarkMode} />
              <span className="slider round"></span>
            </label>
          </div>
          <a href="#" onClick={closeSettings}>Notification Settings</a>
          <a href="#" onClick={closeSettings}>Display Settings</a>
          <a href="#" onClick={closeSettings}>System Info</a>
        </nav>
      </div>

      {isOpen && <div className="overlay" onClick={closeMenu}></div>}
      {isSettingsOpen && <div className="overlay" onClick={closeSettings}></div>}
    </>
  );
}

export default Menu;
