import React from "react";
import Asignatura from "./Asignatura";

class Semestre extends React.Component {
  
    render(){

        const AsignaturaComponents = this.props.data.ramos.map(
            (ramo) => <Asignatura data={ramo} />
        );

        return (
            <div className="semestre">
                <h2>Semestre {this.props.data.num_sem}</h2>
                {AsignaturaComponents}
            </div>
        );
    }
}

export default Semestre;