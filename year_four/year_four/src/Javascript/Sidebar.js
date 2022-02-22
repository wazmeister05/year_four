import React from 'react';
import { stack as Menu } from 'react-burger-menu';
import '../css/Sidebar.css';
import '../css/Stylesheet.css';
import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css';
import Main from './Main';

class Sidebar extends React.Component{

    constructor(props){
        super(props);
    }

    render() {
        return (
            <Menu width={300} isOpen={false}>
                <h1 className="text-center">{this.props.user.username}</h1>
                {console.log(this.props.user)}
                {console.log(this.props.user.username)}
                <div>
                    {this.props.user === 'admin' ? (
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

                <a className="menu-item" >

                    <button className="sidebarButton" onClick={() => {
                        return <Main user_returned={this.props.user} />
                        }}>Home
                    </button>
                </a>

                <a className="menu-item" href="/Login">
                    Log Out
                </a>
            </Menu>
        );
    }
}

export default Sidebar;