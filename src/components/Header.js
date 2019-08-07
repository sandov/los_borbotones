import React from "react";

class Header extends React.Component {
    render() {
        return(
            <div className="header">
                <h1>{this.props.nombre_malla}</h1>
            </div>
        );
    }
}

export default Header;
