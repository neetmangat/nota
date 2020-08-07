import React from 'react';

class Nav extends React.Component {
    render() {
        const { toggleNote, showNote, appHome } = this.props;

        return (
            <div className="nav-container">
                <div className="nav-logo" onClick={() => appHome()}>Nota</div>
                <div className="nav-button" onClick={() => toggleNote()} > {showNote ? 'X' : '+'} </div>
            </div>
        )
    }
}

export default Nav;