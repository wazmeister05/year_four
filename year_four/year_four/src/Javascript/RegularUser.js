import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/Stylesheet.css';
import Course from './Course';
import ClassSelection from "./ClassSelection";


class RegularUser extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            code: "",
            page: "home",
            database: ""
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
            default:
                return <h1>ERROR</h1>
        }
    }


    render() {
        return (
            <div className="row">
                <div className="col-md-1">

                </div>
                <div id="page-wrap" className="col-md-11">
                    <div><h1>Welcome, {this.props.user_details.username}</h1></div>
                    <div>
                        {this.getPage()}
                    </div>
                    <div>
                        <p>
                            test
                        </p>
                    </div>
                </div>
            </div>
        );
    }
}

export default RegularUser;