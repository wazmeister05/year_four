import React, {useState} from "react";

function useInput() {
    const [value, setValue] = useState();
    function onChange(e) {
        setValue(e.target.value);
    }
    return {
        value,
        onChange,
    };
}

function TextAreaHandle(version) {
    const inputProps = useInput();
    return (
        <div>
            <div>
                <textarea id={"announcementBox"}
                          {...inputProps}
                          placeholder="Type in here"
                />
            </div>
            <button type={"submit"} id={"submitTextArea"} onClick={() => {handle(version, inputProps.value)}}>Submit</button>
            <br/>
            <br/>
        </div>
    );
}

function handle(type, text) {
    if(type.version === "announce") {
        sendAnnouncement(text);
    }
    else if(type.version === "coursework"){
        coursework(text);
    }
}

function sendAnnouncement(text){
    console.log(text);
}

function coursework(text){
    console.log(text);
}

export default TextAreaHandle