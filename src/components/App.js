import React from "react";
import Header from "./Header.js";
import Semestre from "./Semestre.js";

import malla from "../res/malla.js";

class App extends React.Component {
    render() {
        const SemestreComponents = malla.map(
            (semestre) => <Semestre key={semestre.num_sem} data={semestre}/>
        );

        return(
            <div className="app">
                <Header />
                {SemestreComponents}
            </div>
        );
    }
}

export default App;