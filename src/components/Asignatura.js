import React from "react";
import BotonAsignatura from "./BotonAsignatura.js";

class Asignatura extends React.Component {
    constructor(){
        super();
        this.state = {
            pasado: false
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        console.log(this.state.pasado);
        this.setState(
            prevState => {
                return {
                    pasado: !prevState.pasado
                }
            }
        );
        this.props.switch(this.props.data.id);
    }

    render(){
        return (
            <div className="asignatura">
                <input type="checkbox" class="check_asignatura" onClick={this.handleClick}/>
                <div className="nombre_asignatura_container"> {this.props.data.nombre} </div> &nbsp;
                <BotonAsignatura data={this.props.data} pasados={this.props.pasados} malla={this.props.malla}/>
            </div>
        );
    }

}  

export default Asignatura;