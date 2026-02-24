    import { useState } from "react";
    import "../styles/menu.css";

    function Menu() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const closeMenu = () => {
        setIsOpen(false);
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
            <a href="#" onClick={closeMenu}>Settings</a>
            <a href="#" onClick={closeMenu}>Reports</a>
            <a href="#" onClick={closeMenu}>About</a>
            <a href="#" onClick={closeMenu}>Help</a>
            </nav>
        </div>

        {isOpen && <div className="overlay" onClick={closeMenu}></div>}
        </>
    );
    }

    export default Menu;
