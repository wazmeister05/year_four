import React from 'react';
import { stack as Menu } from 'react-burger-menu';
import '../css/Sidebar.css';
import '../css/Stylesheet.css';
import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css';
import Home from './Home';

class Sidebar extends React.Component{

    constructor(props){
        super(props);
    }

    render() {
        const user_type = this.props.user;
        return (
            <Menu width={300} isOpen={false}>
                <div>
                    {user_type === 'admin' ? (
                        <img src="https://cdn1.iconfinder.com/data/icons/ios-11-glyphs/30/maintenance-512.png"
                             className="menu-item user-image" alt="User picture"/>
                    ) : (
                        <img
                            src="https://icons-for-free.com/iconfiles/png/512/person+user+icon-1320166085409390336.png"
                            className="menu-item user-image" alt="User picture"/>
                    )}
                </div>

                <div id="sidebar-cal">
                    <Calendar />
                </div>

                <a className="menu-item" href="/">
                    Home
                </a>

                <a className="menu-item" href="/Login">
                    Log Out
                </a>
            </Menu>
        );
    }
}

export default Sidebar;