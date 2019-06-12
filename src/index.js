import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

let ramos = {
    1: ["Álgebra", "Geometría", "Carpintería nuclear"],
    2: ["Cálculo en una variable", "Física: Mecánica"]
}

class Semestre extends React.Component {
    render(){
        return (
            <div className="semestre">
                <h2>Semestre {this.props.num}</h2>
                <Asignatura />
            </div>
        );
    }
}

class Asignatura extends React.Component {
    render(){
        return (
            <div className="asignatura">
                {this.props.nombre}
            </div>
        );
    }
}   

class App extends React.Component {
    render() {
        return(
            <div className="app">
                <Semestre num={1} />
                <Semestre num={2} />
                <Semestre num={3} />
                <Semestre num={4} />
            </div>
        );
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
);

