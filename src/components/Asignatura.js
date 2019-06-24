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
                <input type="checkbox" onClick={this.handleClick}/>
                {this.props.data.nombre} &nbsp;
                <BotonAsignatura data={this.props.data} pasados={this.props.pasados}/>
            </div>
        );
    }

}  

export default Asignatura;