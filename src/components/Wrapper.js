import React from "react";
import App from "./App.js";
import malla_informatica_08 from "../res/malla_informatica_08.js";
import malla_carpinteria_99 from "../res/malla_carpinteria_99.js";

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
        if (this.state.malla == "informatica_08")
        {malla = malla_informatica_08;}
        else if(this.state.malla == "carpinteria_99")
        {malla = malla_carpinteria_99;}
    
        if (this.state.seleccionado)
            return(
                <App malla={malla}/>
        );
        else
            return(
                <div className="selector_container">
                    <h1>Seleccionar carrera y malla</h1>
                    <form name="selector_malla">
                        <select name="carrera">
                            <option value="informatica_08">informatica 2008</option>
                            <option value="carpinteria_99">carpinteria 2099</option>
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