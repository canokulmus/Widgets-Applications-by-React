import React from 'react'
import Link from './Link';


const Navbar = ({ path }) => {


    return (

        <nav className="navbar  navbar-expand-lg navbar-dark bg-dark ">
            <div className="container">
                <a className="navbar-brand" href="/">React Widgets</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link

                                className={path === "/accordion" ? "nav-link active" : "nav-link"}
                                aria-current="page"
                                href="/accordion">Accordion
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link

                                className={path === "/search" ? "nav-link active" : "nav-link"}
                                href="/search">Wikipedia Search</Link>
                        </li>
                        <li className="nav-item">
                            <Link

                                className={path === "/text" ? "nav-link active" : "nav-link"}
                                href="/text">Text Design</Link>
                        </li>
                        <li className="nav-item">
                            <Link

                                className={path === "/translate" ? "nav-link active" : "nav-link"}
                                href="/translate">Google Translate</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

    );
}



export default Navbar;