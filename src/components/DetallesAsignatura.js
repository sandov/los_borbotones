import React from "react";

//Beware: spaghetti code
//Here be dragons

class DetallesAsignatura extends React.Component {

    findPasado(id) {
        if (this.props.pasados.includes(id)) {
            return true;
        }
        return false;
    }

    findRamo(id){
        let semestre = 0;
        let index_ramo_semestre = 0;

        for (semestre = 0; semestre < this.props.malla.length; semestre++){
            for (index_ramo_semestre = 0; index_ramo_semestre < this.props.malla[semestre].ramos.length; index_ramo_semestre++){
                if (this.props.malla[semestre].ramos[index_ramo_semestre].id === id){
                    return this.props.malla[semestre].ramos[index_ramo_semestre];
                }
            }
        }
    }
    render() {

        let listaRequisitos;
        let espaciador = <span>&nbsp;</span>;

        if (this.props.data.requisitos.length === 0){
            listaRequisitos = <span>Ninguno</span>;
        }

        else {
            listaRequisitos = this.props.data.requisitos.map(
                (requisito) => {
                    let objeto_ramo = this.findRamo(requisito);
                    let nombre_requisito = objeto_ramo.nombre;
                    let codigo_requisito = objeto_ramo.codigo;
                    let pasado = <span className="cross">✘</span>;
                    if (this.findPasado(requisito)) pasado = <span className="tick">✔</span>;
                    return <div key={requisito}>{pasado}{nombre_requisito}<br/><span className="mono">({codigo_requisito})</span><br/></div>
                }
            )
        }

        if(!this.props.show) 
            return(<div></div>); //weird flex but ok

        else return(
            <div className="detalles-asignatura">
                {this.props.data.nombre} <br/>
                <span className="mono">{this.props.data.codigo}</span> <br/>
                <b>Requisitos:</b>  
                <br/>
                <div>
                    {listaRequisitos}
                </div>
            </div>
        );
    }

    //deprecated:
     /*findNombre(id_requisito) {
        let nombre = "nn";
        malla.forEach(semestre => {
            semestre.ramos.forEach(ramo => {
                if (ramo.id === id_requisito){
                    nombre = ramo.nombre;
                }
            });
        });
        return nombre;
    }
    findCodigo(id_requisito) {
        let codigo = "cc";
        malla.forEach(semestre => {
            semestre.ramos.forEach(ramo => {
                if (ramo.id === id_requisito){
                    codigo = ramo.codigo;
                    
                }
            });
        });
        return codigo;
    }*/
}

export default DetallesAsignatura;