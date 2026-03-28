import { useState, useEffect } from "react";
import "../styles/menu.css";

function Menu() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);
  const [isDisplayOpen, setIsDisplayOpen] = useState(false);
  const [notificationsEmail, setNotificationsEmail] = useState(localStorage.getItem('notificationsEmail') || '');
  const [notificationsPush, setNotificationsPush] = useState(localStorage.getItem('notificationsPush') === 'true');
  const [language, setLanguage] = useState(localStorage.getItem('language') || 'en');

  useEffect(() => {
    const savedDarkMode = localStorage.getItem('darkMode') === 'true';
    setDarkMode(savedDarkMode);
    if (savedDarkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }, []);

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
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);
    localStorage.setItem('darkMode', newDarkMode.toString());
    if (newDarkMode) {
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
          <a href="/dashboard" onClick={closeMenu}>Dashboard</a>
          <a href="#" onClick={toggleSettings}>Settings</a>
          <a href="/reports" onClick={closeMenu}>Reports</a>
          <a href="/about" onClick={closeMenu}>About</a>
          <a href="/help" onClick={closeMenu}>Help</a>
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
          <div className="settings-item">
            <span>Notifications</span>
            <label className="switch">
              <input type="checkbox" checked={notificationsPush} onChange={(e) => {
                setNotificationsPush(e.target.checked);
                localStorage.setItem('notificationsPush', e.target.checked.toString());
              }} />
              <span className="slider round"></span>
            </label>
          </div>
          <div className="settings-section">
            <h4>Notification Settings</h4>
            <div className="settings-item">
              <span>Email Notifications</span>
              <input type="email" value={notificationsEmail} onChange={(e) => {
                setNotificationsEmail(e.target.value);
                localStorage.setItem('notificationsEmail', e.target.value);
              }} placeholder="yurag@email.com" />
            </div>
            <div className="settings-item">
              <span>Push Notifications</span>
              <label className="switch">
                <input type="checkbox" checked={notificationsPush} onChange={(e) => {
                  setNotificationsPush(e.target.checked);
                  localStorage.setItem('notificationsPush', e.target.checked.toString());
                }} />
                <span className="slider round"></span>
              </label>
            </div>
            <button className="save-settings-btn" onClick={() => alert('Notification settings saved!')}>Save</button>
          </div>
          <div className="settings-section">
            <h4>Display Settings</h4>
            <div className="settings-item">
              <span>Language</span>
              <select value={language} onChange={(e) => {
                setLanguage(e.target.value);
                localStorage.setItem('language', e.target.value);
              }}>
                <option value="en">English</option>
                <option value="es">Español</option>
                <option value="fr">Français</option>
              </select>
            </div>
            <button className="save-settings-btn" onClick={() => alert('Display settings saved!')}>Save</button>
          </div>
          <div className="settings-item">
            <span>System Info</span>
            <details>
              <summary>View Details</summary>
              <p>Water Level: 80%</p>
              <p>Tank Status: Normal</p>
              <p>Last Update: Today</p>
            </details>
          </div>
        </nav>
      </div>

      {isOpen && <div className="overlay" onClick={closeMenu}></div>}
      {isSettingsOpen && <div className="overlay" onClick={closeSettings}></div>}
    </>
  );
}

export default Menu;

