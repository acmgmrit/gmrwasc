import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
    const location = useLocation();

    const [currentPage, setCurrentPage] = useState('/')

    useEffect(() => {
        setCurrentPage(location.pathname);
    }, [location]);

    const isActive = page => {
        return page === currentPage ? 'active' : '';
    }


    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
            <div className="container-fluid">
                <Link className='navbar-brand' to='/'>
                    <img src="/img/logos/acmw.png" alt="ACM W" height="40px" />{" "}
                    GMRWASC
                </Link>
                <button className="navbar-toggler" type='button' data-bs-toggle="collapse" data-bs-target="#navbar-content" aria-controls='navbar-content' aria-expanded='false' aria-label='Toggle navigation'>
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbar-content">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className={`nav-link ${isActive('/')}`} to='/'>Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={`nav-link ${isActive('/about')}`} to='/about'>About</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={`nav-link ${isActive('/events')}`} to='/events'>Events</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={`nav-link ${isActive('/gallary')}`} to='/gallary'>Gallary</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={`nav-link ${isActive('/team')}`} to='/team'>Team</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar