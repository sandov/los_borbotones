import React from "react";
import App from "./App.js";
import malla_informatica_08 from "../res/malla_informatica_08.js";
import malla_obras_18 from "../res/malla_obras_18.js";

class Wrapper extends React.Component{
    constructor(){
        super();
        this.state = {
            seleccionado:false,
            malla: null
        }
        this.handleSelection = this.handleSelection.bind(this);
    }

    render(){

        let malla;
        let nombre_malla;
        if (this.state.malla == "informatica_08"){
            malla = malla_informatica_08;
            nombre_malla = "Ingeniería Civil en Informática — malla 2008"
        }
        else if(this.state.malla == "obras_18")
        {
            malla = malla_obras_18;
            nombre_malla = "Ingeniería Civil en Obras Civiles — malla 2018"
        }
    
        if (this.state.seleccionado)
            return(
                <App malla={malla} nombre_malla={nombre_malla}/>
        );
        else
            return(
                <div className="selector_container">
                    <h1>Seleccionar carrera y malla</h1>
                    <form name="selector_malla">
                        <select name="carrera">
                            <option value="informatica_08">Informática 2008</option>
                            <option value="obras_18">Obras Civiles 2018</option>
                        </select> 
                        <button onClick={this.handleSelection}>Ver malla</button>
                    </form>
                </div>
            );
    }    

    handleSelection(){
        let form = document.forms[0];
        let malla_seleccionada = form.elements.carrera.value;

        this.setState(
            {
                seleccionado: true,
                malla : malla_seleccionada
            }
        );
    }
}

export default Wrapper;