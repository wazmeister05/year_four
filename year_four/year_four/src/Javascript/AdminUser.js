import React from 'react';
import '../css/Stylesheet.css';
import 'bootstrap/dist/css/bootstrap.min.css';

class AdminUser extends React.Component {

    function
    Test(colour){
        return <h3>Test {colour}</h3>;
    }

    render() {
        return (
            <div>
                <h1>{this.Test("blue")}</h1>
            </div>
        )
    }
}

export default AdminUser;