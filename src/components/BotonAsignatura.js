import React from "react";
import DetallesAsignatura from "./DetallesAsignatura.js";

class BotonAsignatura extends React.Component {
    constructor(){
        super();
        this.state = {
            activo: false
        }
        this.click_boton = this.click_boton.bind(this);
    }

    render() {
        return(
            <div className="boton-asignatura">
                <span  onClick={this.click_boton}>
                    [+]
                </span>
                <DetallesAsignatura data={this.props.data} show={this.state.activo} pasados={this.props.pasados}/>
            </div>
        );
    }

    click_boton(){
        this.setState(
            prevState => {
                return {
                    activo: !prevState.activo
                }
            }
        );  
    }
}

export default BotonAsignatura;