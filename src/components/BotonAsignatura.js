import React from "react";

class BotonAsignatura extends React.Component {
    render() {
        return(
            <dev className="boton-asignatura">
                <span  onClick={this.click_boton}>
                    [+]
                </span>
            </dev>
        );
    }

    click_boton(){
        alert("Clicked [+]");
    }
}

export default BotonAsignatura;