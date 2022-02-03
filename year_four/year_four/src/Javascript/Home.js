import React from 'react';
import Sidebar from "./Sidebar";
import StudentLaunchpad from "./StudentLaunchpad";

class Home extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Sidebar/>
                <StudentLaunchpad/>
            </div>
        );
    }
}

export default Home;