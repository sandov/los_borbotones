import React from "react";
import BotonAsignatura from "./BotonAsignatura.js";

class Asignatura extends React.Component {
    render(){
        return (
            <div className="asignatura">
                {this.props.data.nombre} &nbsp;
                <BotonAsignatura />
            </div>
        );
    }
}  

export default Asignatura;