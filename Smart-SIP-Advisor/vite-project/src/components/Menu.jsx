import { useState } from "react";

const menuItems = [
  { label: "Home", icon: "🏠" },
  { label: "SIP Calculator", icon: "📈" },
  { label: "FD Calculator", icon: "🏦" },
  { label: "About", icon: "ℹ️" },
];

export default function Menu() {
  const [showMenu, setShowMenu] = useState(false);
  const [active, setActive] = useState("Home");

  function toggleMenu() {
    setShowMenu((prev) => !prev);
  }

  function selectItem(label) {
    setActive(label);
    setShowMenu(false);
  }

  return (
    <>
      <button
        className="menu-btn"
        onClick={toggleMenu}
      >
        &#9776;
      </button>

      <div
        className={`sidebar-backdrop ${showMenu ? "show" : ""}`}
        onClick={() => setShowMenu(false)}
      />

      <nav className={`sidebar ${showMenu ? "open" : ""}`}>
        <div className="sidebar-header">
          <span className="sidebar-title">Menu</span>
          <button
            className="sidebar-close"
            onClick={() => setShowMenu(false)}
            aria-label="Close menu"
          >
            &times;
          </button>
        </div>
        <ul>
          {menuItems.map((item) => (
            <li
              key={item.label}
              className={active === item.label ? "active" : ""}
              onClick={() => selectItem(item.label)}
            >
              <span className="sidebar-icon">{item.icon}</span>
              {item.label}
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}