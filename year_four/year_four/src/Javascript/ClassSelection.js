import React from "react";

class ClassSelection extends React.Component{

    constructor(props) {
        super(props);
    }

    getCourseCodes(){
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