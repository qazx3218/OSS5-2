import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow-sm">
            <div className="container">
                {/* App Logo */}
                <Link className="navbar-brand fw-bold text-uppercase" to="/list">
                    My App
                </Link>

                {/* Toggler Button for Smaller Screens */}
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

                {/* Collapsible Menu */}
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        {/* Home Link */}
                        <li className="nav-item">
                            <Link className="nav-link text-light" to="/list">
                                <i className="fas fa-home"></i> Home
                            </Link>
                        </li>

                        {/* Add Item Link */}
                        <li className="nav-item">
                            <Link className="nav-link text-light" to="/create">
                                <i className="fas fa-plus-circle"></i> Add Item
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
