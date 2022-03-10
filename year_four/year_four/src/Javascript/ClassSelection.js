import React from "react";

class ClassSelection extends React.Component{

    constructor(props) {
        super(props);
    }

    getCourseCodes(){
        //TODO: here, get a list of classes the user is enrolled in.
        return ["CS451", "CS432"];
    }

    render(){
        let courseCodes = this.getCourseCodes();
        return(
            <div>
                <br/>
                <div className={"text-center"} id={"courseChoice"}>
                    <div>
                        {courseCodes.map(code => (
                            <button onClick={() => {
                                this.props.setCourse(code);
                                }
                            }>{code}</button>
                        ))}
                    </div>
                </div>
            </div>
        )
    }
}

export default ClassSelection;