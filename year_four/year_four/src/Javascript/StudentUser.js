import React from 'react';
import '../css/Stylesheet.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Course from './Course';
import ClassSelection from "./ClassSelection";

class StudentUser extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            code: "",
            page: "studentCourseSelection"
        };
    }

    setCourse = (course) => {
        this.setState({code: course, page: "chosenCourse"});
    }

    render() {
        switch(this.state.page){
            case "studentCourseSelection":
                return <ClassSelection setCourse={this.setCourse}/>
            case "chosenCourse":
                return <Course code={this.state.code} />
        }
    }
}

export default StudentUser;