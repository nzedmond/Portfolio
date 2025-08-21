import { NavLink } from 'react-router-dom';



function Navbar() {
    return (
        <nav className="navbar">
            <div className="nav-logo">
                <h1>Giraed<span class="logo-text">Pixels</span></h1>
            </div>
            <ul className="nav-links">
                <li>
                    <NavLink to="/#hero">Home</NavLink>
                </li>
                <li>
                    <NavLink to="/gallery">Gallery</NavLink>
                </li>
                <li>
                    <NavLink to="/#featured">Featured</NavLink>
                </li>
                <li>
                    <NavLink to="/#about">About</NavLink>
                </li>
            </ul>
            <div className="nav-social">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">

                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                </a>
            </div>
        </nav>
    );
}

export default Navbar;