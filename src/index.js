import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

let ramos = [
    ["Álgebra para Ingeniería", "Geometría para Ingeniería", "Introducción a la Ingeniería", "Introducción a la Programación"], 
    ["Cálculo I para Ingeniería", "Física I para Ingeniería", "Álgebra Lineal para Ingeniería", "Programación"],
    ["Física II para Ingeniería", "Ecuaciones Diferenciales para Ingeniería", "Programación Orientada a Objetos", "Estructuras discretas"]
];

class Semestre extends React.Component {
  
    render(){
        let numero_semestre = 1;
        
        if (this.props.num == 2)
            numero_semestre  = 2;
        if (this.props.num == 3)
            numero_semestre  = 3;

        return (
            <div className="semestre">
                <h2>Semestre {this.props.num}</h2>
                <Asignatura nombre={ramos[numero_semestre-1][0]} />
                <Asignatura nombre={ramos[numero_semestre-1][1]} />
                <Asignatura nombre={ramos[numero_semestre-1][2]} />
                <Asignatura nombre={ramos[numero_semestre-1][3]} />
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
                <Header />
                <Semestre num={1} />
                <Semestre num={2} />
                <Semestre num={3} />
            </div>
        );
    }
}

class Header extends React.Component {
    render() {
        return(
            <div className="header">
                
                <h1>Ingeniería Civil en Informática — Malla 2012</h1>
            </div>
        );
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
);

