import React from "react";

class Asignatura extends React.Component {
    render(){
        return (
            <div className="asignatura">
                {this.props.data.nombre}
            </div>
        );
    }
}  

export default Asignatura;