import React from 'react';
import '../css/Stylesheet.css';
import 'bootstrap/dist/css/bootstrap.min.css';

class Course extends React.Component{

    constructor(props) {
        super(props);
    }

    render(){
        return(
            <div>
                <h2>Course {this.props.code}</h2>
            </div>
        );
    }
}

export default Course;