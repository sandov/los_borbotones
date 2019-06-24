import React from "react";
import malla from "./../res/malla.js";

//Beware: spaghetti code
//Here be dragons

class DetallesAsignatura extends React.Component {

    findPasado(id) {
        return false;
    }

    findRamo(id){
        let ramo = null;
        let semestre = 0;
        let index_ramo_semestre = 0;

        for (semestre = 0; semestre < malla.length; semestre++){
            for (index_ramo_semestre = 0; index_ramo_semestre < malla[semestre].ramos.length; index_ramo_semestre++){
                if (malla[semestre].ramos[index_ramo_semestre].id === id){
                    return malla[semestre].ramos[index_ramo_semestre];
                }
            }
        }
    }
    render() {

        let listaRequisitos;
        let espaciador = <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>;

        if (this.props.data.requisitos.length === 0){
            listaRequisitos = <span>{espaciador}Ninguno</span>;
        }

        else {
            listaRequisitos = this.props.data.requisitos.map(
                (requisito) => {
                    let objeto_ramo = this.findRamo(requisito);
                    let nombre_requisito = objeto_ramo.nombre;
                    let codigo_requisito = objeto_ramo.codigo;
                    return <span key={requisito}>{espaciador}{nombre_requisito}{" "}<br/>{espaciador}({codigo_requisito})<br/></span>
                }
            )
        }

        if(!this.props.show) 
            return(<div></div>); //weird flex but ok

        else return(
            <div className="detalles-asignatura">
                {this.props.data.nombre} <br/>
                {this.props.data.codigo} <br/>
                Requisitos:
                <br/>
                {listaRequisitos}
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