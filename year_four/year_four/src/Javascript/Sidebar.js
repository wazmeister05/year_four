import React from 'react';
import { stack as Menu } from 'react-burger-menu';
import '../css/Sidebar.css';
import '../css/Stylesheet.css';

export default props => {
    return(
            <Menu width={200} isOpen={false}>
                <a className="menu-item" href="/">
                    Home
                </a>
                <a className="menu-item" href="/UserPicture">
                    User Picture
                </a>
                <a className="menu-item" href="/Calendar">
                    Calendar
                </a>
                <a className="menu-item" href="/Login">
                    Log Out
                </a>
            </Menu>
    );
};