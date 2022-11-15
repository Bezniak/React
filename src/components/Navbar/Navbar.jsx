import React from 'react';
import n from './Navbar.module.css';
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return (<nav className={n.nav}>
        <div className={`${n.item} ${n.active}`}>
            <NavLink to="/profile" className={navData => navData.isActive ? n.activeLink : n.item}> Profile </NavLink>
        </div>
        <div className={`${n.item} ${n.active}`}>
            <NavLink to="/dialogs" className={navData => navData.isActive ? n.activeLink : n.item}>Messages</NavLink>
        </div>
        <div className={`${n.item} ${n.active}`}>
            <NavLink to="/news" className={navData => navData.isActive ? n.activeLink : n.item}>News</NavLink>
        </div>
        <div className={`${n.item} ${n.active}`}>
            <NavLink to="/music" className={navData => navData.isActive ? n.activeLink : n.item}>Music</NavLink>
        </div>
        <div className={`${n.item} ${n.active}`}>
            <NavLink to="/settings" className={navData => navData.isActive ? n.activeLink : n.item}>Settings</NavLink>
        </div>
    </nav>)
}

export default Navbar;