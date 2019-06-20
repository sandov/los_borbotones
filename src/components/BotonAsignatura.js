import React from "react";

function click_boton(){
    alert("Hizo clic en botón ver más");
}

class BotonAsignatura extends React.Component {
    render() {
        return(
            <span className="boton-asignatura" onClick={click_boton}>
                [+]
            </span>
        );
    }
}

export default BotonAsignatura;