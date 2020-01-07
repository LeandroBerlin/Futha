import React, { useState } from 'react'
import { Link } from 'react-router-dom';

export default function Navbar() {


    const [collapsed, setCollapsed] = useState(true)

    const toggleNavbar = () => {
        setCollapsed(!collapsed)
    }

    const navbarCollapse = collapsed ? 'collapse navbar-collapse' : 'collapse navbar-collapse show';
    const navbarToggler = collapsed ? 'navbar-toggler navbar-toggler-right collapsed' : 'navbar-toggler navbar-toggler-right';

    return (

        <nav className="navbar navbar-expand-lg navbar-dark bg-dark justify-content-between py-0">
            <div className="navbar-brand">ᚠᚢᚦᚨ</div>
            <div className="navbuttons">
                <button onClick={toggleNavbar} className={navbarToggler} type="button" data-toggle="collapse" data-target="#navbarToggler" aria-controls="navbarToggler" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className={navbarCollapse} id="navbarToggler">
                    <ul className="navbar-nav mr-auto navbar-right">
                        <li><Link to={'/'} className="nav-link"> Rune </Link></li>
                        <li><Link to={'/type'} className="nav-link">Type</Link></li>
                        <li><Link to={'/about'} className="nav-link">About</Link></li>
                    </ul>
                </div>
            </div>


        </nav>
    )
}
