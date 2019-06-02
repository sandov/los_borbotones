import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Semestre extends React.Component {
    render(){
        return (
            <div classname="semestre">
                {"contenido_semestre"}
            </div>
        );
    }
}

class App extends React.Component {
    render() {
        return(
            <div classname="semestres_container">
                <Semestre />
                <Semestre />
            </div>
        );
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
);
