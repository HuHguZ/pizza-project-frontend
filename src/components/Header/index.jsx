import React from 'react'
import logo from './icon.png'
import Cart from '../Cart'

class Header extends React.PureComponent {
    render() {
        return (
            <header className="app-header">
                <div className="app-name"><img src={logo} className="app-logo"/>Innoscripta Pizza</div>
                <Cart />
            </header>
        );
    }
}

export default Header