import React from 'react'

export const Navbar: (React.FC) = () => (
    <nav>
        <div className="nav-wrapper grey darken-1 px1">
            <a href="/" className="brand-logo right">TSApp</a>
            <ul className="left hide-on-med-and-down">
                <li><a href="/">List</a></li>
                <li><a href="/">About</a></li>
            </ul>
        </div>
    </nav>
)