import React from 'react';
import s from './Navbar.module.css';
const Navbar = () => {
    return (
        <nav className={s.nav}>
            <ul>
                <li>
                    <a href="#" className={s.link}>Profile</a>
                </li>
                <li>
                    <a href="#" className={s.link}>Message</a>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar;