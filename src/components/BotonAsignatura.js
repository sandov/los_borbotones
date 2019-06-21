import React from "react";

class BotonAsignatura extends React.Component {
    constructor(){
        super();
        this.state = {
            pulsado: false
        }
    }

    click_boton(){
        alert("Clicked [+]");
    }

    render() {
        return(
            <dev className="boton-asignatura">
                <span  onClick={this.click_boton}>
                    [+]
                </span>
            </dev>
        );
    }
}

export default BotonAsignatura;