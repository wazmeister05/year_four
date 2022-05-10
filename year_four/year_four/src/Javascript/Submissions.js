import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'jquery/dist/jquery.min.js';
import '../css/Stylesheet.css';


class Submissions extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            language: "",

        };
    }

    runMoss(){
        let selectElement = document.getElementById('lang');
        let output = selectElement.value;
    }


    render(){
        return(
            <div>
                <select id="lang">
                    <option value="Java">Java</option>
                    <option value="Python">Python</option>
                    <option value="C" disabled>C</option>
                    <option value="C++" disabled>C++</option>
                    <option value="C#" disabled>C#</option>
                    <option value="Visual Basic" disabled>Visual Basic</option>
                    <option value="Javascript" disabled>Javascript</option>
                    <option value="FORTRAN" disabled>FORTRAN</option>
                    <option value="ML" disabled>ML</option>
                    <option value="Haskell" disabled>Haskell</option>
                    <option value="Lisp" disabled>Lisp</option>
                    <option value="Scheme" disabled>Scheme</option>
                    <option value="Pascal" disabled>Pascal</option>
                    <option value="Modula2" disabled>Modula2</option>
                    <option value="Ada" disabled>Ada</option>
                    <option value="Perl" disabled>Perl</option>
                    <option value="TCL" disabled>TCL</option>
                    <option value="Matlab" disabled>Matlab</option>
                    <option value="VHDL" disabled>VHDL</option>
                    <option value="Verilog" disabled>Verilog</option>
                    <option value="Spice" disabled>Spice</option>
                    <option value="MIPS Assembly" disabled>MIPS Assembly</option>
                    <option value="a8086 Assembly" disabled>a8086 Assembly</option>
                    <option value="HCL2" disabled>HCL2</option>
                </select><br/><br/>
                <button className={"btn btn-success"} onClick={() =>this.runMoss()}>Check</button><br/>
            </div>
        );
    }
}

export default Submissions;