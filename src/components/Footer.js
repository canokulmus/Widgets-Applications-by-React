import React from 'react'


const Footer = () => {

    return (

        <footer className="bg-dark text-center text-white fixed-bottom" style={{}}>
            <div className="text-center p-3" style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
                Developed by <a className="text-white" href="https://www.instagram.com/canokulmus/">Can Okulmuş</a> with help of <a className="text-white" href="https://twitter.com/ste_grider">Stephen Grider</a> | <a className="text-white text-decoration-non" href="https://www.linkedin.com/in/canokulmus/"><i className="icon linkedin "></i></a>
                <a className="text-white text-decoration-non" href="https://www.instagram.com/canokulmus/"><i className="icon instagram"></i></a>
            </div>
        </footer>
    );

}

export default Footer;