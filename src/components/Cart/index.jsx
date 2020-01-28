import React from 'react'
import cart from './cart.png'
import { connect, ReactReduxContext } from 'react-redux'

class Cart extends React.PureComponent {
    render() {
        return (
            <div className="app-cart">
                <img src={cart}/>
                <div className="cart-info">
                    <div className="cart-cost">0 $</div>
                    <div className="cart-goods-count">{this.props.store.length} шт.</div>
                </div>
            </div>
        );
    }
}

export default connect(
    state => ({
        store: state
    })
)(Cart);