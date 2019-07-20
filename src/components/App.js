import React from "react";
import Header from "./Header.js";
import Semestre from "./Semestre.js";

class App extends React.Component {

    constructor(){
        super();
        this.state = {
            pasados: []
        }
        this.switchPasado = this.switchPasado.bind(this);
    }

    switchPasado(id){
        if (this.state.pasados.includes(id)){
            this.setState(
                prevState => {
                    return {
                        pasados: prevState.pasados.filter(elem => elem!==id)
                    }
                }
            );
            console.log("asd");
        }
        else{
            this.setState(
                prevState => {
                    return {
                        pasados: prevState.pasados.concat([id])
                    }
                }
            );
        }

        console.log(this.state.pasados);
    }

    render() {
        let SemestreComponents = this.props.malla.map(
            (semestre) => <Semestre key={semestre.num_sem} data={semestre} switch={this.switchPasado} pasados={this.state.pasados} malla={this.props.malla}/>
        );

        return(
            <div className="app">
                <Header nombre_malla={this.props.nombre_malla}/>
                <div className="semestres_container">
                    {SemestreComponents}
                </div>
            </div>
        );
    }
}

export default App;