import React from 'react'
import logo from './icon.png'
import Cart from '../Cart'

const aStyle = {
    textDecoration: 'none',
    color: 'inherit'
};

class Header extends React.PureComponent {
    render() {
        return (
            <header className="app-header">
                <div className="app-name"><img src={logo} className="app-logo"/>
                    <a href="/" style={aStyle}>Innoscripta Pizza</a>
                </div>
                <Cart />
            </header>
        );
    }
}

export default Header