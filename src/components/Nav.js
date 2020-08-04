import React from 'react';

class Nav extends React.Component {
    render() {
        const { toggleNote, showNote } = this.props;

        return (
            <div className="nav-container">
                <div className="nav-logo">Nota</div>
                <div className="nav-button" onClick={() => toggleNote()} > {showNote ? 'x' : '+'} </div>
            </div>
        )
    }
}

export default Nav;