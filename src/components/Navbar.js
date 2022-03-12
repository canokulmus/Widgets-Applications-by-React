import React from 'react'

const Navbar = ({ activeWidget, setActiveWidget }) => {



    return (
        
            <nav className="navbar  navbar-expand-lg navbar-dark bg-dark ">
                <div className="container">
                    <a className="navbar-brand" href="#">React Widgets</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a
                                    onClick={() => {
                                        setActiveWidget("accordion")
                                    }}
                                    className={activeWidget === "accordion" ? "nav-link active" : "nav-link"}
                                    aria-current="page"
                                    href="#">Accordion</a>
                            </li>
                            <li className="nav-item">
                                <a
                                    onClick={() => {
                                        setActiveWidget("search")
                                    }}
                                    className={activeWidget === "search" ? "nav-link active" : "nav-link"}
                                    href="#">Wikipedia Search</a>
                            </li>
                            <li className="nav-item">
                                <a
                                    onClick={() => {
                                        setActiveWidget("text")
                                    }}
                                    className={activeWidget === "text" ? "nav-link active" : "nav-link"}
                                    href="#">Text Design</a>
                            </li>
                            <li className="nav-item">
                                <a
                                    onClick={() => {
                                        setActiveWidget("translate")
                                    }}
                                    className={activeWidget === "translate" ? "nav-link active" : "nav-link"}
                                    href="#">Google Translate</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        
    );
}



export default Navbar;