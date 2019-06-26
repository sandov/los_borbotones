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

    let malla = malla_carpinteria_99;

        if (1) return(
            <form>
                <select>
                    <option value="informatica">informatica_08</option>
                    <option value="carpinteria">carpinteria</option>
                </select> 
                <input type="submit"></input>
            </form>
        )
    
        else return(
            <App malla={malla}/>
        );
    }    

    handleSelection(){

    }
}

export default Wrapper;