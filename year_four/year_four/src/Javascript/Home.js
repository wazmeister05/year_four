import React from 'react';
import Sidebar from "./Sidebar";
import StudentLaunchpad from "./StudentLaunchpad";
import MaintenanceLaunchpad from "./MaintenanceLaunchpad";
import LecturerLaunchpad from "./LecturerLaunchpad";

class Home extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        const user_type = this.props.user;
        return (
            <div>
                <div><h1>Welcome, {user_type}</h1></div>
                <div>
                    <Sidebar/>
                </div>
                <div>
                    {user_type === 'admin' ? (
                        <MaintenanceLaunchpad/>
                    ): user_type === 'student' ? (
                        <StudentLaunchpad/>
                    ): user_type === 'lecturer' ? (
                        <LecturerLaunchpad/>
                    ):(
                        <Home/>
                    )}
                </div>

            </div>
        );
    }
}

export default Home;