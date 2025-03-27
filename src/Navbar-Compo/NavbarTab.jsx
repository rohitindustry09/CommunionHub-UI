import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const NavbarTab = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4 shadow-sm" style={{ zIndex: 10 }}>
      <a className="navbar-brand fw-bold fs-4" href="#">MyWebsite</a>
      <button 
        className="navbar-toggler" 
        type="button" 
        data-bs-toggle="collapse" 
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false" 
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link active fw-semibold px-3" href="#">Home</a>
          </li>
          {/* Events Dropdown */}
          <li className="nav-item dropdown position-relative">
            <a 
              className="nav-link fw-semibold px-3 dropdown-toggle" 
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              style={{ cursor: "pointer" }}
            >
              Events
            </a>
            {isDropdownOpen && (
              <div className="dropdown-menu show position-absolute" style={{ minWidth: "0px", fontSize: '14px' }}>
                <a className="dropdown-item" href="/events/show">Show Events</a>
                <a className="dropdown-item" href="/events/create">Create Event</a>
              </div>
            )}
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavbarTab;