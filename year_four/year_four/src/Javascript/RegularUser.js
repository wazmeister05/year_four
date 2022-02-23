import React from 'react';
import '../css/Stylesheet.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Course from './Course';
import ClassSelection from "./ClassSelection";
import Sidebar from "./Sidebar";
import AdminUser from "./AdminUser";

class RegularUser extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            code: "",
            page: "home"
        };
    }

    setCourse = (course) => {
        this.setState({code: course, page: "chosenCourse"});
    }

    setPage = (newPage) => {
        this.setState({page: newPage})
    }

    getPage() {
        switch (this.state.page) {
            case "home":
                return <ClassSelection setCourse={this.setCourse}/>
            case "chosenCourse":
                return <Course code={this.state.code}/>
        }
    }

    render() {
        return (
            <div className="row">
                <div className="col-md-1">
                    <Sidebar navigate pageWrapId={'page-wrap'} outerContainerId={'outer-container'}
                             user={this.props.user_details} setPage={this.setPage}/>
                </div>
                <div id="page-wrap" className="col-md-11" id="welcome">
                    <div><h1>Welcome, {this.props.user_details.username}</h1></div>
                    <div>
                        {this.getPage()}
                    </div>
                </div>
            </div>
        );
    }
}

export default RegularUser;