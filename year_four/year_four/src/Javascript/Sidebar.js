import React from 'react';
import { stack as Menu } from 'react-burger-menu';
import '../css/Sidebar.css';
import '../css/Stylesheet.css';
import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css';

class Sidebar extends React.Component{

    constructor(props){
        super(props);
    }

    render() {
        return (
            <Menu width={300} isOpen={false}>
                <h1 className="text-center">{this.props.user.username}</h1>
                <div>
                    {this.props.user === 'admin' ? (
                        <img src="https://cdn1.iconfinder.com/data/icons/ios-11-glyphs/30/maintenance-512.png"
                             className="menu-item user-image"/>
                    ) : (
                        <img
                            src="https://icons-for-free.com/iconfiles/png/512/person+user+icon-1320166085409390336.png"
                            className="menu-item user-image"/>
                    )}
                </div>

                <div id="sidebar-cal">
                    <Calendar />
                </div>

                <a className="menu-item" >
                    <button className="sidebarButton" onClick={() => {
                        this.props.setPage("home")
                        }}>Home
                    </button>
                </a>
                <a>
                    <button onClick={() => {
                        this.logout()
                    }}>Log Out</button>
                </a>

            </Menu>
        );
    }

    logout() {
        localStorage.clear();
        window.location.href = '/';
    }
}

export default Sidebar;
