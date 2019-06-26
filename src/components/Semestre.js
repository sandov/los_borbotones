import React from "react";
import Asignatura from "./Asignatura";

class Semestre extends React.Component {
  
    render(){

        const AsignaturaComponents = this.props.data.ramos.map(
            (ramo) => <Asignatura key={ramo.id} data={ramo} switch={this.props.switch} pasados={this.props.pasados} malla={this.props.malla}/>
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