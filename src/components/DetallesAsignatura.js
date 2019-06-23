import React from "react";

class DetallesAsignatura extends React.Component {
    render() {

        let listaRequisitos;
        let espaciador = <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>;

        if (this.props.data.requisitos.length === 0){
            listaRequisitos = <span>{espaciador}Ninguno</span>;
        }

        else {
            listaRequisitos = this.props.data.requisitos.map(
                requisito => <span key={requisito}>{espaciador}{requisito}<br/></span>
                //no estoy seguro de que esta sea la forma correcta de pasar una unique key a un elemento,
                //pero las alertas sobre el uniqueness del elemento desaparecen
                //todo: pasar el nombre/codigo en lugar del id.
            )
        }

        if(!this.props.show) 
            return(<div></div>); //weird flex but ok

        else return(
            <div className="detalles-asignatura">
                {this.props.data.nombre} <br/>
                {this.props.data.codigo} <br/>
                Requisitos: <br/>
                {listaRequisitos}
            </div>
        );
    }
}

export default DetallesAsignatura;